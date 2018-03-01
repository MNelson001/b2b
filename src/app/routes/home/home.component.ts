import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private fb: FormBuilder,
    private af: AngularFirestore
  ) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm(){
    this.form = this.fb.group({
      name: [ '', Validators.required ],
      email: [ '', Validators.required ],
      phone: [ '' ],
      message: [ '' ]
    });
  }

  onSubmit() {
    const { name, email, phone, message } = this.form.value;
    const date = Date();
    const html = `
      <div>From: ${name}</div>
      <div>Email: <a href="mailto:${email}">$[email]]</a></div>
      <div>Phone Number: 
      <div>Date: ${date}</div>
      <div>Message: ${message}</div>
    `;
    let formRequest = { name, email, phone, message, date, html };
    
    this.af.collection('/messages').add(formRequest);
    this.form.reset();
  }

}
