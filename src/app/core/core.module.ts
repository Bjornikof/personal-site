import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from "@angular/router";
import { MediaCardComponent } from './components/media-card/media-card.component';



@NgModule({
    declarations: [
        NavbarComponent,
        MediaCardComponent
    ],
  exports: [
    NavbarComponent,
    MediaCardComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class CoreModule { }
