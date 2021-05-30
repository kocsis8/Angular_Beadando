import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeltoltComponent } from './feltolt.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FeltoltRoutingModule } from './feltolt-routing.module';


@NgModule({
  declarations: [
    FeltoltComponent
  ],
  imports: [
    CommonModule,
    CommonModule, FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FeltoltRoutingModule
  ]
})
export class FeltoltModule { }
