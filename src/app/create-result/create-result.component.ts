import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ExamMarksServiceService } from '../exam-marks-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';



import { AtktstudentmarksModel, DropstudentmarksModel, RegularstudentmarksModel } from '../app.component';
import {  Validators, FormGroup, FormControl, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
// import { from } from 'rxjs';

@Component({
  selector: 'app-create-result',
  templateUrl: './create-result.component.html',
  styleUrls: ['./create-result.component.scss']
})

export class CreateResultComponent implements OnInit {
  forms = new FormGroup({
    //internals validation
    int1sub1: new FormControl("", [Validators.min(0), Validators.max(20)]),
    int2sub1: new FormControl("", [Validators.min(0), Validators.max(20)]),
    int1sub2: new FormControl("", [Validators.min(0), Validators.max(20)]),
    int2sub2: new FormControl("", [Validators.min(0), Validators.max(20)]),
    int1sub3: new FormControl("", [Validators.min(0), Validators.max(20)]),
    int2sub3: new FormControl("", [Validators.min(0), Validators.max(20)]),
    int1sub4: new FormControl("", [Validators.min(0), Validators.max(20)]),
    int2sub4: new FormControl("", [Validators.min(0), Validators.max(20)]),
    int1sub5: new FormControl("", [Validators.min(0), Validators.max(20)]),
    int2sub5: new FormControl("", [Validators.min(0), Validators.max(20)]),

    //theory validation
    theorysub1: new FormControl("", [Validators.min(0), Validators.max(60)]),
    theorysub2: new FormControl("", [Validators.min(0), Validators.max(60)]),
    theorysub3: new FormControl("", [Validators.min(0), Validators.max(60)]),
    theorysub4: new FormControl("", [Validators.min(0), Validators.max(60)]),
    theorysub5: new FormControl("", [Validators.min(0), Validators.max(60)]),

    //practicals
    pract1: new FormControl("", [Validators.min(0), Validators.max(50)]),
    pract2: new FormControl("", [Validators.min(0), Validators.max(50)]),
    pract3: new FormControl("", [Validators.min(0), Validators.max(50)]),
    pract4: new FormControl("", [Validators.min(0), Validators.max(50)]),
    pract5: new FormControl("", [Validators.min(0), Validators.max(50)])

  });


  constructor(private exammarks: ExamMarksServiceService,
    private dialog:MatDialog ,
    public router:Router) { }

  public subjectName: Array<any>;
  public FormatData: Array<any>;
  public formatdatas: Array<any>;
  public studentmarks: Array<any>;
  public deletedata: Array<any>;

  data: any;

  ngOnInit() {
  }

  selectMonth; selectSem; selectPattern; selectformat; name: string;
  selectYear: number;

  selectMonth1: string;
  selectYear1: number;
  subj: number;
  spinner = false;
  abc = false;
  change = true;

  public atktData: Array<any>;
  public regularData: Array<any>;
  public dropData: Array<any>;
  token:string;
  ResultData() {
    this.abc = true;
    this.change = false;

    this.selectMonth1 = this.selectMonth;
    this.selectYear1 = this.selectYear;

    this.spinner = true;

    this.token=localStorage.getItem('token');
      if(this.token == null){
        this.dialog.open(DialogComponent, {data :{message: "Login Please.."}});
        this.router.navigate(['/']);
      }else{}

    // api call

    this.exammarks.getstudentinfo(this.selectSem, this.selectYear).subscribe(
      (data: any) => {
        this.FormatData = data;
        console.log(this.FormatData);
      });
      


    this.exammarks.getsubjectinfo(this.selectSem, this.selectYear).subscribe(
      (data: any) => {
        this.spinner = false;
        this.formatdatas = data;
        console.log(this.formatdatas);
      });


  }
  internal1subject1; internal2subject1; internaltotalsubject1; theorysubject1; gracesubject1: number;
  internal1subject2; internal2subject2; internaltotalsubject2; theorysubject2; gracesubject2: number;
  internal1subject3; internal2subject3; internaltotalsubject3; theorysubject3; gracesubject3: number;
  internal1subject4; internal2subject4; internaltotalsubject4; theorysubject4; gracesubject4: number;
  internal1subject5; internal2subject5; internaltotalsubject5; theorysubject5; gracesubject5: number;
  practical1; practical2; practical3; practical4; practical5: number;

  Subject1; Subject2; Subject3; Subject4; Subject5: string;


  Gracemarks: number;
  counter = 0;
  totalcounter = 0;
  totalcounters = 0;
  counterpractical = 0;
  firstadd; secondadd; result; pattern: string;
  firstName; middleName; lastName: string;
  Uniqueno; PNRno; Givegracemarks: number;


  gradeTheory1;gradeTheory2;gradeTheory3;gradeTheory4;gradeTheory5;sgpa:string;
  gradepointtheory1;gradepointtheory2;gradepointtheory3;gradepointtheory4;gradepointtheory5:number;
  creditpointtheory1;creditpointtheory2;creditpointtheory3;creditpointtheory4;creditpointtheory5:number;
  cgtheory1;cgtheory2;cgtheory3;cgtheory4;cgtheory5:number

  Postmarks(firstname, middlename, lastname, UniqueNo, Pnrno, subject1, subject2, subject3, subject4, subject5: HTMLInputElement,
    form: NgForm) {
    this.firstName = firstname.value;
    console.log(this.firstName);
    this.lastName = lastname.value;
    console.log(this.lastName);
    this.middleName = middlename.value;
    console.log(this.middleName);
    this.Uniqueno = UniqueNo.value;
    console.log(this.Uniqueno);
    this.PNRno = Pnrno.value;
    console.log(this.PNRno);
    this.Subject1 = subject1.value;
    console.log(this.Subject1);
    this.Subject2 = subject2.value;
    console.log(this.Subject2);
    this.Subject3 = subject3.value;
    console.log(this.Subject3);
    this.Subject4 = subject4.value;
    console.log(this.Subject4);
    this.Subject5 = subject5.value;
    console.log(this.Subject5);


    this.internaltotalsubject1 = Number.parseInt(this.internal1subject1.toString()) + Number.parseInt(this.internal2subject1.toString()) +
      Number.parseInt(this.theorysubject1.toString());
    console.log(this.internaltotalsubject1);
    // this.firstadd=internal1subject1.value;
    // this.secondadd=internal1subject2.value;

    this.internaltotalsubject2 = Number.parseInt(this.internal1subject2.toString()) + Number.parseInt(this.internal2subject2.toString()) +
      Number.parseInt(this.theorysubject2.toString());
    console.log(this.internaltotalsubject2);

    this.internaltotalsubject3 = Number.parseInt(this.internal1subject3.toString()) + Number.parseInt(this.internal2subject3.toString()) +
      Number.parseInt(this.theorysubject3.toString());
    console.log(this.internaltotalsubject3);

    this.internaltotalsubject4 = Number.parseInt(this.internal1subject4.toString()) + Number.parseInt(this.internal2subject4.toString()) +
      Number.parseInt(this.theorysubject4.toString());
    console.log(this.internaltotalsubject4);

    this.internaltotalsubject5 = Number.parseInt(this.internal1subject5.toString()) + Number.parseInt(this.internal2subject5.toString()) +
      Number.parseInt(this.theorysubject5.toString());
    console.log(this.internaltotalsubject5);

    //total marks checking condition

    if (this.internaltotalsubject1 >= 40) {
      this.counter++;
      this.gracesubject1 = 0;
      console.log('counter:' + this.counter);
    } else {
      this.gracesubject1 = 40 - this.internaltotalsubject1;
      console.log("grace required for subject1:" + this.gracesubject1);
    }


    if (this.internaltotalsubject2 >= 40) {
      this.counter++;
      this.gracesubject2 = 0;
      console.log('counter:' + this.counter);
    } else {
      this.gracesubject2 = 40 - this.internaltotalsubject2;
      console.log("grace required for subject2:" + this.gracesubject2);
    }

    if (this.internaltotalsubject3 >= 40) {
      this.counter++;
      this.gracesubject3 = 0;
      console.log('counter:' + this.counter);
    } else {
      this.gracesubject3 = 40 - this.internaltotalsubject3;
      console.log("grace required for subject3:" + this.gracesubject3);
    }


    if (this.internaltotalsubject4 >= 40) {
      this.counter++;
      this.gracesubject4 = 0;
      console.log('counter:' + this.counter);
    } else {
      this.gracesubject4 = 40 - this.internaltotalsubject4;
      console.log("grace required for subject4:" + this.gracesubject4);
    }


    if (this.internaltotalsubject5 >= 40) {
      this.counter++;
      this.gracesubject5 = 0;
      console.log('counter:' + this.counter);
    } else {
      this.gracesubject5 = 40 - this.internaltotalsubject5;
      console.log("grace required for subject5:" + this.gracesubject5);
    }

    //practical marks check
    if (this.practical1 >= 20) {
      this.counterpractical++;
    } else { console.log("practical 1 not cleared"); }

    if (this.practical2 >= 20) {
      this.counterpractical++;
    } else { console.log("practical 2 not cleared"); }

    if (this.practical3 >= 20) {
      this.counterpractical++;
    } else { console.log("practical 3 not cleared"); }

    if (this.practical4 >= 20) {
      this.counterpractical++;
    } else { console.log("practical 4 not cleared"); }

    if (this.practical5 >= 20) {
      this.counterpractical++;
      console.log("pract counter" + this.counterpractical);
    } else { console.log("practical 5 not cleared"); }

    //result calculation

    this.totalcounter = Number.parseInt(this.counter.toString()) + Number.parseInt(this.counterpractical.toString());
    console.log("total count:" + this.totalcounter);

    if (this.totalcounter >= 8) {
      this.Gracemarks = Number.parseInt(this.gracesubject1.toString()) + Number.parseInt(this.gracesubject2.toString()) +
        Number.parseInt(this.gracesubject3.toString()) + Number.parseInt(this.gracesubject4.toString()) +
        Number.parseInt(this.gracesubject5.toString());

      console.log(this.Gracemarks);
      if (this.Gracemarks <= 7 && this.counterpractical >= 4) {

        if (this.internaltotalsubject1 <= 40) {
          this.Givegracemarks = 40 - this.internaltotalsubject1;
          console.log(this.Givegracemarks);
          this.internaltotalsubject1 = this.internaltotalsubject1 + this.Givegracemarks;

          this.counter++;
          console.log('provide gracesubject1=' + this.internaltotalsubject1);
        } else {
          console.log("not required grace subject1");
        }

        if (this.internaltotalsubject2 <= 40) {
          this.Givegracemarks = 40 - this.internaltotalsubject2;
          console.log(this.Givegracemarks);
          this.internaltotalsubject2 = this.internaltotalsubject2 + this.Givegracemarks;
          this.counter++;
          console.log('provide gracesubject2=' + this.internaltotalsubject2);
        } else {
          console.log("not required grace subject2");
        }

        if (this.internaltotalsubject3 <= 40) {
          this.Givegracemarks = 40 - this.internaltotalsubject3;

          this.internaltotalsubject3 = this.internaltotalsubject3 + this.Givegracemarks;
          this.counter++;
          console.log('provide gracesubject3=' + this.internaltotalsubject3);
        } else {
          console.log("not required grace subject3");
        }

        if (this.internaltotalsubject4 <= 40) {
          this.Givegracemarks = 40 - this.internaltotalsubject4;
          this.internaltotalsubject4 = this.internaltotalsubject4 + this.Givegracemarks;
          this.counter++;
          console.log('provide gracesubject4=' + this.internaltotalsubject4);
        } else {
          console.log("not required grace subject4");
        }

        if (this.internaltotalsubject5 <= 40) {
          this.Givegracemarks = 40 - this.internaltotalsubject5;
          this.internaltotalsubject5 = this.internaltotalsubject5 + this.Givegracemarks;
          this.counter++;
          console.log('provide gracesubject5=' + this.internaltotalsubject5);
        } else {
          console.log("not required grace subject5");
        }

       

      } else { }

    } else {
      console.log("Dropped");

      this.result = "Fail"; this.pattern = "Drop"
      if (this.selectSem == "semester2" || this.selectSem == "semester4" || this.selectSem == "semester6") {
        this.exammarks.Dropstudentmarksdata(new DropstudentmarksModel(this.selectMonth, this.selectYear, this.selectSem,
          this.result, this.pattern, this.internal1subject1, this.internal2subject1, this.internal1subject2, this.internal2subject2,
          this.internal1subject3, this.internal2subject3, this.internal1subject4, this.internal2subject4, this.internal1subject5,
          this.internal2subject5, this.theorysubject1, this.theorysubject2, this.theorysubject3, this.theorysubject4, this.theorysubject5,
          this.internaltotalsubject1, this.internaltotalsubject2, this.internaltotalsubject3, this.internaltotalsubject4,
          this.internaltotalsubject5, this.practical1, this.practical2, this.practical3, this.practical4, this.practical5,
          this.Subject1, this.Subject2, this.Subject3, this.Subject4, this.Subject5, this.firstName, this.middleName, this.lastName,
          this.Uniqueno, this.PNRno)).subscribe(
            (data: any) => {
              this.dropData = data;
              console.log(this.dropData);
            });
      } else { }


    }

    // checking condition for creating atkt results

    this.totalcounters = Number.parseInt(this.counter.toString()) + Number.parseInt(this.counterpractical.toString());
    console.log("total count:" + this.totalcounters);
    if (this.totalcounters <= 9) {
      if (this.selectMonth == "APRIL") {
        this.selectMonth1 = "OCTOBER"; this.result = "Fail"; this.pattern = "ATKT";
        console.log(this.selectMonth1); console.log(this.selectYear);

        

        this.exammarks.Atktstudentmarksdata(new AtktstudentmarksModel(this.selectMonth1, this.selectYear, this.selectSem,
          this.result, this.pattern, this.internal1subject1, this.internal2subject1, this.internal1subject2, this.internal2subject2,
          this.internal1subject3, this.internal2subject3, this.internal1subject4, this.internal2subject4, this.internal1subject5,
          this.internal2subject5, this.theorysubject1, this.theorysubject2, this.theorysubject3, this.theorysubject4, this.theorysubject5,
          this.internaltotalsubject1, this.internaltotalsubject2, this.internaltotalsubject3, this.internaltotalsubject4,
          this.internaltotalsubject5, this.practical1, this.practical2, this.practical3, this.practical4, this.practical5,
          this.Subject1, this.Subject2, this.Subject3, this.Subject4, this.Subject5, this.firstName, this.middleName, this.lastName,
          this.Uniqueno, this.PNRno)).subscribe(
            (data: any) => {
              this.atktData = data;
              console.log(this.atktData);
            });

        this.exammarks.Regularstudentmarksdata(new RegularstudentmarksModel(this.selectMonth, this.selectYear, this.selectSem,
          this.result, this.selectPattern, this.internal1subject1, this.internal2subject1, this.internal1subject2, this.internal2subject2,
          this.internal1subject3, this.internal2subject3, this.internal1subject4, this.internal2subject4, this.internal1subject5,
          this.internal2subject5, this.theorysubject1, this.theorysubject2, this.theorysubject3, this.theorysubject4, this.theorysubject5,
          this.internaltotalsubject1, this.internaltotalsubject2, this.internaltotalsubject3, this.internaltotalsubject4,
          this.internaltotalsubject5, this.practical1, this.practical2, this.practical3, this.practical4, this.practical5,
          this.Subject1, this.Subject2, this.Subject3, this.Subject4, this.Subject5, this.firstName, this.middleName, this.lastName,
          this.Uniqueno, this.PNRno)).subscribe(
            (data: any) => {
              this.regularData = data;
              console.log(this.regularData);
            });

      } else {
        this.selectMonth1 = "APRIL";
        this.selectYear1++;
        console.log(this.selectYear1);
        console.log(this.selectMonth1);
        this.result = "Fail"; this.pattern = "ATKT";
        this.exammarks.Atktstudentmarksdata(new AtktstudentmarksModel(this.selectMonth1, this.selectYear1, this.selectSem,
          this.result, this.pattern, this.internal1subject1, this.internal2subject1, this.internal1subject2, this.internal2subject2,
          this.internal1subject3, this.internal2subject3, this.internal1subject4, this.internal2subject4, this.internal1subject5,
          this.internal2subject5, this.theorysubject1, this.theorysubject2, this.theorysubject3, this.theorysubject4, this.theorysubject5,
          this.internaltotalsubject1, this.internaltotalsubject2, this.internaltotalsubject3, this.internaltotalsubject4,
          this.internaltotalsubject5, this.practical1, this.practical2, this.practical3, this.practical4, this.practical5,
          this.Subject1, this.Subject2, this.Subject3, this.Subject4, this.Subject5, this.firstName, this.middleName, this.lastName,
          this.Uniqueno, this.PNRno)).subscribe(
            (data: any) => {
              this.atktData = data;
              console.log(this.atktData);
            });

        this.selectYear1 = this.selectYear;

        this.exammarks.Regularstudentmarksdata(new RegularstudentmarksModel(this.selectMonth, this.selectYear, this.selectSem,
          this.result, this.selectPattern, this.internal1subject1, this.internal2subject1, this.internal1subject2, this.internal2subject2,
          this.internal1subject3, this.internal2subject3, this.internal1subject4, this.internal2subject4, this.internal1subject5,
          this.internal2subject5, this.theorysubject1, this.theorysubject2, this.theorysubject3, this.theorysubject4, this.theorysubject5,
          this.internaltotalsubject1, this.internaltotalsubject2, this.internaltotalsubject3, this.internaltotalsubject4,
          this.internaltotalsubject5, this.practical1, this.practical2, this.practical3, this.practical4, this.practical5,
          this.Subject1, this.Subject2, this.Subject3, this.Subject4, this.Subject5, this.firstName, this.middleName, this.lastName,
          this.Uniqueno, this.PNRno)).subscribe(
            (data: any) => {
              this.regularData = data;
              console.log(this.regularData);
            });
      }
    } else { }


    //Result creation of All clear STudents
    if (this.totalcounter == 10 || this.totalcounters == 10) {
      this.result = "Pass";
      this.exammarks.Regularstudentmarksdata(new RegularstudentmarksModel(this.selectMonth, this.selectYear, this.selectSem,
        this.result, this.selectPattern, this.internal1subject1, this.internal2subject1, this.internal1subject2, this.internal2subject2,
        this.internal1subject3, this.internal2subject3, this.internal1subject4, this.internal2subject4, this.internal1subject5,
        this.internal2subject5, this.theorysubject1, this.theorysubject2, this.theorysubject3, this.theorysubject4, this.theorysubject5,
        this.internaltotalsubject1, this.internaltotalsubject2, this.internaltotalsubject3, this.internaltotalsubject4,
        this.internaltotalsubject5, this.practical1, this.practical2, this.practical3, this.practical4, this.practical5,
        this.Subject1, this.Subject2, this.Subject3, this.Subject4, this.Subject5, this.firstName, this.middleName, this.lastName,
        this.Uniqueno, this.PNRno)).subscribe(
          (data: any) => {
            const errormessage=data;
            this.regularData = data;
            console.log(this.regularData);
            this.dialog.open(DialogComponent, {data :{message: errormessage.message}});

          });
    } else { }

    console.log(this.selectMonth, this.selectYear);
    this.counterpractical = 0;
    this.counter = 0;
    this.totalcounter = 0;
    this.totalcounters = 0;

    //delete api call
    this.exammarks.deletestudentdata(this.Uniqueno).subscribe((data: any) => {
      this.deletedata = data;
      console.log(this.deletedata);
    });
    form.resetForm();
  }
}


    // this.atkt = this.selectPattern == "Regular" ? false : true;


