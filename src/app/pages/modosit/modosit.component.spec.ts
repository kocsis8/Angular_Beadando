import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModositComponent } from './modosit.component';

describe('ModositComponent', () => {
  let component: ModositComponent;
  let fixture: ComponentFixture<ModositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModositComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
