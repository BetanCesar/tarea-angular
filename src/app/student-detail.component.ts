import { Component, Input } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'student-detail',
  template: `    
    <div *ngIf="student">
      <h2>Detalle de: {{student.names}}</h2>
      <div><label>Carrera: </label>{{student.career}}</div>
      <div>
        <label>Nombres: </label>
        <input [(ngModel)]="student.names" placeholder="Nombres"/>
      </div>
    </div>
  `
})

export class StudentDetailComponent {
  @Input() student: Student;
}
