import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MyAngularProject';
  count : number = 0;

  // getdata(text:string){
  //   alert("Testing Function...! :: " + text);
  // }

  IncreaseCount(){
    this.count = this.count + 1;
  }

  DiscreaseCount(){
    this.count = this.count - 1;
  }
  
  // clear(){
  //   console.log("testing");
  // }
}
