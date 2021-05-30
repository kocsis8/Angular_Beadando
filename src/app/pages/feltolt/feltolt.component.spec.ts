import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeltoltComponent } from './feltolt.component';

describe('FeltoltComponent', () => {
  let component: FeltoltComponent;
  let fixture: ComponentFixture<FeltoltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeltoltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeltoltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
