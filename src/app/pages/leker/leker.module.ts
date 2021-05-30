import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LekerComponent } from './leker.component';
import { LekerRoutingModule } from './leker-routing.module';



@NgModule({
  declarations: [
    LekerComponent
  ],
  imports: [
    CommonModule, LekerRoutingModule
  ]
})
export class LekerModule { }
