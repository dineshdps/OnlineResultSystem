import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
}

// create structure
export class StructDataModel {
  constructor(public year: number, public theory: number, public practical: number,
    public internal1: number, public internal2: number, public passingpercent: number) { }
}

export class CreateResultModel {
  constructor(public selectMonth: string, public selectSem: string, public selectPattern: string, public selectYear: number) { }
}

//login model
export class LoginDataModel {
  constructor(public username: string, public password: string) { }
}

//forget passwod
export class ForgetPasswordModel {
  constructor(public username: string, public NewPassword: string, public ReNewPassword: string) { }
}

export class ExamMarksmodel {
  constructor(public id: number, public studentUnicode: String, public semester: String, public year: number, public month: String, public atkt: Boolean, public type: String, public marks: Marksmodel) { }
}

export class Marksmodel {
  constructor(public subject1: number, public subject2: number, public subject3: number, public subject4: number,
    public subject5: number) { }
}

// register model

export class RegisterTeacherData {
  constructor(public firstName: String, public lastName: String, public middleName: String, public username: String,
    public password: String) { }
}

// teacher subject enter data model

// export class TeacherNameModel{
//   constructor(public subject1:string,public subject2:string,public subject3:string,public subject4:string,public subject5:string
//     ){}
// }

export class SubjectNameModel {
  constructor(public semester: String, public year: number, public subject1: string, public subject2: string,
    public subject3: string, public subject4: string, public subject5: string, public Practical1: string, public Practical2: string,
    public Practical3: string, public Practical4: string, public Practical5: string
  ) { }
}

// drop student data model
export class DropstudentmarksModel {
  constructor(public month: string, public year: number, public semester: string, public result: string, public pattern: string,
    public internal1subject1: number, public internal2subject1: number, public internal1subject2: number, public internal2subject2: number,
    public internal1subject3: number, public internal2subject3: number, public internal1subject4: number, public internal2subject4: number,
    public internal1subject5: number, public internal2subject5: number,
    public theorysubject1: number, public theorysubject2: number, public theorysubject3: number, public theorysubject4: number,
    public theorysubject5: number,
    public subject1total: number, public subject2total: number, public subject3total: number, public subject4total: number,
    public subject5total: number,
    public practical1: number, public practical2: number, public practical3: number, public practical4: number, public practical5: number,
    public subject1: string, public subject2: string, public subject3: string, public subject4: string, public subject5: string,
    public firstname: string, public lastname: string, public middlename: string, public UniqueNo: number, public PNRno: number) { }
}

export class AtktstudentmarksModel {
  constructor(public month: string, public year: number, public semester: string, public result: string, public pattern: string,
    public internal1subject1: number, public internal2subject1: number, public internal1subject2: number, public internal2subject2: number,
    public internal1subject3: number, public internal2subject3: number, public internal1subject4: number, public internal2subject4: number,
    public internal1subject5: number, public internal2subject5: number,
    public theorysubject1: number, public theorysubject2: number, public theorysubject3: number, public theorysubject4: number,
    public theorysubject5: number,
    public subject1total: number, public subject2total: number, public subject3total: number, public subject4total: number,
    public subject5total: number,
    public practical1: number, public practical2: number, public practical3: number, public practical4: number, public practical5: number,
    public subject1: string, public subject2: string, public subject3: string, public subject4: string, public subject5: string,
    public firstname: string, public lastname: string, public middlename: string, public UniqueNo: number, public PNRno: number) { }
}

export class RegularstudentmarksModel {
  constructor(
    public month: string, public year: number, public semester: string, public result: string, public pattern: string,
    public internal1subject1: number, public internal2subject1: number, public internal1subject2: number, public internal2subject2: number,
    public internal1subject3: number, public internal2subject3: number, public internal1subject4: number, public internal2subject4: number,
    public internal1subject5: number, public internal2subject5: number,
    public theorysubject1: number, public theorysubject2: number, public theorysubject3: number, public theorysubject4: number,
    public theorysubject5: number,
    public subject1total: number, public subject2total: number, public subject3total: number, public subject4total: number,
    public subject5total: number,
    public practical1: number, public practical2: number, public practical3: number, public practical4: number, public practical5: number,
    public subject1: string, public subject2: string, public subject3: string, public subject4: string, public subject5: string,
    public firstname: string, public lastname: string, public middlename: string, public UniqueNo: number, public PNRno: number
  ) { }
}

