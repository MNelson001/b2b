import * as functions from 'firebase-functions';
import { encode } from 'punycode';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const express = require('express');
const cors = require('cors')({ origin: "*" });
const gNode = require('gmail-node');
const app = express()


const st = {
  access_token: "ya29.GltyBbwklT6aosi_ke8JwDPBkjdJkpHaYzXecXxk0otmwB35EvJR1xTlNvUCxCYnERiv-Kue3-n8evWbF_k-7auFw31OwGQTjWui8u8G-imp3-QgnUSwBKtPAl4g",
  refresh_token: "1/b53BV28huICUcva_XFWByUv8qFfMOoDmrPJuuLQgpno",
  token_type: "Bearer",
  expiry_date: 1520019374269
}

const cs = {
  installed:
    {
      client_id: "459961063352-eftqjmc4r9l48dgatnem41unc2jkn19q.apps.googleusercontent.com",
      project_id: "b2b-firebase-eb256",
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://accounts.google.com/o/oauth2/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_secret: "3mROTG3oUytjd3n707LXQWuL",
      redirect_uris: [
        "urn:ietf:wg:oauth:2.0:oob",
        "http://localhost"
      ]
    }
}

exports.sendContactMessage =
  functions.https.onRequest((req, res) => {
    cors(req, res, () => {
    
    const mailOpts = {
      to: "Budget2Beautiful@gmail.com",
      subject: `You have a new message from ${req.body.name}`,
      message: `<div>From: ${req.body.name}</div>
                <div>Email:  <a href=${req.body.email}>${req.body.email}</a></div>
                <div>Phone: ${req.body.phone} </div>
                <div>Sent at: ${req.body.date}'</div>
                <div>Message: ${req.body.message} </div>`
    }
    
    gNode.sendHTMLWithToken(mailOpts, cs, st, (err, success) => {
        if (err) {
          console.log(`There was an error: ${err}`);
          res.status(500).send('Error sending email.');
        }
        if (success) {
          console.log("Email has been sent successfully.");
          res.status(200).send(req.body);
        }
      })
    });

  });