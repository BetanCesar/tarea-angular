export class Student {
  id: number;
  career: string;
  mat: string;
  names: string;
  lastName: string;
  phone: number;
  age: number;
  scolarship: number;
  subjects: Subject[];
  image: string;
}
export class Subject {
  name: string;
  grade: number;
}
