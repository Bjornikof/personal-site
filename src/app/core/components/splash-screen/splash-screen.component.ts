import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {
  windowWidth: string | undefined;
  showSplash = true;

  constructor(private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.windowWidth = "-" + window.innerWidth + "px";

      setTimeout(() => {
        this.showSplash = !this.showSplash;
      }, 400);
    }, 1500);
  }
}
