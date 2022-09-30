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
    this.userdata$ =this.firestore.collection('userdata').doc(this.userid).collection('tasks').valueChanges()
    this.userlist$ = this.firestore.collection('userlist').valueChanges()
   }


   addTaskToDB(task:any){
    try{this.firestore.collection('userdata').doc(this.userid).collection('tasks').add(task).then(()=>{
     // this.userid das dokuement muss mit dem für die userid ausgetauscht werden
      console.log('Succesfully added Task to DB!')
     })}catch(e){
      console.log(e)
     }
     
     
   } 
}
