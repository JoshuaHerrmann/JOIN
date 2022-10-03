import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginPage: boolean = true;
  constructor(public auth: AuthenticationService, public router: Router) {
    router.events.subscribe((events) =>{
     if(events instanceof NavigationEnd){
      events['url'] == '/login'? this.loginPage = true : this.loginPage = false;
     }
    })
   }

  ngOnInit(): void {
  }
}


