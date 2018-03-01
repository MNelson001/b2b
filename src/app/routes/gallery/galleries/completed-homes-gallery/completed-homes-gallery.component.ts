import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completed-homes-gallery',
  templateUrl: './completed-homes-gallery.component.html',
  styleUrls: ['./completed-homes-gallery.component.css']
})
export class CompletedHomesGalleryComponent implements OnInit {

  public images: Array<string> = [

  ];

  popup_link: string;

  constructor() {

  }

  ngOnInit() {
  }

  assignUrl(id){
    this.popup_link = id;
  };

}
