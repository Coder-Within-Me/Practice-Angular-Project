import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test2CompComponent } from './test2-comp/test2-comp.component';


@NgModule({
  declarations: [
    Test2CompComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Test2CompComponent
  ]
})
export class HeaderModule {}
