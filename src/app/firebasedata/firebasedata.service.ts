import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthenticationService } from '../authentication/authentication.service';
@Injectable({
  providedIn: 'root'
})
export class FirebasedataService {
  userdata$: Observable<any>;
  userdataId$: Observable<any>;
  usercontacts$: Observable<any>;
  userlist$: Observable<any>;
  userid: string; 
  

  // observable für detail contacts
  private userData = new BehaviorSubject<any>({})
  currentUserData$ = this.userData.asObservable()
  private detailView = new BehaviorSubject<boolean>(false)
  currentUserView$ = this.detailView.asObservable()


  constructor(public firestore: AngularFirestore) {
    //console.log(localStorage.getItem('JOIN_uid'))
    localStorage.setItem('JOIN_uid', 'noid')
    //this.updateData()
   }


   updateUid(){
    console.log('HETETETE', this.userid)
    this.userid = localStorage.getItem('JOIN_uid');
    console.log('DANACH', this.userid)
   }


   updateData(){
    console.log('update')
   if(this.userid == 'noid' || this.userid == '' || this.userid == undefined){
    console.log('No userdata available')
    this.userdata$ = this.firestore.collection('userdata').doc('noid').collection('tasks').valueChanges()
    this.usercontacts$ = this.firestore.collection('usercontacts').doc('noid').valueChanges()
    this.userlist$ = this.firestore.collection('userlist').doc('noid').valueChanges()
    return
   }
    this.userdata$ = this.firestore.collection('userdata').doc(this.userid).collection('tasks').snapshotChanges()
    this.usercontacts$ = this.firestore.collection('usercontacts').doc(this.userid).collection('contacts').snapshotChanges()
    this.userlist$ = this.firestore.collection('userlist').doc(this.userid).valueChanges()
  }

  
   addTaskToDB(task:any){
    try{this.firestore.collection('userdata').doc(this.userid).collection('tasks').add(task).then(()=>{
      console.log('Succesfully added Task to DB!')
     })}catch(e){
      console.log(e)
     }
   } 
   
   
  updateTaskFromDB(task:any,taskid:string){
    try{
      this.firestore.collection('userdata').doc(this.userid).collection('tasks').doc(taskid).delete();
      this.addTaskToDB(task);
    }catch(e){
      console.log('Update Failed! Error:')
      console.error(e)
    }
   }
//contacts
   addContactToDB(contact:any){
    this.firestore.collection('usercontacts').doc(this.userid).collection('contacts').doc().set(contact).then(()=>{
      console.log('Succesfully created new Contact to DB!')
    }).catch((e)=>{
      console.warn('Error', e)
    })
   }

   updateContactFromDB(contact:any, contactId:any){
    try{
      this.firestore.collection('usercontacts').doc(this.userid).collection('contacts').doc(contactId).delete();
      this.addContactToDB(contact);
    }catch(e){
      console.log('Update Failed! Error:')
      console.error(e)
    }
   }
   // observable
  nextUserData(data){
    this.userData.next(data)
  }
  

  updateDetailView(bool){
    this.detailView.next(bool)
  }
}
