import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KartyaComponent } from './kartya.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';





@NgModule({
  declarations: [
    KartyaComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
  ],
  exports: [KartyaComponent]
})
export class KartyaModule { }
