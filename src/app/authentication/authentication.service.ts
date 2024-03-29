import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
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
  failedLogin:boolean= false;
  noMail:boolean= false;
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
          if(localStorage.getItem('JOIN_uid') == '' || localStorage.getItem('JOIN_uid') == 'noid'){
            localStorage.setItem('JOIN_uid', user['uid'])
          }
          this.firebaserservice.updateUid()
          this.firebaserservice.updateData()
          this.router.navigateByUrl('/main')
        }else{
          console.log('Logged out')
          localStorage.setItem('currentUser', 'false')
          this.router.navigateByUrl('/login')
        }
      })
      
   }


   contact = new Contact(
   // {email : 'testmail@test.de', firstname: 'Guest', lastname: 'Guest', phone: 919191919191919, uid: 'ot2eEvfgnnM6cTsIUoWwRuLIPPk2'}
   );

   loginWithEmailAndPassword(email:string, password:string){
    this.failedLogin = false;
    this.auth.signInWithEmailAndPassword(email, password).then((data)=>{
      console.log('Logged in', data);
      localStorage.setItem('currentUser', 'true')
      localStorage.setItem('JOIN_uid', data['user']['uid'])
      this.firebaserservice.updateUid()
      this.firebaserservice.updateData()
      this.router.navigateByUrl('/main');
      this.failedLogin = false;
    }).catch((e)=>{
      this.failedLogin = true;
      console.log('Error Log in', e);
    });
   }


   logout(){
    this.auth.signOut().then(()=>{
      console.log('Logged out');
      localStorage.setItem('JOIN_uid', '')
      this.firebaserservice.nextUserData({})
      this.firebaserservice.updateDetailView(false)
      this.firebaserservice.updateUserFeedBack('')
      this.router.navigateByUrl('/logout');
      this.failedLogin = false;
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
      this.failedLogin = false;
    })
    .catch((e)=>{
      this.failedLogin = true;
      console.log('error creating new account', e);
    });
   }


   logInAsGuest(email: string, password: string){
    this.auth.signInWithEmailAndPassword(email, password).then((data)=>{
      console.log('Logged in as guest');
      localStorage.setItem('currentUser', 'true')
      localStorage.setItem('JOIN_uid', data['user']['uid'])
      this.firebaserservice.updateUid()
      this.firebaserservice.updateData()
      this.router.navigateByUrl('/main');
      this.failedLogin = false;
      }).catch(e=>{
        this.failedLogin = true;
        console.log('Error Log in', e);
    })
   }

   resetPasswortWithMail(email:string){
    if(email !== undefined ){
      this.auth.sendPasswordResetEmail(email).then(()=>{
        this.router.navigateByUrl('/reset-send/')
        this.noMail = false
      }).catch(e=>{
          console.warn('ERROR cant send email', e)
          this.noMail = true
      })
    }else{
      this.noMail = true;
    }
  }
}
