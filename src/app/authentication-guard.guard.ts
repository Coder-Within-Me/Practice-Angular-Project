import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from './services/authentication.service'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardGuard implements CanActivate {
  
  constructor(private authService: AuthenticationService,private router: Router){}

  IsvalidUser : boolean = false;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.authenticate();
    if(this.IsvalidUser){
      return true;
    }
    else {
      this.router.navigate(['Login'], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    }   
  }  

  authenticate(){
    return this.authService.isUserLoggedIn().subscribe(result => {
      this.IsvalidUser = result;
    });
  }

}
