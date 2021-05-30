import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListElemComponent } from './list-elem.component';
import { ListElemRoutingModule } from './list-elem-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { KartyaComponent } from '../kartya/kartya.component';
import { KartyaModule } from '../kartya/kartya.module';



@NgModule({
  declarations: [
    ListElemComponent
  ],
  imports: [
    CommonModule,ListElemRoutingModule,
    MatCardModule,
    MatButtonModule,
    KartyaModule
  ],exports:[ListElemComponent]
})
export class ListElemModule { }
