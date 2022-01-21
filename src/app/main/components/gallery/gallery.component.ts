import { Component, OnInit } from '@angular/core';
import {FirestoreItemService} from "../../services/firestore-item.service";
import {take} from "rxjs";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  pageSize: number = 8;
  firestoreCollection: string = 'galleryItems';
  tableData: any[] = [];
  firstInResponse: any = [];
  lastInResponse: any = [];
  prev_strt_at: any = [];
  pagination_clicked_count = 0;
  disable_next: boolean = false;
  disable_prev: boolean = false;

  constructor(private firestoreItemService: FirestoreItemService) {
  }

  ngOnInit(): void {
  this.getGalleryItems();
  }

  getGalleryItems() {
    return this.firestoreItemService.getItems(this.firestoreCollection, this.pageSize).snapshotChanges()
      .pipe(take(1)).subscribe(data => {

      this.fillData(data);

      this.prev_strt_at = [];
      this.pagination_clicked_count = 0;
      this.disable_next = false;
      this.disable_prev = false;

      this.push_prev_startAt(this.firstInResponse);
    }, error => {
      console.log(error);
    });
  }

  prevPage() {
    this.disable_prev = true;
    if (this.pagination_clicked_count === 0) {
      return;
    }
    this.firestoreItemService.getPrevItems(this.firestoreCollection, this.pageSize, this.get_prev_startAt(), this.firstInResponse).snapshotChanges()
      .pipe(take(1)).subscribe(data => {

        this.fillData(data);

        //Maintaing page no.
        this.pagination_clicked_count--;

        //Pop not required value in array
        this.pop_prev_startAt(this.firstInResponse);

        //Enable buttons again
        this.disable_prev = false;
        this.disable_next = false;
      }, error => {
        console.log(error);
        this.disable_prev = false;
      });
  }

  nextPage() {
    this.disable_next = true;
    this.firestoreItemService.getNextItems(this.firestoreCollection, this.pageSize, this.lastInResponse).snapshotChanges()
      .pipe(take(1)).subscribe(data => {
        if (!data.length) {
          this.disable_next = true;
          return;
        }

        this.fillData(data);

        this.pagination_clicked_count++;

        this.push_prev_startAt(this.firstInResponse);

        this.disable_next = false;
      }, error => {
        console.log(error);
        this.disable_next = false;
      });
  }

  push_prev_startAt(prev_first_doc: any) {
    this.prev_strt_at.push(prev_first_doc);
  }

  pop_prev_startAt(prev_first_doc: any) {
    this.prev_strt_at.forEach((element: any) => {
      if (prev_first_doc.data().id == element.data().id) {
        element = null;
      }
    });
  }

  get_prev_startAt() {
    if (this.prev_strt_at.length > (this.pagination_clicked_count + 1))
      this.prev_strt_at.splice(this.prev_strt_at.length - 2, this.prev_strt_at.length - 1);
    return this.prev_strt_at[this.pagination_clicked_count - 1];
  }

  fillData(data: any) {
    this.firstInResponse = data[0].payload.doc;
    this.lastInResponse = data[data.length - 1].payload.doc;

    this.tableData = [];
    for (let item of data) {
      this.tableData.push(item.payload.doc.data());
    }
  }
}
