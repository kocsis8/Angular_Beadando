import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeltoltComponent } from './feltolt.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FeltoltRoutingModule } from './feltolt-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    FeltoltComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule,
    FormsModule, 
    MatSelectModule,
    MatStepperModule,
    MatInputModule, MatButtonModule,
    FeltoltRoutingModule,MatSnackBarModule, MatCardModule
  ],
  exports: [FeltoltComponent]
})
export class FeltoltModule { }
