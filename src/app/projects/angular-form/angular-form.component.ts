import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.css']
})
export class AngularFormComponent {
  userData:any={};
  name:string = '';
  email:string = '';
  number:string = '';

  constructor(private route: ActivatedRoute){}

  getAllDeatils(data:NgForm){
    this.userData = data;
  }
  clear(){
    this.name = '';
    this.email = '';
    this.number ='';
  }
}
