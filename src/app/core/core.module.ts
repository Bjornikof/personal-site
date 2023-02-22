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
import { CLOUDINARY_CONFIG, NgxPictureModule } from "ngx-picture";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatSidenavModule} from "@angular/material/sidenav";
import {ImageSliderComponent} from "./components/image-slider/image-slider.component";
import {NgImageSliderModule} from "ng-image-slider";
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";
import { SkeletonLoaderComponent } from './components/skeleton-loader/skeleton-loader.component';
import { ProjectCardComponent } from './components/project-card/project-card/project-card.component';


@NgModule({
  declarations: [
    NavbarComponent,
    MediaCardComponent,
    PaginationComponent,
    SplashScreenComponent,
    PostCardComponent,
    ImageSliderComponent,
    SkeletonLoaderComponent,
    ProjectCardComponent
  ],
    exports: [
        NavbarComponent,
        MediaCardComponent,
        PaginationComponent,
        SplashScreenComponent,
        PostCardComponent,
        ImageSliderComponent,
        ProjectCardComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    NgxSpinnerModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    NgxPictureModule.forRoot(CLOUDINARY_CONFIG),
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatSidenavModule,
    NgImageSliderModule,
    NgxSkeletonLoaderModule
  ]
})
export class CoreModule {
}
