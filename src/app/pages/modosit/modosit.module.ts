import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModositComponent } from './modosit.component';
import { ModositRoutingModule } from './modosit-routing.module';



@NgModule({
  declarations: [
    ModositComponent
  ],
  imports: [
    CommonModule, ModositRoutingModule
  ]
})
export class ModositModule { }
