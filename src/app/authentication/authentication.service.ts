import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebasedataService } from '../firebasedata/firebasedata.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  constructor(
    public auth: AngularFireAuth, 
    public router: Router, 
    private firestore: AngularFirestore,
    private firebaserservice: FirebasedataService) {
      auth.onAuthStateChanged((user)=>{
        if(user){
          console.log('Logged in', user);
          localStorage.setItem('currentUser', 'true')
          if(localStorage.getItem('JOIN_uid') == ''){
            localStorage.setItem('JOIN_uid', user['uid'])
            location.reload()
          }
        }else{
          console.log('Logged out')
          localStorage.setItem('currentUser', 'false')
        }
      })
      
   }




   loginWithEmailAndPassword(email:string, password:string){
    this.auth.signInWithEmailAndPassword(email, password).then((data)=>{
      console.log('Logged in', data);
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
      this.router.navigateByUrl('/logout');
    })
    .catch((e)=>{
      console.log('Error Logout', e);
    });
   }


   signUpWithEmailAndPassword(email:string, password:string){
    this.auth.createUserWithEmailAndPassword(email, password).then(data=>{
      console.log('created new account', data);
      this.firestore.collection('userdata').doc(data['user']['uid']).set({})
      this.firestore.collection('usercontacts').doc(data['user']['uid']).set({})
      this.firestore.collection('userlist').doc(data['user']['uid']).set({})
      this.router.navigateByUrl('/main');
    })
    .catch((e)=>{
      console.log('error creating new account', e);
    });
   }


   logInAsGuest(email: string, password: string){
    this.auth.signInWithEmailAndPassword(email, password).then((data)=>{
      console.log('Logged in as guest');
      localStorage.setItem('JOIN_uid', data['user']['uid'])
      this.firebaserservice.updateData()
      this.router.navigateByUrl('/main');
      }).catch(e=>{
        console.log('Error', e)
    })
   }
}
