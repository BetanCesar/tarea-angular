import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentsComponent }      from './students.component';
import { StudentDetailComponent }  from './student-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  { path: 'detail/:id', component: StudentDetailComponent },
  { path: 'students',     component: StudentsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
