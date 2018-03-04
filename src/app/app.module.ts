import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

// Firebase Imports
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './routes/home/home.component';
import { AboutComponent } from './routes/about/about.component';
import { GalleryComponent } from './routes/gallery/gallery.component';
import { CompletedHomesGalleryComponent } from './routes/gallery/galleries/completed-homes-gallery/completed-homes-gallery.component';
import { CurrentHomesGalleryComponent } from './routes/gallery/galleries/current-homes-gallery/current-homes-gallery.component';
import { ServicesComponent } from './routes/services/services.component';

const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'completed_homes_gallery', component: CompletedHomesGalleryComponent },
  { path: 'current_homes_gallery', component: CurrentHomesGalleryComponent },
  { path: 'services', component: ServicesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    CompletedHomesGalleryComponent,
    CurrentHomesGalleryComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    FormBuilder,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
