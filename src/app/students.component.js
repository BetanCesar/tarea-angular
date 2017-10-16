"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var student_service_1 = require("./student.service");
var StudentsComponent = (function () {
    function StudentsComponent(router, studentService) {
        this.router = router;
        this.studentService = studentService;
    }
    StudentsComponent.prototype.getStudents = function () {
        var _this = this;
        this.studentService.getStudents().then(function (students) { return _this.students = students; });
    };
    StudentsComponent.prototype.ngOnInit = function () {
        this.getStudents();
    };
    StudentsComponent.prototype.onSelect = function (student) {
        this.selectedStudent = student;
    };
    StudentsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedStudent.id]);
    };
    return StudentsComponent;
}());
StudentsComponent = __decorate([
    core_1.Component({
        selector: 'my-students',
        templateUrl: './students.component.html',
        styleUrls: ['./students.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        student_service_1.StudentService])
], StudentsComponent);
exports.StudentsComponent = StudentsComponent;
//# sourceMappingURL=students.component.js.map