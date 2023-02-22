import {Component, OnInit, ViewChild} from '@angular/core';
import {faBars} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  host: {
    '(document:click)': 'onClick()',
  }
})
export class NavbarComponent implements OnInit {
  @ViewChild('sidenav') sidenav: any;

  faBars = faBars;
  opened = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick() {
    this.opened = this.sidenav.opened;
  }
}
