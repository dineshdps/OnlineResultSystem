import { Component, OnInit } from '@angular/core';
import { ExamMarksServiceService } from '../exam-marks-service.service';
import { RegisterTeacherData } from '../app.component';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
  
})
export class RegisterComponent implements OnInit {

  constructor(private exammarks:ExamMarksServiceService,
    private dialog:MatDialog
   ) { }

  ngOnInit() {
  }

  Firstname;Lastname;Middlename;username;password:string;
 
  
   
  register()
  {
    
    this.exammarks.Registerdata(new RegisterTeacherData(this.Firstname,this.Lastname,this.Middlename,this.username,this.password)).
    subscribe((data:any)=>{
      const register=data;
      this.dialog.open(DialogComponent, { data: { message:register.message } });

    }
    );


  }

}
