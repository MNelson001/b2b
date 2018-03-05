import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

// firebase imports: TODO -> Move to service
import { AngularFireModule } from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form: FormGroup;

  constructor(
    private af: AngularFirestore,
    private http: HttpClient
  ) {   }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.form = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(3)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      phone: new FormControl(),
      message: new FormControl("", Validators.required)
    });
  }
  
  onSubmit() {
    let url = 'https://us-central1-b2b-firebase-eb256.cloudfunctions.net/sendContactMessage';
    this.http.post(url, {
      name: this.form.value.name,
      email: this.form.value.email,
      phone: this.form.value.phone,
      message: this.form.value.message,
      date: Date()
    }).subscribe( res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
    this.form.reset();

  }

}
