import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class FirebasedataService {
  userdata$: Observable<any>;
  userlist$: Observable<any>;
  userid: string = 'wzJDopKHiIaMYoDDa7Sjs5e7F602'; //wird gegen actual userid ausgetausche als variable
  constructor(public firestore: AngularFirestore) {
    this.userdata$ = firestore.collection('userdata').doc(this.userid).collection('tasks').valueChanges()
    this.userlist$ = firestore.collection('userlist').valueChanges()
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
