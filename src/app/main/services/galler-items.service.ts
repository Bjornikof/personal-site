import {Injectable} from "@angular/core";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class GalleryItemService {


  constructor(private firestore: AngularFirestore) {
  }

  getGalleryItems(): AngularFirestoreCollection {
    return this.firestore.collection("galleryItems");
  }
}
