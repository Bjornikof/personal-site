import {Injectable} from "@angular/core";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirestoreItemService {


  constructor(private firestore: AngularFirestore) {
  }

  getItems(path: string, pageSize: number): AngularFirestoreCollection {
    return this.firestore.collection(path,ref => ref.limit(pageSize));
  }

  getPrevItems(path: string, pageSize: number, startAt: any, endBefore: any): AngularFirestoreCollection {
    return this.firestore.collection(path,ref =>
      ref.startAt(startAt).endBefore(endBefore).limit(pageSize));
  }

  getNextItems(path: string, pageSize: number, startAt: any): AngularFirestoreCollection {
    return this.firestore.collection(path,ref =>
      ref.limit(pageSize).startAfter(startAt));
  }
}
