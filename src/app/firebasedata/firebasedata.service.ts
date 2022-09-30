import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthenticationService } from '../authentication/authentication.service';
@Injectable({
  providedIn: 'root'
})
export class FirebasedataService {
  userdata$: Observable<any>;
  userlist$: Observable<any>;
  userid: string; 
  constructor(public firestore: AngularFirestore) {
    console.log(localStorage.getItem('JOIN_uid'))
    this.updateData()
   }


   updateUid(){
    this.userid = localStorage.getItem('JOIN_uid')
   }


   updateData(){
    this.updateUid()
   if(this.userid == ''){
    console.log('nichts')
    this.userdata$ = this.firestore.collection('userdata').doc('noid').collection('tasks').valueChanges()
    this.userlist$ = this.firestore.collection('userlist').doc('noid').valueChanges()
    return
   }
    this.userdata$ = this.firestore.collection('userdata').doc(this.userid).collection('tasks').valueChanges()
    this.userlist$ = this.firestore.collection('userlist').valueChanges()
   }


   addTaskToDB(task:any){
    try{this.firestore.collection('userdata').doc(this.userid).collection('tasks').add(task).then(()=>{
      console.log('Succesfully added Task to DB!')
     })}catch(e){
      console.log(e)
     }
   } 


   addContactToDB(contact:any){
    this.firestore.collection('usercontacts').doc(this.userid).set(contact).then(()=>{
      console.log('Succesfully created new Contact to DB!')
    }).catch((e)=>{
      console.warn('Error', e)
    })
   }
}
