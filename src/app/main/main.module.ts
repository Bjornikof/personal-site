import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./components/home/home.component";
import {CoreModule} from "../core/core.module";
import {ProjectsComponent} from "./components/projects/projects.component";
import { GalleryComponent } from './components/gallery/gallery.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProjectsComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    HomeComponent,
    ProjectsComponent
  ]
})
export class MainModule { }
