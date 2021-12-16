import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss']
})
export class MediaCardComponent implements OnInit {

  @Input() src: string = '';
  @Input() header: string = '';
  @Input() description: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
