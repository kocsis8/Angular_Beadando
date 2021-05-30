import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LekerComponent } from './leker.component';

describe('LekerComponent', () => {
  let component: LekerComponent;
  let fixture: ComponentFixture<LekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LekerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
