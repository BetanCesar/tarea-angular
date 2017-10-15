"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Student = (function () {
    function Student() {
    }
    return Student;
}());
exports.Student = Student;
var Subject = (function () {
    function Subject() {
    }
    return Subject;
}());
exports.Subject = Subject;
var STUDENTS = [
    { career: 'ITC', id: 'A01338883', names: 'Cesar David', lastName: 'Betancourt Adame', phone: 54378627, age: 21, scolarship: true },
    { career: 'LAD', id: 'A01336473', names: 'Daniela', lastName: 'Hernandez Gomez', phone: 53728197, age: 23, scolarship: true },
    { career: 'ITC', id: 'A01333782', names: 'Alejandro', lastName: 'Lopez Jimenez', phone: 25964837, age: 22, scolarship: true },
    { career: 'ITC', id: 'A01339459', names: 'Allan Gustavo', lastName: 'Montaño Jiuca', phone: 26528197, age: 20, scolarship: false },
    { career: 'IDS', id: 'A01655378', names: 'Gabriela', lastName: 'Rodriguez Adame', phone: 54782918, age: 19, scolarship: false },
    { career: 'IME', id: 'A01337849', names: 'Aidee', lastName: 'Gomez Campos', phone: 46728102, age: 19, scolarship: true },
    { career: 'ITC', id: 'A01333390', names: 'Karen', lastName: 'Martinez Flores', phone: 56372937, age: 20, scolarship: true },
    { career: 'LIN', id: 'A01337542', names: 'Yoselin', lastName: 'Hurtado Salgado', phone: 25627391, age: 18, scolarship: false },
    { career: 'LIN', id: 'A01338759', names: 'Sarah', lastName: 'Mendez Carmona', phone: 28472917, age: 18, scolarship: false },
    { career: 'LIN', id: 'A01339764', names: 'Maria Fernanda', lastName: 'Ruiz Gayosso', phone: 25738293, age: 22, scolarship: true }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Directorio de Alumnos';
        this.students = STUDENTS;
    }
    AppComponent.prototype.onSelect = function (student) {
        this.selectedStudent = student;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>{{title}}</h1>\n    <h2>Alumnos</h2>\n    <ul class=\"students\">\n      <li *ngFor=\"let student of students\" [class.selected]=\"student === selectedStudent\" (click)=\"onSelect(student)\">\n        <span class=\"badge\">{{student.id}}</span> {{student.names}}\n      </li>\n    </ul>\n    <div *ngIf=\"selectedStudent\">\n      <h2>Detalle de: {{selectedStudent.names}}</h2>\n      <div><label>Carrera: </label>{{selectedStudent.career}}</div>\n      <div>\n        <label>Nombres: </label>\n        <input [(ngModel)]=\"selectedStudent.names\" placeholder=\"Nombres\"/>\n      </div>\n    </div>\n  ",
        styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .students {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .students li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .students li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .students li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .students .text {\n      position: relative;\n      top: -3px;\n    }\n    .students .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map