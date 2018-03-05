const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const gNode = require('gmail-node');

// TODO: Create this in a firebase function to generate mediaLinks to be used by front end gallery
const Storage = require('@google-cloud/storage');

const projID = 'b2b-firebase-eb256'

const storage = new Storage({
  projectId: projID
});

storage.bucket('b2b-firebase-eb256.appspot.com').getFiles().then(results => {
  const files = results[0];
  files.forEach(file => {
    console.log(file.metadata.selfLink);
  })
})

const app = express()


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

