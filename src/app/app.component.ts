import { Component } from '@angular/core';

export class Student {
  career: string;
  id: string;
  names: string;
  lastName: string;
  phone: number;
  age: number;
  scolarship: boolean;
}
export class Subject {
  nombre: string;
  calificacion: number;
}


const STUDENTS: Student[] = [
  {career: 'ITC', id: 'A01338883', names: 'Cesar David', lastName: 'Betancourt Adame', phone: 54378627, age: 21, scolarship: true},
  {career: 'LAD', id: 'A01336473', names: 'Daniela', lastName: 'Hernandez Gomez', phone: 53728197, age: 23, scolarship: true},
  {career: 'ITC', id: 'A01333782', names: 'Alejandro', lastName: 'Lopez Jimenez', phone: 25964837, age: 22, scolarship: true},
  {career: 'ITC', id: 'A01339459', names: 'Allan Gustavo', lastName: 'Montaño Jiuca', phone: 26528197, age: 20, scolarship: false},
  {career: 'IDS', id: 'A01655378', names: 'Gabriela', lastName: 'Rodriguez Adame', phone: 54782918, age: 19, scolarship: false},
  {career: 'IME', id: 'A01337849', names: 'Aidee', lastName: 'Gomez Campos', phone: 46728102, age: 19, scolarship: true},
  {career: 'ITC', id: 'A01333390', names: 'Karen', lastName: 'Martinez Flores', phone: 56372937, age: 20, scolarship: true},
  {career: 'LIN', id: 'A01337542', names: 'Yoselin', lastName: 'Hurtado Salgado', phone: 25627391, age: 18, scolarship: false},
  {career: 'LIN', id: 'A01338759', names: 'Sarah', lastName: 'Mendez Carmona', phone: 28472917, age: 18, scolarship: false},
  {career: 'LIN', id: 'A01339764', names: 'Maria Fernanda', lastName: 'Ruiz Gayosso', phone: 25738293, age: 22, scolarship: true}
];

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>Alumnos</h2>
    <ul class="students">
      <li *ngFor="let student of students" [class.selected]="student === selectedStudent" (click)="onSelect(student)">
        <span class="badge">{{student.id}}</span> {{student.names}}
      </li>
    </ul>
    <div *ngIf="selectedStudent">
      <h2>Detalle de: {{selectedStudent.names}}</h2>
      <div><label>Carrera: </label>{{selectedStudent.career}}</div>
      <div>
        <label>Nombres: </label>
        <input [(ngModel)]="selectedStudent.names" placeholder="Nombres"/>
      </div>
    </div>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .students {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .students li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .students li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .students li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .students .text {
      position: relative;
      top: -3px;
    }
    .students .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})

export class AppComponent {
  title = 'Directorio de Alumnos';
  students = STUDENTS;
  selectedStudent: Student;

  onSelect(student: Student): void {
    this.selectedStudent = student;
  }
}
