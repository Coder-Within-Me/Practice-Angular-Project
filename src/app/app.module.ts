import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HeaderModule} from './header/header.module'
import {ProjectsModule} from './projects/projects.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { PrioritycolorPipe } from './pipes/prioritycolor.pipe';
import { StyleChangeDirective } from './AngularDirectives/style-change.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestCompComponent,
    PrioritycolorPipe,
    StyleChangeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSlideToggleModule,
    ProjectsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
