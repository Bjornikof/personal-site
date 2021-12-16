import { Component, OnInit } from '@angular/core';
import {GalleryItemService} from "../../services/galler-items.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  galleryItems: any;
  header: string = '';

  constructor(private galleryItemService: GalleryItemService) {
  }

  ngOnInit(): void {
  this.getGalleryItems();
  }

  getGalleryItems() {
    return this.galleryItemService.getGalleryItems().snapshotChanges().subscribe(data =>(this.galleryItems = data));
  }


}
