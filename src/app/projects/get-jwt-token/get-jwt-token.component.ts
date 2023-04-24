import { Component } from '@angular/core';
import { PersonalDetailServiceService } from '../../services/personal-detail-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-jwt-token',
  templateUrl: './get-jwt-token.component.html',
  styleUrls: ['./get-jwt-token.component.css']
})
export class GetJwtTokenComponent {

  token: any = '';
  flag : boolean = false;
  displayerror1: boolean = false;
  displayerror2: boolean = false;
  toggleCopyIcon : boolean = false;

  constructor(public service: PersonalDetailServiceService,private router:Router) { }

  GetToken(UserName: string, Password: string) {
    this.token = '';
    if (UserName.length > 0 && Password.length > 0) {
      this.service.UserLogin(UserName, Password).subscribe(result => {
        this.token = result.Item1;
        if (!(result.Item2)) {
          alert(this.token);
          this.token = '';
        }
      });
      this.toggleCopyIcon = false;
    }
    this.displayerror1 = UserName.length <= 0 ? true : false;
    this.displayerror2 = Password.length <= 0 ? true : false; 
  }

  UserLogin(UserName: string, Password: string){
    if (UserName.length > 0 && Password.length > 0) {
      this.service.UserLogin(UserName, Password).subscribe(result => {
        console.log(result);
        this.token = result.Item1;
        this.flag = result.Item2;
        localStorage.setItem("AccessToken",result.Item1);
        if (!(this.flag)) {
          alert(this.token);
          this.token = '';
          localStorage.removeItem("AccessToken");
        }
        else{
          this.router.navigate(['homepage']);
        };
      })
      this.toggleCopyIcon = false;
    }
    this.displayerror1 = UserName.length <= 0 ? true : false;
    this.displayerror2 = Password.length <= 0 ? true : false; 
  }

  UserloginService(UserName: string, Password: string){
    
  }

  CopyToClipboard(tokentocopy: string) {
    navigator.clipboard.writeText(tokentocopy);
    this.toggleCopyIcon = true; 
  }

  // errormsg1(value: string) {
  //   if (value === undefined || value === null || value.length === 0) {
  //     this.displayerror1 = true;
  //   }
  //   else {
  //     this.displayerror1 = false;
  //   }
  // }
  // errormsg2(value: string) {
  //   if (value === undefined || value === null || value.length === 0) {
  //     this.displayerror2 = true;
  //   }
  //   else {
  //     this.displayerror2 = false;
  //   }
  // }
}
