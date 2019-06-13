import { Component, OnInit } from '@angular/core';
import { ExamMarksServiceService } from '../exam-marks-service.service';
import { LoginDataModel, RegisterTeacherData } from '../app.component';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { Router } from '@angular/router';
import { getToken } from '@angular/router/src/utils/preactivation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private exammarks: ExamMarksServiceService,
    private dialog: MatDialog,
    private router: Router) { }

  ngOnInit() {
  }
  public username; Password; password1; abc; data; dialogmsg: string;
  public finalUsername: string;
  public finalPassword: string;

  firstName; middleName; lastName: string;


  abcd = false;
  // public token: Array<any>;
  public token: string;
  formatdata: string;
  LoginData(form: NgForm) {

    console.log(this.username, this.Password);
    // if(form.invalid){
    //   return
    // }else{

    this.exammarks.LoginData(new LoginDataModel(this.username, this.Password)).
      subscribe((data: any) => {

        const token = data;
        this.dialogmsg = token.message;
        this.firstName = token.firstname;
        this.middleName = token.middlename;
        this.lastName = token.lastname;
        this.token = token.token;
        console.log(data);
      });
    form.resetForm();

    setTimeout(() => {
      if (this.token == undefined) {
        this.dialog.open(DialogComponent, { data: { message: this.dialogmsg } });
        
      }
      else {
        localStorage.setItem('token', this.token);
        localStorage.setItem('firstname', this.firstName);
        localStorage.setItem('middlename', this.middleName);
        localStorage.setItem('lastname', this.lastName);
        console.log(this.token);
        this.router.navigate(['/create-struct']);
      }
    }, 500);
  }
}





