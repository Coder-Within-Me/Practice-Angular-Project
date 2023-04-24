import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFormComponent } from './angular-form/angular-form.component';
import {FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms'
import {GetJwtTokenComponent} from './get-jwt-token/get-jwt-token.component'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input'
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { TodolistComponent } from './todolist/todolist.component';
import { ReativeformComponent } from './reativeform/reativeform.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component'
import { HttpClientModule } from '@angular/common/http'
import {PersonalDetailServiceService} from '../services/personal-detail-service.service'
import {MatFormFieldModule} from '@angular/material/form-field'
import {Test2CompComponent} from '../header/test2-comp/test2-comp.component'

@NgModule({
  declarations: [
    AngularFormComponent,
    AngularMaterialComponent,
    TodolistComponent,
    ReativeformComponent,
    PersonalDetailsComponent,
    GetJwtTokenComponent,
    Test2CompComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports:[
    AngularFormComponent,
    AngularMaterialComponent,
    TodolistComponent,
    ReativeformComponent,
    PersonalDetailsComponent,
    GetJwtTokenComponent,
    Test2CompComponent
  ],
  providers:[PersonalDetailServiceService]
})
export class ProjectsModule { }
