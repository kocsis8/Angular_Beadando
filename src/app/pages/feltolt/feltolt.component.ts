import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatVerticalStepper } from '@angular/material/stepper';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { QuestionnaireResponse } from 'src/app/shared/models/QuestionnaireResponse ';
interface Statusz {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-feltolt',
  templateUrl: './feltolt.component.html',
  styleUrls: ['./feltolt.component.scss']
})
export class FeltoltComponent implements OnInit {
  form: FormGroup = new FormGroup({
    subject: new FormGroup({
      display: new FormControl('')
    }),
    status: new FormControl('')
  });

  stat: Statusz[] = [
    { value: 'in-progress', viewValue: 'in-progress' },
    { value: 'completed', viewValue: 'completed' },
    { value: 'amended', viewValue: 'amended' },
    { value: 'entered-in-error', viewValue: 'entered-in-error' },
    { value: 'stopped', viewValue: 'stopped' },
  ];

  isLinear = true;
  selectedValue: string | null = null;
  @ViewChild('Form') mytemplateForm: MatVerticalStepper | null = null;




  constructor(private service: FbBaseService, private _snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string): void {
    this._snackBar.open(message, action, {
      duration: 1000
    }
    );
  }

  mentes(): void {
    this.service.add('QuestionnaireResponse', this.form.value as QuestionnaireResponse);
    this.openSnackBar('Mentés Sikeres', 'ok');
    this.mytemplateForm?.reset();
  }
  ngOnInit(): void {
  }


}
