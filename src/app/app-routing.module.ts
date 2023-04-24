import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './logout/pagenotfound/pagenotfound.component';
import { AngularFormComponent } from './projects/angular-form/angular-form.component';
import { AngularMaterialComponent } from './projects/angular-material/angular-material.component';
import { PersonalDetailsComponent } from './projects/personal-details/personal-details.component';
import {ReativeformComponent} from './projects/reativeform/reativeform.component'
import { TodolistComponent } from './projects/todolist/todolist.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { GetJwtTokenComponent } from './projects/get-jwt-token/get-jwt-token.component';
import {AuthenticationGuardGuard} from '../app/authentication-guard.guard'

const routes: Routes = [
  {
    path :'',
    component : GetJwtTokenComponent,
  },{
    path :'Login',
    component : GetJwtTokenComponent,
  },
  {
    path :'homepage',
    component : TestCompComponent,
    canActivate: [AuthenticationGuardGuard]
  },
  {
    path : 'angularform',
    component: AngularFormComponent,
    canActivate: [AuthenticationGuardGuard]
  },
  {
    path : 'homepage/reactiveform',
    component: ReativeformComponent,
    canActivate: [AuthenticationGuardGuard]
  },
  {
    path : 'homepage/angularmaterial',
    component: AngularMaterialComponent,
    canActivate: [AuthenticationGuardGuard]
  },
  {
    path : 'homepage/todolist',
    component: TodolistComponent,
    canActivate: [AuthenticationGuardGuard]
  },
  {
    path : 'homepage/personaldetails',
    component: PersonalDetailsComponent,
    canActivate: [AuthenticationGuardGuard]
  }
  // {
  //   path : 'getJwtToken',
  //   component: GetJwtTokenComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
