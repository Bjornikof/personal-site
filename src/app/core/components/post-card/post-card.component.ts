import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input() src: string = '';
  @Input() header: string = '';
  @Input() displayText: string = '';
  @Input() mediumLink: string = '';
  @Input() tags: string[] = ['',''];

  constructor() { }

  ngOnInit(): void {
  }

}
