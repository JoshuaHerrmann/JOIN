import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebasedataService } from '../firebasedata/firebasedata.service';
import { Contact } from '../models/contact.class';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user:any;
  constructor(
    public auth: AngularFireAuth, 
    public router: Router, 
    private firestore: AngularFirestore,
    private firebaserservice: FirebasedataService) {
      auth.onAuthStateChanged((user)=>{
        if(user){
          this.user = user
          console.log('Logged in', user);
          localStorage.setItem('currentUser', 'true')
          if(localStorage.getItem('JOIN_uid') == ''){
            localStorage.setItem('JOIN_uid', user['uid'])
          }
        }else{
          console.log('Logged out')
          localStorage.setItem('currentUser', 'false')
        }
      })
      
   }


   contact = new Contact(
    {email : 'testmail@test.de', firstname: 'Guest', lastname: 'Guest', phone: 919191919191919, uid: 'ot2eEvfgnnM6cTsIUoWwRuLIPPk2'}
   );

   loginWithEmailAndPassword(email:string, password:string){
    this.auth.signInWithEmailAndPassword(email, password).then((data)=>{
      console.log('Logged in', data);
      localStorage.setItem('currentUser', 'true')
      localStorage.setItem('JOIN_uid', data['user']['uid'])
      this.firebaserservice.updateData()
      this.router.navigateByUrl('/main');
    }).catch((e)=>{
      console.log('Error Log in', e);
    });
   }


   logout(){
    this.auth.signOut().then(()=>{
      console.log('Logged out');
      localStorage.setItem('JOIN_uid', '')
      this.firebaserservice.nextUserData({})
      this.router.navigateByUrl('/logout');
    })
    .catch((e)=>{
      console.log('Error Logout', e);
    });
   }


   signUpWithEmailAndPassword(email:string, password:string, userdata:object){
    this.auth.createUserWithEmailAndPassword(email, password).then(data=>{
      console.log('created new account', data);
      localStorage.setItem('currentUser', 'true')
      userdata['uid'] = data['user']['uid']
      this.firestore.collection('userdata').doc(data['user']['uid']).set({})
      this.firestore.collection('usercontacts').doc(data['user']['uid']).collection('contacts').add(this.contact.returnToJson())
      this.firestore.collection('userlist').doc(data['user']['uid']).set(userdata)
      this.router.navigateByUrl('/main');
    })
    .catch((e)=>{
      console.log('error creating new account', e);
    });
   }


   logInAsGuest(email: string, password: string){
    this.auth.signInWithEmailAndPassword(email, password).then((data)=>{
      console.log('Logged in as guest');
      localStorage.setItem('currentUser', 'true')
      localStorage.setItem('JOIN_uid', data['user']['uid'])
      this.firebaserservice.updateData()
      this.router.navigateByUrl('/main');
      }).catch(e=>{
        console.log('Error', e)
    })
   }
}
