import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginPage: boolean = false;
  constructor(public auth: AuthenticationService) { }

  ngOnInit(): void {
  }
 












/////////////////////////// TEST
  userlist:any={
    'users':[
      {'userName': 'Max Mustermann',
      'email': 'testmail@web.de',
      'shortHandName': 'MM',
      'userId': 'userId1'}
    ]
  }
}


