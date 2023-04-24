import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.css']
})
export class TestCompComponent {
    showForm : boolean = false;
    constructor(private router:Router){}

    navigatetoangularform(){

      this.router.navigate(['angularform']);
    }
}
