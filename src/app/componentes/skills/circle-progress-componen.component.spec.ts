import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleProgressComponenComponent } from './circle-progress-componen.component';

describe('CircleProgressComponenComponent', () => {
  let component: CircleProgressComponenComponent;
  let fixture: ComponentFixture<CircleProgressComponenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleProgressComponenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircleProgressComponenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
