import { Student } from './student';
import { STUDENTS } from './mock-students';
import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {
  getStudents(): Promise<Student[]> {
    return Promise.resolve(STUDENTS);
  }
  getStudent(id: number): Promise<Student> {
    return this.getStudents()
      .then(students => students.find(student => student.id === id));
  }
}


