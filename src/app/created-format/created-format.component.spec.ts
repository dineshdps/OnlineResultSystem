import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedFormatComponent } from './created-format.component';

describe('CreatedFormatComponent', () => {
  let component: CreatedFormatComponent;
  let fixture: ComponentFixture<CreatedFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
