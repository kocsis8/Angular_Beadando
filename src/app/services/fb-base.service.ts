import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
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

  delete(collectionName: string, id: string){
    return this.afs.collection(collectionName).doc(id).delete();
  }

  get(collectionName: string) : Observable<QuestionnaireResponse[]>{
    return this.afs.collection(collectionName).valueChanges() as Observable<QuestionnaireResponse[]>;
  }
}


