import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { Contact } from 'src/app/models/contact.class';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  email:string;
  password:string;
  username:string;
  phone:number;
  contact = new Contact()
  constructor(public auth: AuthenticationService) { }

  ngOnInit(): void {
  }

}
