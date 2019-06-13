
import { Component, OnInit } from '@angular/core';
import { ExamMarksServiceService } from '../exam-marks-service.service';
import { StructDataModel } from '../app.component';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { Router } from '@angular/router';




@Component({
  selector: 'app-create-struct',
  templateUrl: './create-struct.component.html',
  styleUrls: ['./create-struct.component.scss'],

})
export class CreateStructComponent implements OnInit {

  constructor(private exammarks: ExamMarksServiceService,
    private http: Http,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit() {
  }
  public selectedYear: number;
  public theory: number;
  public practical: number;
  public internal1: number;
  public internal2: number;
  public Passingpercent: number;
  public id: number = 0;
  public selectSemester: string;
  public FormatData: Array<any>;
  page: string = "page not found";
  token: string;


  public createStructData() {
   
    this.token = localStorage.getItem('token');
    if (this.token == null) {
      this.dialog.open(DialogComponent, { data: { message: "Login Please.." } });
      this.router.navigate(['/']);
    } else { }


    this.exammarks.StructData(new StructDataModel(this.selectedYear, this.theory,
      this.practical, this.internal1, this.internal2, this.Passingpercent)).subscribe(
        (data: any) => {
          const errormessage = data;
          this.FormatData = data;
          console.log(this.FormatData);

          this.dialog.open(DialogComponent, { data: { message: errormessage.message } });
        });


  }


}
