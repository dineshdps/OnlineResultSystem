import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ExamMarksServiceService } from '../exam-marks-service.service';
import { map } from 'rxjs/operators';
import { SubjectNameModel } from '../app.component';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  constructor(private http: Http,
    private exammarks: ExamMarksServiceService,
    public dialog: MatDialog,
    private router: Router) { }

  public FormatData: Array<any>;
  public FormatDatas: Array<any>;

  ngOnInit() {

  }
  // teacherModel: TeacherNameModel;
  // subjectModel: SubjectNameModel;
  // subjectInfoModel:SubjectInfoModel;
  subjectname1: string; subjectname2: string; subjectname3: string; subjectname4: string; subjectname5: string;
  Practical1; Practical2; Practical3; Practical4; Practical5: string
  // subject1Teacher:string;subject2Teacher:string;subject3Teacher:string;subject4Teacher:string;subject5Teacher:string;
  // selectname:string;
  selectSemester: string;
  selectedYear: number;
  token: string;
  subjects() {

    this.token = localStorage.getItem('token');
    if (this.token == null) {
      this.dialog.open(DialogComponent, { data: { message: "Login Please.." } });
      this.router.navigate(['/']);
    } else { }

    this.exammarks.SubjectData(new SubjectNameModel(this.selectSemester, this.selectedYear, this.subjectname1, this.subjectname2
      , this.subjectname3, this.subjectname4, this.subjectname5, this.Practical1, this.Practical2, this.Practical3, this.Practical4,
      this.Practical5)).subscribe((data: any) => {
        const errormessage = data;
        this.FormatData = data;
        console.log(this.FormatData);
        this.dialog.open(DialogComponent, { data: { message: errormessage.message } });

      });


  }
}



