import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { ExamMarksServiceService } from '../exam-marks-service.service';
import { DropstudentmarksModel, RegularstudentmarksModel, AtktstudentmarksModel } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(private http: Http,
    public dialog: MatDialog,
    private exammarks: ExamMarksServiceService,
    public router:Router) { }
  public FormatData: Array<any>;
  public formatdatas: Array<any>;
  
  ngOnInit() {

  }

  selectSem; selectPattern; selectformat; name: string;
  selectYear: number;
  viewdata = false;
  spinner = false;
  token:string;
  viewResult() {
    this.viewdata = true;

    this.spinner = true;

    this.token=localStorage.getItem('token');
      if(this.token == null){
        this.dialog.open(DialogComponent, {data :{message: "Login Please.."}});
        this.router.navigate(['/']);
      }else{}
    if (this.selectPattern == "Regular") {
      this.exammarks.getRegularstudentinfo(this.selectSem, this.selectYear, this.selectPattern).subscribe(
        (data: any) => {
        this.spinner = false;
        const errormsgs=data;
          this.FormatData = data;
          // this.dialog.open(DialogComponent, {data :{message: errormsgs.message}});

          console.log(this.FormatData);
        });       
    }
    else { }

    if (this.selectPattern == "ATKT") {
      this.exammarks.getATKTstudentinfo(this.selectSem, this.selectYear, this.selectPattern).subscribe(
        (data: any) => {
        this.spinner = false;
        const errormsgss=data;
        // this.dialog.open(DialogComponent, {data :{message: errormsgss.message}});

          this.FormatData = data;

          console.log(this.FormatData);
        });
   
    } else { }

    if (this.selectPattern == "Drop") {
      this.exammarks.getDropstudentinfo(this.selectSem, this.selectYear, this.selectPattern).subscribe(
        (data: any) => {
        this.spinner = false;
        const errormsg=data;
        // this.dialog.open(DialogComponent, {data :{message: errormsg.message}});

          this.FormatData = data;
          console.log(this.FormatData);
        });
        
    } else { }

  }
  counter = 0;
  totalcounter = 0;
  totalcounters = 0;
  counterpractical = 0;

  internal1subject1; internal2subject1; internal1subject2; internal2subject2; internal1subject3; internal2subject3;
  internal1subject4; internal2subject4; internal1subject5; internal2subject5;
  theorysubject1; theorysubject2; theorysubject3; theorysubject4; theorysubject5;
  practical1; practical2; practical3; practical4; practical5; UniqueNo; PNRno; year: Number;

  internaltotalsubject1; gracesubject1: number;
  internaltotalsubject2; gracesubject2: number;
  internaltotalsubject3; gracesubject3: number;
  internaltotalsubject4; gracesubject4: number;
  internaltotalsubject5; gracesubject5: number;
  Gracemarks: number;
  Givegracemarks: number;

  totaltheory1; totaltheory2; totaltheory3; totaltheory4; totaltheory5; selectYear1: number;

  firstname; middlename; lastname; month; semester; pattern; subject1; subject2; subject3; subject4; subject5; result;
  selectMonth1; selectMonth: string;

  public atktData: Array<any>;
  public regularData: Array<any>;
  public dropData: Array<any>;

  atktstudentmarksModel: AtktstudentmarksModel;
  regularstudentmarksdata: RegularstudentmarksModel;


  Postmarks(Firstname, Middlename, Lastname, uniqueNo, pNRno, Year, Month, Semester, Pattern,
    Internal1subject1, Internal2subject1, Internal1subject2, Internal2subject2, Internal1subject3, Internal2subject3,
    Internal1subject4, Internal2subject4, Internal1subject5, Internal2subject5,
    Theorysubject1, Theorysubject2, Theorysubject3, Theorysubject4, Theorysubject5,
    Practical1, Practical2, Practical3, Practical4, Practical5,
    Subject1, Subject2, Subject3, Subject4, Subject5: HTMLInputElement) {

    this.firstname = Firstname.value;
    console.log(this.firstname);
    this.middlename = Middlename.value;
    console.log(this.middlename);
    this.lastname = Lastname.value;
    this.UniqueNo = uniqueNo.value;
    this.PNRno = pNRno.value;
    this.year = Year.value;
    this.selectMonth = Month.value;
    console.log(this.selectMonth);
    this.semester = Semester.value;
    this.pattern = Pattern.value;
    this.internal1subject1 = Internal1subject1.value;
    this.internal2subject1 = Internal2subject1.value;
    this.internal1subject2 = Internal1subject2.value;
    this.internal2subject2 = Internal2subject2.value;
    this.internal1subject3 = Internal1subject3.value;
    this.internal2subject3 = Internal2subject3.value;
    this.internal1subject4 = Internal1subject4.value;
    this.internal2subject4 = Internal2subject4.value;
    this.internal1subject5 = Internal1subject5.value;
    this.internal2subject5 = Internal2subject5.value;
    this.theorysubject1 = Theorysubject1.value;
    this.theorysubject2 = Theorysubject2.value;
    this.theorysubject3 = Theorysubject3.value;
    this.theorysubject4 = Theorysubject4.value;
    this.theorysubject5 = Theorysubject5.value;
    this.practical1 = Practical1.value;
    this.practical2 = Practical2.value;
    this.practical3 = Practical3.value;
    this.practical4 = Practical4.value;
    this.practical5 = Practical5.value;
    this.subject1 = Subject1.value;
    this.subject2 = Subject2.value;
    this.subject3 = Subject3.value;
    this.subject4 = Subject4.value;
    this.subject5 = Subject5.value;

    this.selectMonth1 = this.selectMonth;
    this.selectYear1 = this.selectYear;

    this.internaltotalsubject1 = Number.parseInt(this.internal1subject1.toString()) + Number.parseInt(this.internal2subject1.toString()) +
      Number.parseInt(this.theorysubject1.toString());
    console.log(this.internaltotalsubject1);

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

    this.totalcounter = Number.parseInt(this.counter.toString()) + Number.parseInt(this.counterpractical.toString());
    console.log("total count:" + this.totalcounter);

    if (this.pattern == "Regular") {
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
            this.subject1, this.subject2, this.subject3, this.subject4, this.subject5, this.firstname, this.middlename, this.lastname,
            this.UniqueNo, this.PNRno)).subscribe(
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
            this.subject1, this.subject2, this.subject3, this.subject4, this.subject5, this.firstname, this.middlename, this.lastname,
            this.UniqueNo, this.PNRno)).subscribe(
              (data: any) => {
                this.atktData = data;
                console.log(this.atktData);
              });


          // this.atktstudentmarksModel=new AtktstudentmarksModel(this.selectMonth1, this.selectYear, this.selectSem,
          //   this.result, this.pattern, this.internal1subject1, this.internal2subject1, this.internal1subject2, this.internal2subject2,
          //   this.internal1subject3, this.internal2subject3, this.internal1subject4, this.internal2subject4, this.internal1subject5,
          //   this.internal2subject5, this.theorysubject1, this.theorysubject2, this.theorysubject3, this.theorysubject4, this.theorysubject5,
          //   this.internaltotalsubject1, this.internaltotalsubject2, this.internaltotalsubject3, this.internaltotalsubject4,
          //   this.internaltotalsubject5, this.practical1, this.practical2, this.practical3, this.practical4, this.practical5,
          //   this.subject1, this.subject2, this.subject3, this.subject4, this.subject5, this.firstname, this.middlename, this.lastname,
          //   this.UniqueNo, this.PNRno);

          // this.exammarks.updateAtktstudentmarksdata(this.atktstudentmarksModel,this.UniqueNo).subscribe(
          //     (data: any) => {
          //       this.atktData = data;
          //       console.log(this.atktData);
          //     });

          this.pattern = "Regular";
          this.regularstudentmarksdata = new RegularstudentmarksModel(this.selectMonth, this.selectYear, this.selectSem,
            this.result, this.pattern, this.internal1subject1, this.internal2subject1, this.internal1subject2, this.internal2subject2,
            this.internal1subject3, this.internal2subject3, this.internal1subject4, this.internal2subject4, this.internal1subject5,
            this.internal2subject5, this.theorysubject1, this.theorysubject2, this.theorysubject3, this.theorysubject4, this.theorysubject5,
            this.internaltotalsubject1, this.internaltotalsubject2, this.internaltotalsubject3, this.internaltotalsubject4,
            this.internaltotalsubject5, this.practical1, this.practical2, this.practical3, this.practical4, this.practical5,
            this.subject1, this.subject2, this.subject3, this.subject4, this.subject5, this.firstname, this.middlename, this.lastname,
            this.UniqueNo, this.PNRno);
          this.exammarks.updateRegularstudentmarksdata(this.regularstudentmarksdata, this.UniqueNo).subscribe(
            (data: any) => {
              this.regularData = data;
              console.log(this.regularData);
            });

        } else {
          this.selectMonth1 = "APRIL";
          this.selectYear1++;
          console.log(this.selectYear1);
          console.log(this.selectMonth1);
          this.result = "Fail"; this.pattern = "ATKT"
          this.exammarks.Atktstudentmarksdata(new AtktstudentmarksModel(this.selectMonth1, this.selectYear1, this.selectSem,
            this.result, this.pattern, this.internal1subject1, this.internal2subject1, this.internal1subject2, this.internal2subject2,
            this.internal1subject3, this.internal2subject3, this.internal1subject4, this.internal2subject4, this.internal1subject5,
            this.internal2subject5, this.theorysubject1, this.theorysubject2, this.theorysubject3, this.theorysubject4, this.theorysubject5,
            this.internaltotalsubject1, this.internaltotalsubject2, this.internaltotalsubject3, this.internaltotalsubject4,
            this.internaltotalsubject5, this.practical1, this.practical2, this.practical3, this.practical4, this.practical5,
            this.subject1, this.subject2, this.subject3, this.subject4, this.subject5, this.firstname, this.middlename, this.lastname,
            this.UniqueNo, this.PNRno)).subscribe(
              (data: any) => {
                this.atktData = data;
                console.log(this.atktData);
              });


          // this.atktstudentmarksModel=new AtktstudentmarksModel(this.selectMonth1, this.selectYear1, this.selectSem,
          //   this.result, this.pattern, this.internal1subject1, this.internal2subject1, this.internal1subject2, this.internal2subject2,
          //   this.internal1subject3, this.internal2subject3, this.internal1subject4, this.internal2subject4, this.internal1subject5,
          //   this.internal2subject5, this.theorysubject1, this.theorysubject2, this.theorysubject3, this.theorysubject4, this.theorysubject5,
          //   this.internaltotalsubject1, this.internaltotalsubject2, this.internaltotalsubject3, this.internaltotalsubject4,
          //   this.internaltotalsubject5, this.practical1, this.practical2, this.practical3, this.practical4, this.practical5,
          //   this.subject1, this.subject2, this.subject3, this.subject4, this.subject5, this.firstname, this.middlename, this.lastname,
          //   this.UniqueNo, this.PNRno);

          // this.exammarks.updateAtktstudentmarksdata(this.atktstudentmarksModel,this.UniqueNo).subscribe(
          //     (data: any) => {
          //       this.atktData = data;
          //       console.log(this.atktData);
          //     });

          this.pattern = "Regular";

          this.selectYear1 = this.selectYear;

          this.regularstudentmarksdata = new RegularstudentmarksModel(this.selectMonth, this.selectYear, this.selectSem,
            this.result, this.pattern, this.internal1subject1, this.internal2subject1, this.internal1subject2, this.internal2subject2,
            this.internal1subject3, this.internal2subject3, this.internal1subject4, this.internal2subject4, this.internal1subject5,
            this.internal2subject5, this.theorysubject1, this.theorysubject2, this.theorysubject3, this.theorysubject4, this.theorysubject5,
            this.internaltotalsubject1, this.internaltotalsubject2, this.internaltotalsubject3, this.internaltotalsubject4,
            this.internaltotalsubject5, this.practical1, this.practical2, this.practical3, this.practical4, this.practical5,
            this.subject1, this.subject2, this.subject3, this.subject4, this.subject5, this.firstname, this.middlename, this.lastname,
            this.UniqueNo, this.PNRno);

          this.exammarks.updateRegularstudentmarksdata(this.regularstudentmarksdata, this.UniqueNo).subscribe(
            (data: any) => {
              this.regularData = data;
              console.log(this.regularData);
            });
        }
      } else { }


      //Result creation of All clear STudents
      if (this.totalcounter == 10 || this.totalcounters == 10) {
        this.result = "Pass";

        this.regularstudentmarksdata = new RegularstudentmarksModel(this.selectMonth, this.selectYear, this.selectSem,
          this.result, this.pattern, this.internal1subject1, this.internal2subject1, this.internal1subject2, this.internal2subject2,
          this.internal1subject3, this.internal2subject3, this.internal1subject4, this.internal2subject4, this.internal1subject5,
          this.internal2subject5, this.theorysubject1, this.theorysubject2, this.theorysubject3, this.theorysubject4, this.theorysubject5,
          this.internaltotalsubject1, this.internaltotalsubject2, this.internaltotalsubject3, this.internaltotalsubject4,
          this.internaltotalsubject5, this.practical1, this.practical2, this.practical3, this.practical4, this.practical5,
          this.subject1, this.subject2, this.subject3, this.subject4, this.subject5, this.firstname, this.middlename, this.lastname,
          this.UniqueNo, this.PNRno);
        this.exammarks.updateRegularstudentmarksdata(this.regularstudentmarksdata, this.UniqueNo).subscribe(
          (data: any) => {
            this.regularData = data;
            console.log(this.regularData);
          });

        this.exammarks.deleteAtktstudentmarksdata(this.UniqueNo).subscribe((data: any) => {
          this.atktData = data;
        })
        this.exammarks.deleteDropstudentmarksdata(this.UniqueNo).subscribe((data: any) => {
          this.atktData = data;
        })

      } else { }


    } else { }

    if (this.pattern == "ATKT") {
      this.Gracemarks = Number.parseInt(this.gracesubject1.toString()) + Number.parseInt(this.gracesubject2.toString()) +
        Number.parseInt(this.gracesubject3.toString()) + Number.parseInt(this.gracesubject4.toString()) +
        Number.parseInt(this.gracesubject5.toString());

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
      } else { }

      // checking condition for creating atkt results

      this.totalcounters = Number.parseInt(this.counter.toString()) + Number.parseInt(this.counterpractical.toString());
      console.log("total count:" + this.totalcounters);
      if (this.totalcounter == 10 || this.totalcounters == 10) {

        this.result = "Pass";
        this.atktstudentmarksModel = new AtktstudentmarksModel(this.selectMonth, this.selectYear, this.selectSem,
          this.result, this.pattern, this.internal1subject1, this.internal2subject1, this.internal1subject2, this.internal2subject2,
          this.internal1subject3, this.internal2subject3, this.internal1subject4, this.internal2subject4, this.internal1subject5,
          this.internal2subject5, this.theorysubject1, this.theorysubject2, this.theorysubject3, this.theorysubject4, this.theorysubject5,
          this.internaltotalsubject1, this.internaltotalsubject2, this.internaltotalsubject3, this.internaltotalsubject4,
          this.internaltotalsubject5, this.practical1, this.practical2, this.practical3, this.practical4, this.practical5,
          this.subject1, this.subject2, this.subject3, this.subject4, this.subject5, this.firstname, this.middlename, this.lastname,
          this.UniqueNo, this.PNRno);

        this.exammarks.updateAtktstudentmarksdata(this.atktstudentmarksModel, this.UniqueNo).subscribe(
          (data: any) => {
            this.atktData = data;
            console.log(this.atktData);
          });

      } else {

        if (this.selectMonth == "APRIL") {
          this.selectMonth1 = "OCTOBER"; this.result = "Fail"; this.pattern = "ATKT";
          console.log(this.selectMonth1); console.log(this.selectYear);

          this.exammarks.Atktstudentmarksdata(new AtktstudentmarksModel(this.selectMonth1, this.selectYear, this.selectSem,
            this.result, this.pattern, this.internal1subject1, this.internal2subject1, this.internal1subject2, this.internal2subject2,
            this.internal1subject3, this.internal2subject3, this.internal1subject4, this.internal2subject4, this.internal1subject5,
            this.internal2subject5, this.theorysubject1, this.theorysubject2, this.theorysubject3, this.theorysubject4, this.theorysubject5,
            this.internaltotalsubject1, this.internaltotalsubject2, this.internaltotalsubject3, this.internaltotalsubject4,
            this.internaltotalsubject5, this.practical1, this.practical2, this.practical3, this.practical4, this.practical5,
            this.subject1, this.subject2, this.subject3, this.subject4, this.subject5, this.firstname, this.middlename, this.lastname,
            this.UniqueNo, this.PNRno)).subscribe(
              (data: any) => {
                this.atktData = data;
                console.log(this.atktData);
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
            this.subject1, this.subject2, this.subject3, this.subject4, this.subject5, this.firstname, this.middlename, this.lastname,
            this.UniqueNo, this.PNRno)).subscribe(
              (data: any) => {
                this.atktData = data;
                console.log(this.atktData);
              });

          this.selectYear1 = this.selectYear;
        }
      }

    } else { }

    if (this.pattern == "Drop") {

    } else { }
    this.counterpractical = 0;
    this.counter = 0;
    this.totalcounter = 0;
    this.totalcounters = 0;
  }
}
