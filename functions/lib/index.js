"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const mj = require('node-mailjet')
    .connect(process.env.MJ_API_PK, process.env.MJ_API_SK);
exports.sendContactMessage =
    functions.firestore.document('/messages/{name}').onCreate(event => {
        console.log(event);
        return event;
    });
//# sourceMappingURL=index.js.map