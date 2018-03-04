const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const gNode = require('gmail-node');

const app = express()


const cs = {
  installed:
    {client_id:"459961063352-eftqjmc4r9l48dgatnem41unc2jkn19q.apps.googleusercontent.com",
    project_id:"b2b-firebase-eb256",
    auth_uri:"https://accounts.google.com/o/oauth2/auth",
    token_uri:"https://accounts.google.com/o/oauth2/token",
    auth_provider_x509_cert_url:"https://www.googleapis.com/oauth2/v1/certs",
    client_secret:"3mROTG3oUytjd3n707LXQWuL",
    redirect_uris: [
      "urn:ietf:wg:oauth:2.0:oob",
      "http://localhost"
    ]}
}

gNode.init(cs, './token.json', (err, suc) => {
  if(err) return err;
  console.log(suc);
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || 3000;
app.set("port", port);

const server = http.createServer(app);

server.listen(port);

