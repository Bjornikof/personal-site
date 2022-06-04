import {Injectable} from "@angular/core";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirestoreItemService {


  constructor(private firestore: AngularFirestore) {
  }

  getItems(path: string, pageSize?: number): AngularFirestoreCollection {
    if (pageSize) {
      return this.firestore.collection(path, ref => ref.orderBy('timestamp', 'desc').limit(pageSize));
    }
    return this.firestore.collection(path,ref => ref.orderBy('timestamp', 'desc'));
  }

  getPrevItems(path: string, pageSize: number, startAt: any, endBefore: any): AngularFirestoreCollection {
    return this.firestore.collection(path,ref =>
      ref.orderBy('timestamp', 'desc').limit(pageSize).startAt(startAt).endBefore(endBefore));
  }

  getNextItems(path: string, pageSize: number, startAt: any): AngularFirestoreCollection {
    return this.firestore.collection(path,ref =>
      ref.orderBy('timestamp', 'desc').limit(pageSize).startAfter(startAt));
  }
}
