import { Component, OnInit } from '@angular/core';
import {FirestoreItemService} from "../../services/firestore-item.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  pageSize: number = 8;
  firestoreCollection: string = 'galleryItems';

  constructor(private firestoreItemService: FirestoreItemService) {
  }

  ngOnInit(): void {
  this.getGalleryItems();
  }

  //Data object for listing items
  tableData: any[] = [];

  //Save first document in snapshot of items received
  firstInResponse: any = [];

  //Save last document in snapshot of items received
  lastInResponse: any = [];

  //Keep the array of first document of previous pages
  prev_strt_at: any = [];

  //Maintain the count of clicks on Next Prev button
  pagination_clicked_count = 0;

  //Disable next and prev buttons
  disable_next: boolean = false;
  disable_prev: boolean = false;

  getGalleryItems() {
    return this.firestoreItemService.getItems(this.firestoreCollection, this.pageSize).snapshotChanges()
      .subscribe(data => {

      this.fillData(data);

      //Initialize values
      this.prev_strt_at = [];
      this.pagination_clicked_count = 0;
      this.disable_next = false;
      this.disable_prev = false;

      //Push first item to use for Previous action
      this.push_prev_startAt(this.firstInResponse);
    }, error => {
      console.log(error);
    });
  }

  //Show previous set
  prevPage() {
    this.disable_prev = true;
    this.firestoreItemService.getPrevItems(this.firestoreCollection, this.pageSize, this.get_prev_startAt(), this.firstInResponse).snapshotChanges()
      .subscribe(data => {

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
      .subscribe(data => {

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

  //Add document
  push_prev_startAt(prev_first_doc: any) {
    this.prev_strt_at.push(prev_first_doc);
  }

  //Remove not required document
  pop_prev_startAt(prev_first_doc: any) {
    this.prev_strt_at.forEach((element: any) => {
      if (prev_first_doc.data().id == element.data().id) {
        element = null;
      }
    });
  }

  //Return the Doc rem where previous page will startAt
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
