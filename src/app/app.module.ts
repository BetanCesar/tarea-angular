import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { StudentDetailComponent } from './student-detail.component';
import { StudentsComponent } from './students.component';
import { StudentService } from './student.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    StudentDetailComponent,
    StudentsComponent
  ],
  providers: [
    StudentService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
