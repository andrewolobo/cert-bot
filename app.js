require('dotenv').config(); // Make sure to install the dotenv package using npm or yarn
const express = require('express');
const app = express();
const port = 80;
let dev = false;

// Use environment variables for sensitive data
const key = process.env.ACME_KEY;
const acmePath = `/.well-known/acme-challenge/${process.env.ACME_PATH}`;

app.get(acmePath, (req, res) => {
    res.send(key);
});

app.get("/", (req, res) => {
    res.send("certbot-app-running");
});


if (dev) {
    app.listen(port, () => {
        console.log("listening on port", port);
    });

} else {
    https.createServer(this.options, this.app).listen(3000);
}


