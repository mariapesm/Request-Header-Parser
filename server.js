// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/whoami", function (req, res) {
   const ip = req.headers['x-forwarded-for'].split(',')[0];
  const language = req.headers["accept-language"].split(',')[0];
  const paranthese = /\(([^\(\)]+)\)/g;
  const platform = req.headers['user-agent'].split(paranthese)[1];
  const info = {ip, language, platform};
  res.send(info);
});




// listen for requests :)
var listener = app.listen(process.env.PORT|| 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
