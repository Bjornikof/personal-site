import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./components/home/home.component";
import {CoreModule} from "../core/core.module";
import {ProjectsComponent} from "./components/projects/projects.component";
import { GalleryComponent } from './components/gallery/gallery.component';
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import { PostsComponent } from './components/posts/posts.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProjectsComponent,
    GalleryComponent,
    PostsComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  exports: [
    HomeComponent,
    ProjectsComponent
  ]
})
export class MainModule { }
