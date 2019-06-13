import { Component, OnInit } from '@angular/core';
import { ExamMarksServiceService } from '../exam-marks-service.service';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { ForgetPasswordModel } from '../app.component';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {

  constructor(private exammarks: ExamMarksServiceService,
    private dialog: MatDialog) { }

  ngOnInit() {
  }
  forgetpswd = false;
  public formatdata: Array<any>;
  username; ReNewPassword; NewPassword: string;
  forgetpassword() {

    if (this.NewPassword == this.ReNewPassword) {
      this.exammarks.ForgetPassword(new ForgetPasswordModel(this.username, this.NewPassword, this.ReNewPassword)).
        subscribe((data: any) => {

          this.formatdata = data;
        });

      setTimeout(() => {
        if (this.formatdata == undefined) {

          this.dialog.open(DialogComponent, { data: { message: "wrong username" } });
        }
        else {
          this.dialog.open(DialogComponent, { data: { message: "Successfully password Set" } });

        }

      }, 500);
    }
    else {
      this.dialog.open(DialogComponent, { data: { message: "both password are not same" } });

    }
  }

}
