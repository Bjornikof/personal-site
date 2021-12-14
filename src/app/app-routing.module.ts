import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./main/components/home/home.component";
import {ProjectsComponent} from "./main/components/projects/projects.component";
import {GalleryComponent} from "./main/components/gallery/gallery.component";

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
