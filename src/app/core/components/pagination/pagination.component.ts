import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Output() nextEvent = new EventEmitter<any>();
  @Output() prevEvent = new EventEmitter<any>();
  @Input() pageNumber: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  nextPage(event: any): void{
    this.nextEvent.emit(event);
  }

  prevPage(event: any): void{
    this.prevEvent.emit(event);
  }

}
