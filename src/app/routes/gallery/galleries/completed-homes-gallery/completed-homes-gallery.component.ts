import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completed-homes-gallery',
  templateUrl: './completed-homes-gallery.component.html',
  styleUrls: ['./completed-homes-gallery.component.css']
})
export class CompletedHomesGalleryComponent implements OnInit {

  public images: Array<string> = [
    'https://storage.googleapis.com/budget2beautiful-147f8.appspot.com/exterior2.jpg',
    'https://storage.googleapis.com/budget2beautiful-147f8.appspot.com/exterior3.jpg',
    'https://storage.googleapis.com/budget2beautiful-147f8.appspot.com/exterior4.jpg',
    'https://storage.googleapis.com/budget2beautiful-147f8.appspot.com/Fireplace.jpg',
    'https://storage.googleapis.com/budget2beautiful-147f8.appspot.com/Kitchen%202.jpg',
    'https://storage.googleapis.com/budget2beautiful-147f8.appspot.com/Kitchen.jpg',
    'https://storage.googleapis.com/budget2beautiful-147f8.appspot.com/Kitchen3.jpg',
    'https://storage.googleapis.com/budget2beautiful-147f8.appspot.com/Master%20Bath.jpg',
    'https://storage.googleapis.com/budget2beautiful-147f8.appspot.com/mercier1.jpg'
  ]

  popup_link: string;

  constructor() { }

  ngOnInit() {
  }

  assignUrl(id){
    this.popup_link = id;
  }

}
