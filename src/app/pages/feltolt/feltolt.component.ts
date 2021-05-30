import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-feltolt',
  templateUrl: './feltolt.component.html',
  styleUrls: ['./feltolt.component.scss']
})
export class FeltoltComponent implements OnInit {
  form: FormGroup = new FormGroup({
  identifier: new FormControl(''),
  basedOn: new FormControl(''),
  partOf: new FormControl(''),
  questionnaire: new FormControl(''),
  status: new FormControl('in-progress'),
  subject: new FormControl(''),
  encounter: new FormControl(''),
  authored: new FormControl(''),
  author: new FormControl(''),
  source: new FormControl(''),
  item: new FormControl(''),
    
  });

  constructor() { }

  ngOnInit(): void {
  }
  

}
