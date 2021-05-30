import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { QuestionnaireResponse } from 'src/app/shared/models/QuestionnaireResponse ';

@Component({
  selector: 'app-list-elem',
  templateUrl: './list-elem.component.html',
  styleUrls: ['./list-elem.component.scss']
})
export class ListElemComponent implements OnInit {
  bejegyzes?: Observable<QuestionnaireResponse[]>;

  constructor(private service: FbBaseService ) {   }
  get(){
    this.bejegyzes = this.service.get("QuestionnaireResponse");
  }
  ngOnInit(){
    this.get();
  }
  mutat(){
    console.log(this.service.get("QuestionnaireResponse"));
  }

}
