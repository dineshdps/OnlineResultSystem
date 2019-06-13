import { TestBed } from '@angular/core/testing';

import { ExamMarksServiceService } from './exam-marks-service.service';

describe('ExamMarksServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExamMarksServiceService = TestBed.get(ExamMarksServiceService);
    expect(service).toBeTruthy();
  });
});
