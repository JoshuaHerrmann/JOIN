import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { Contact } from 'src/app/models/contact.class';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  notfilled:boolean = false;

  email:string;
  password:string;
  username:string;
  phone:number;
  contact = new Contact()
  constructor(public auth: AuthenticationService) { }

  ngOnInit(): void {

  }

  signUpAuth(){
    if(this.contact.email == '' || this.contact.firstname == '' || this.contact.lastname == '' || this.contact.phone === null||undefined || this.password == ''){
      this.notfilled = true;
      setTimeout(() => {
        this.notfilled = false;
      }, 4000);
    }else{
      this.auth.signUpWithEmailAndPassword(this.contact.email, this.password, this.contact.returnToJson())
    }
  }
  
}
