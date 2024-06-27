require('dotenv').config(); // Make sure to install the dotenv package using npm or yarn
const express = require('express');
const app = express();
const https = require('https');
var fs = require('fs');
const port = 80;
let dev = true;

var hostname = "113.30.188.96";
var redirectUri = `https://${this.hostname}:${this.port}/auth`;
var options = {
    //Certificate is saved at: /etc/letsencrypt/live/113-30-188-96.cloud-xip.com/fullchain.pem
    // Key is saved at:         /etc/letsencrypt/live/113-30-188-96.cloud-xip.com/privkey.pem
    key: fs.readFileSync('/etc/letsencrypt/live/113-30-188-96.cloud-xip.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/113-30-188-96.cloud-xip.com/fullchain.pem')
}

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
    https.createServer(options, this.app).listen(port);
}


