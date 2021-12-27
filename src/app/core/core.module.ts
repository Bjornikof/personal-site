import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from "@angular/router";
import { MediaCardComponent } from './components/media-card/media-card.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { PaginationComponent } from './components/pagination/pagination.component';



@NgModule({
    declarations: [
        NavbarComponent,
        MediaCardComponent,
        PaginationComponent
    ],
  exports: [
    NavbarComponent,
    MediaCardComponent,
    PaginationComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        FontAwesomeModule
    ]
})
export class CoreModule { }
