import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {

  @Input() pictureItems: Array<Object> = [];
  @Input() lazyLoading: boolean = true;
  @Input() imagePopup: boolean = true;
  @Input() autoSlide: boolean = false;
  @Input() imageSlide: number = 1;
  @Input() sizeObject: Object = {};
  @Input() showArrow: boolean = true;
  @Input() infiniteOption: boolean = false;
  @Input() animationSpeed: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.pictureItems)
  }
}
