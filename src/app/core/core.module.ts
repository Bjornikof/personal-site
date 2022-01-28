import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './components/navbar/navbar.component';
import {RouterModule} from "@angular/router";
import {MediaCardComponent} from './components/media-card/media-card.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {PaginationComponent} from './components/pagination/pagination.component';
import {NgxSpinnerModule} from "ngx-spinner";
import {SplashScreenComponent} from "./components/splash-screen/splash-screen.component";
import { PostCardComponent } from './components/post-card/post-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatChipsModule} from "@angular/material/chips";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    NavbarComponent,
    MediaCardComponent,
    PaginationComponent,
    SplashScreenComponent,
    PostCardComponent
  ],
  exports: [
    NavbarComponent,
    MediaCardComponent,
    PaginationComponent,
    SplashScreenComponent,
    PostCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    NgxSpinnerModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule
  ]
})
export class CoreModule {
}
