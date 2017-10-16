"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var mock_students_1 = require("./mock-students");
var core_1 = require("@angular/core");
var StudentService = (function () {
    function StudentService() {
    }
    StudentService.prototype.getStudents = function () {
        return Promise.resolve(mock_students_1.STUDENTS);
    };
    StudentService.prototype.getStudent = function (id) {
        return this.getStudents()
            .then(function (students) { return students.find(function (student) { return student.id === id; }); });
    };
    return StudentService;
}());
StudentService = __decorate([
    core_1.Injectable()
], StudentService);
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map