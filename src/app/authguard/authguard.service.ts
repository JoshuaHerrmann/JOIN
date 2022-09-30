import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class AuthguardService implements CanActivate {

  constructor(private router: Router, private auth:AuthenticationService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(localStorage.getItem('currentUser')==='true'){
      return true
    }else{
      this.router.navigateByUrl('/login')
      return false
    }
  }
}
