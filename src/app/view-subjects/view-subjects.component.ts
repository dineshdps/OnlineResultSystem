import { Component, OnInit } from '@angular/core';
import { ExamMarksServiceService } from '../exam-marks-service.service';

@Component({
  selector: 'app-view-subjects',
  templateUrl: './view-subjects.component.html',
  styleUrls: ['./view-subjects.component.scss']
})
export class ViewSubjectsComponent implements OnInit {

  constructor(private exammarks: ExamMarksServiceService,
  ) { }


  public FormatData: Array<any>;

  ngOnInit() {
    this.exammarks.getsubjectformatdatas().subscribe((data: any) => {
      this.FormatData = data;
    });

  }
}

