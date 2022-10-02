import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginPage: boolean = true;
  constructor(public auth: AuthenticationService, public router: Router) {
    router.events.subscribe(() =>{
      let url = router.getCurrentNavigation();
      //console.log(url)
      url['finalUrl']['root']['children']['primary']['segments'][1]? this.loginPage = false : this.loginPage = true;
    })
   }

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


