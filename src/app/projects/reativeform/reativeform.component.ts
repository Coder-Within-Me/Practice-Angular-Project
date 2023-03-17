import { Component } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-reativeform',
  templateUrl: './reativeform.component.html',
  styleUrls: ['./reativeform.component.css']
})
export class ReativeformComponent {

  show:boolean = false;

  deatils = new FormGroup({
    name: new FormControl('',[Validators.required]),
    city: new FormControl('')
  })

  ShowDetails(){
    // console.log(this.deatils.value);
    this.show = true;
  }

  clear(){
    this.show = false;
  }

  get uservalidite(){
    return this.deatils.get('name');
  }
 
}
