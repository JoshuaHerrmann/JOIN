import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  email:string;
  password:string;
  username:string;
  constructor(public auth: AuthenticationService) { }

  ngOnInit(): void {
  }

}
