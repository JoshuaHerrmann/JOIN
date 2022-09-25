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
  userlist$: Observable<any>
  constructor(public firestore: AngularFirestore) {
    this.userdata$ = firestore.collection('userdata').valueChanges()
    this.userlist$ = firestore.collection('userlist').valueChanges()
   }

   addTaskToDB(task:any){
    try{this.firestore.collection('userdata').add(task).then(()=>{
      console.log('Succesfully added Task to DB!')
     })}catch(e){
      console.log(e)
     }
     
     
   } 
}
