import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFormComponent } from './angular-form/angular-form.component';
import {FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { TodolistComponent } from './todolist/todolist.component';
import { ReativeformComponent } from './reativeform/reativeform.component'

@NgModule({
  declarations: [
    AngularFormComponent,
    AngularMaterialComponent,
    TodolistComponent,
    ReativeformComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSlideToggleModule,
    ReactiveFormsModule
  ],
  exports:[
    AngularFormComponent,
    AngularMaterialComponent,
    TodolistComponent,
    ReativeformComponent
  ]
})
export class ProjectsModule { }
