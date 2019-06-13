import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { Http } from '@angular/http';

import { Router, ActivatedRoute } from '@angular/router';
import { ExamMarksServiceService } from '../exam-marks-service.service';
import { MatDialog } from '@angular/material';
// import { DialogComponent } from '../dialog/dialog.component';
import { StructDataModel } from '../app.component';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-created-format',
  templateUrl: './created-format.component.html',
  styleUrls: ['./created-format.component.scss']

})

export class CreatedFormatComponent implements OnInit {

  constructor(private http: Http,
    private exammarks: ExamMarksServiceService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog) { }

  public FormatData: Array<any>;
  public FormatDatas: Array<any>;

  public structdata: StructDataModel;
  public selectedValue; getyear: string;
  public selectedYear = '';
  data: any;
  datas: any;
  year; external; practical; internal1; internal2; passingPercentage: number;
  spinner = false;
  token: string;
  ngOnInit() {

    this.spinner = true;

    this.token = localStorage.getItem('token');
    if (this.token == null) {
      this.dialog.open(DialogComponent, { data: { message: "Login Please.." } });
      this.router.navigate(['/']);
    } else { }

    this.exammarks.getformatdatas().subscribe((data: any) => {
      this.spinner = false;
      this.FormatData = data;
    })

  }



  yearsss; theorys; practicals; internals1; internals2; passingpercents; pps: number;

  structdatamodel: StructDataModel;

  createdFormat(year, theory, practical, internal1, internal2, passingpercent: HTMLInputElement) {

    this.theorys = theory.value;
    this.practicals = practical.value;
    this.internals1 = internal1.value;
    this.internals2 = internal2.value;
    this.passingpercents = passingpercent.value;
    this.yearsss = year.value;

    this.pps = Number.parseInt(this.internals1.toString()) + Number.parseInt(this.internals2.toString());

    console.log(this.yearsss, this.theorys, this.practicals, this.internals1, this.internals2, this.passingpercents, this.pps);


    this.structdatamodel = new StructDataModel(this.yearsss, this.theorys, this.practicals, this.internals1,
      this.internals2, this.passingpercents);
    this.exammarks.UpdateStructData(this.structdatamodel, this.yearsss)
      .
      subscribe((data: any) => {
        const formatdata = data
        this.FormatDatas = data;
        this.dialog.open(DialogComponent, { data: { message: formatdata.message } });

      });

  }

  // id:number=0;
  //   updatecreatedFormat()
  //   {
  //     // this.exammarks.UpdateStructData(new StructDataModel(this.id,this.passingPercentage,this.year,this.external,this.practical,this.internal1,
  //     //   this.internal2)).subscribe(
  //     //     (data: any) => {
  //     //       this.structdata = data;
  //     //       console.log(this.structdata);
  //     //     })

  //     //     if(this.structdata==undefined)
  //     //     {
  //     //       console.log('try again');
  //     //     }
  //     //     else
  //     //     {
  //     //       console.log('successfully updated');
  //     //       this.dialog.open(DialogComponent, {});
  //     //     }
  //   }
}










    // this.http.get("https://api.github.com/users/hadley/orgs").pipe(map((data: any) => data.json()))
    //   .subscribe(
    //     (data: any) => {
    //       this.FormatData = data;
    //   console.log(this.FormatData);   
    //   })


          // let datas:any=this.FormatData;
        //   let datas:any=this.FormatData;
        // console.log(datas);
        // this.router.navigate(['/view-format'],{
        //   queryParams:{datas:btoa(JSON.stringify(datas))}
        // })


// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/


  // createdFormat()
  // {
  //   this.exammarks.getData().subscribe(data =>{
  //     this.FormatData=data;
  //     // ;this.FormatData=Array.of(this.FormatData);
  //      console.log(this.FormatData);
  //   });
  // }


