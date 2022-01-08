import {Component, Input, OnInit} from '@angular/core';
import { faDeviantart, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss']
})
export class MediaCardComponent implements OnInit {

  @Input() src: string = '';
  @Input() header: string = '';
  @Input() description: string = '';
  @Input() youtubeLink: string = '';
  @Input() instagramLink: string = '';
  @Input() deviantartLink: string = '';

  faYoutube = faYoutube;
  faInstagram = faInstagram;
  faDeviantart = faDeviantart;

  constructor() {
  }

  ngOnInit(): void {
  }

}
