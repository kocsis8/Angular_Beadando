import { Component, Input, OnInit } from '@angular/core';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { QuestionnaireResponse } from 'src/app/shared/models/QuestionnaireResponse ';

@Component({
  selector: 'app-kartya',
  templateUrl: './kartya.component.html',
  styleUrls: ['./kartya.component.scss']
})
export class KartyaComponent implements OnInit {

  @Input() bejegyzes?: QuestionnaireResponse;
  
  constructor(private service: FbBaseService) { }

  ngOnInit(): void {
  }
  deleteElem(id: any){
    this.service.delete('QuestionnaireResponse',id);
  }

}
