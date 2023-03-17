import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.css']
})
export class AngularFormComponent {
  userData:any={};
  values : any;
  name:string = '';
  email:string = '';
  number:string = '';

  getAllDeatils(data:NgForm){
    this.userData = data;
  }
  clear(){
    this.name = '';
    this.email = '';
    this.number ='';
  }
}
