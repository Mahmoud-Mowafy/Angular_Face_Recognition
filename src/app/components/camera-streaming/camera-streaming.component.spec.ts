import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraStreamingComponent } from './camera-streaming.component';

describe('CameraStreamingComponent', () => {
  let component: CameraStreamingComponent;
  let fixture: ComponentFixture<CameraStreamingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CameraStreamingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraStreamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
