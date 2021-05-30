import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { async } from 'rxjs';
import { QuestionnaireResponse } from '../shared/models/QuestionnaireResponse ';

@Injectable({
  providedIn: 'root'
})
export class FbBaseService {

  constructor(private afs: AngularFirestore) { }

  async add(collectionName: string, data: QuestionnaireResponse, id?: string): Promise<string> {
    const uid = id ? id : this.afs.createId();
    data.id = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    return uid;
  }

    // tslint:disable-next-line: typedef
    weakAdd(collectionName: string, data: QuestionnaireResponse) {
      return this.afs.collection(collectionName).add(data).then(
        result => { console.log(result); }, err => { console.log(err); }).finally(() => { console.log('finally'); });
    }
}


