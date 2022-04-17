import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./main/components/home/home.component";
import {ProjectsComponent} from "./main/components/projects/projects.component";
import {GalleryComponent} from "./main/components/gallery/gallery.component";
import {PostsComponent} from "./main/components/posts/posts.component";
import {AboutComponent} from "./main/components/about/about.component";
import {ContactComponent} from "./main/components/contact/contact.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'projects', component: ProjectsComponent
  },
  {
    path: 'gallery', component: GalleryComponent
  },
  {
    path: 'posts', component: PostsComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'contact', component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
