import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from 'src/app/shared/db/category';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {
  year = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }
  categories = CATEGORIES;
}
