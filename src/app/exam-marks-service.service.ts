import { Injectable } from '@angular/core';
import { StructDataModel, CreateResultModel, LoginDataModel, RegisterTeacherData, SubjectNameModel, RegularstudentmarksModel,
   AtktstudentmarksModel, DropstudentmarksModel, ForgetPasswordModel } from './app.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ExamMarksServiceService {

  constructor(private http: HttpClient) { }
  public token: string;
  public tokens: string;


  //get token from local storage
  getToken() {
    return localStorage.getItem('token');
  }


  //login 
  LoginData(Model20: LoginDataModel) {
    return this.http.post("http://localhost:5000/login", Model20);
  }
  
  //forget password
  ForgetPassword(Model21: ForgetPasswordModel) {
    return this.http.post("http://localhost:5000/forgetpassword", Model21);
  }

  //create struct data
  StructData(Model: StructDataModel) {
    console.log(Model);
    return this.http.post("http://localhost:5000/format", Model);
  }

  SubjectData(Model7: SubjectNameModel) {
    console.log(Model7);
    return this.http.post("http://localhost:5000/Subjectinfo", Model7);
  }

  //upadte structdata
  UpdateStructData(Model6: StructDataModel, year: any) {
    console.log(Model6);
    return this.http.put("http://localhost:5000/update/" + year, Model6);
  }

  updateAtktstudentmarksdata(Model15: AtktstudentmarksModel, uniqueno: any) {
    console.log(Model15);
    return this.http.put("http://localhost:5000/updateAtktstudentmarksdata/" + uniqueno, Model15);
  }

  updateRegularstudentmarksdata(Model16: RegularstudentmarksModel, uniqueno: any) {
    console.log(Model16);
    return this.http.put("http://localhost:5000/updateRegularstudentmarksdata/" + uniqueno, Model16);
  }


  CreateResultData(Model1: CreateResultModel) {
    return this.http.post("http://localhost:5000/users", Model1);
  }

  getformatdatas(): Observable<any> {
    return this.http.get("http://localhost:5000/format");

  }

  getsubjectformatdatas(): Observable<any> {
    return this.http.get("http://localhost:5000/getsubjectformatdata");

  }


  Regularstudentmarksdata(Model8: RegularstudentmarksModel) {
    console.log(Model8);
    return this.http.post("http://localhost:5000/RegularStudentMarks", Model8);
  }

  Atktstudentmarksdata(Model9: AtktstudentmarksModel) {
    console.log(Model9);
    return this.http.post("http://localhost:5000/AtktStudentMarks", Model9);
  }

  Dropstudentmarksdata(Model10: DropstudentmarksModel) {
    console.log(Model10);
    return this.http.post("http://localhost:5000/DropStudentMarks", Model10);
  }

  getstudentinfo(sem: any, year: any) {
    return this.http.get('http://localhost:5000/getstudentdata/' + sem + '/' + year);
  }



  getRegularstudentinfo(sem: any, year: any, pattern: any) {
    return this.http.get('http://localhost:5000/getRegularStudentMarks/' + sem + '/' + year + '/' + pattern);
  }

  getATKTstudentinfo(sem: any, year: any, pattern: any) {
    return this.http.get('http://localhost:5000/getAtktStudentMarks/' + sem + '/' + year + '/' + pattern);
  }

  getDropstudentinfo(sem: any, year: any, pattern: any) {
    return this.http.get('http://localhost:5000/getDropStudentMarks/' + sem + '/' + year + '/' + pattern);
  }



  deletestudentdata(uniqueno: any) {
    return this.http.delete('http://localhost:5000/deleteStudentdata/' + uniqueno);
  }

  deleteAtktstudentmarksdata(uniqueno: any) {
    return this.http.delete('http://localhost:5000/deleteAtktstudentmarksdata/' + uniqueno);
  }

  deleteDropstudentmarksdata(uniqueno: any) {
    return this.http.delete('http://localhost:5000/deleteDropstudentmarksdata/' + uniqueno);
  }

  getsubjectinfo(sem: any, year: any) {
    return this.http.get('http://localhost:5000/getsubjectdata/' + sem + '/' + year);
  }

  Registerdata(model4: RegisterTeacherData) {
    console.log(model4);
    return this.http.post("http://localhost:5000/register", model4);
  }

}


