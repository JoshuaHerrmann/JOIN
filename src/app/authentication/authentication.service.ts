import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router, RouterLink } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public auth: AngularFireAuth, public router: Router) {
   }

   loginWithEmailAndPassword(email:string, password:string){
    this.auth.signInWithEmailAndPassword(email, password).then((data)=>{
      console.log('Logged in', data);
      this.router.navigateByUrl('/main');
    }).catch((e)=>{
      console.log('Error Log in', e);
    });
   }


   logout(){
    this.auth.signOut().then((data)=>{
      console.log('Logged out', data);
      this.router.navigateByUrl('/logout');
    })
    .catch((e)=>{
      console.log('Error Logout', e);
    });
   }


   signUpWithEmailAndPassword(email:string, password:string){
    this.auth.createUserWithEmailAndPassword(email, password).then(data=>{
      console.log('created new account', data);
      this.router.navigateByUrl('/login');
    })
    .catch((e)=>{
      console.log('error creating new account', e);
    });
   }
}
