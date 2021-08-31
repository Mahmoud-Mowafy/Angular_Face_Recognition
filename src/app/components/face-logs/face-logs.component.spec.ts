import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceLogsComponent } from './face-logs.component';

describe('FaceLogsComponent', () => {
  let component: FaceLogsComponent;
  let fixture: ComponentFixture<FaceLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaceLogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
