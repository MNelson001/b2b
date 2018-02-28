import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './routes/home/home.component';
import { AboutComponent } from './routes/about/about.component';
import { GalleryComponent } from './routes/gallery/gallery.component';
import { CompletedHomesGalleryComponent } from './routes/gallery/galleries/completed-homes-gallery/completed-homes-gallery.component';
import { CurrentHomesGalleryComponent } from './routes/gallery/galleries/current-homes-gallery/current-homes-gallery.component';

const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'completed_homes_gallery', component: CompletedHomesGalleryComponent },
  { path: 'current_homes_gallery', component: CurrentHomesGalleryComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    CompletedHomesGalleryComponent,
    CurrentHomesGalleryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
