import { PowModule } from './../../shared/pipes/pow.module';
import { ContainerModule } from './../../shared/container/container.module';
import { SplashScreenRoutingModule } from './splash-screen-routing.module';
import { OnHoverModule } from './../../shared/directives/on-hover/on-hover.module';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { SplashScreenComponent } from './splash-screen.component';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SplashScreenComponent],
  imports: [
    CommonModule, SplashScreenRoutingModule, MatCardModule, MatRippleModule, OnHoverModule, ContainerModule, PowModule,RouterModule
  ],
  providers: [DatePipe]
})
export class SplashScreenModule { }