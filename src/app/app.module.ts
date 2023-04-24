import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ProjectsModule} from './projects/projects.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { PrioritycolorPipe } from './pipes/prioritycolor.pipe';
import { StyleChangeDirective } from './AngularDirectives/style-change.directive';
import { PagenotfoundComponent } from './logout/pagenotfound/pagenotfound.component';
import { HttpClientModule } from '@angular/common/http';
import {PersonalDetailServiceService} from './services/personal-detail-service.service'

@NgModule({
  declarations: [
    AppComponent,
    TestCompComponent,
    PrioritycolorPipe,
    StyleChangeDirective,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSlideToggleModule,
    ProjectsModule,
    HttpClientModule
  ],
  providers: [PersonalDetailServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
