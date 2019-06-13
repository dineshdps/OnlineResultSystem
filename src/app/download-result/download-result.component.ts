import { Component, OnInit } from '@angular/core';
import { ExamMarksServiceService } from '../exam-marks-service.service';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-download-result',
  templateUrl: './download-result.component.html',
  styleUrls: ['./download-result.component.scss']
})
export class DownloadResultComponent implements OnInit {

  constructor(private exammarks: ExamMarksServiceService,
    private dialog:MatDialog,
    private router:Router) { }

  ngOnInit() {
   
  }

  selectSem; selectPattern; selectYear; name: string;
  public FormatData: Array<any>;
  public formatdatas: Array<any>;
change=true;
show=false;
tm1;g;token:string;

it1;gp;cp;cg;sgpa:number;
  DownloadResult() {
this.change=false;
this.show=true;

this.token = localStorage.getItem('token');
    if (this.token == null) {
      this.dialog.open(DialogComponent, { data: { message: "Login Please.." } });
      this.router.navigate(['/']);
    } else { }


    if (this.selectPattern == "Regular") {
      this.exammarks.getRegularstudentinfo(this.selectSem, this.selectYear, this.selectPattern).subscribe(
        (data: any) => {
          // const mt=data;
          // this.tm1=mt.subject1total;
          // console.log(this.tm1);
          this.FormatData = data;
          console.log(this.FormatData);
        });
        this.exammarks.getsubjectinfo(this.selectSem, this.selectYear).subscribe(
          (data: any) => {
            
            this.formatdatas = data;
            console.log(this.formatdatas);
          });
    }
    else { }

    if (this.selectPattern == "ATKT") {
      this.exammarks.getATKTstudentinfo(this.selectSem, this.selectYear, this.selectPattern).subscribe(
        (data: any) => {
          // this.spinner = false;
          this.FormatData = data;
          console.log(this.FormatData);
        });
        this.exammarks.getsubjectinfo(this.selectSem, this.selectYear).subscribe(
          (data: any) => {
            
            this.formatdatas = data;
            console.log(this.formatdatas);
          });

    } else { }

    if (this.selectPattern == "Drop") {
      this.exammarks.getDropstudentinfo(this.selectSem, this.selectYear, this.selectPattern).subscribe(
        (data: any) => {
          // this.spinner = false;
          this.FormatData = data;
          console.log(this.FormatData);
        });
        this.exammarks.getsubjectinfo(this.selectSem, this.selectYear).subscribe(
          (data: any) => {
            
            this.formatdatas = data;
            console.log(this.formatdatas);
          });

    } else { }

    
  }

  public downloadPdf()
  {
    html2canvas(document.body).then((canvas)=>{console.log(canvas);
      var getImage=canvas.toDataURL();
      console.log(getImage);
      var doc= new jsPDF();
      var width = doc.internal.pageSize.getWidth();    
      var height = doc.internal.pageSize.getHeight();
      doc.addImage(getImage, 'JPEG', 5, 5, width, height);
      
       doc.save('test.pdf');
    })
  }


  
}