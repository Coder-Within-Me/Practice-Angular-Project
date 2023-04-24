import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test2-comp',
  templateUrl: './test2-comp.component.html',
  styleUrls: ['./test2-comp.component.css']
})
export class Test2CompComponent {
  constructor(private router:Router){}

  navigatetohomepage(){
    this.router.navigate(['homepage']);
  }
}
