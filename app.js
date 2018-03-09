
const express = require('express')
const app = express()

//ROUTAGE DE BASE
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/', function (req, res) {
  res.send('Got a POST request');
});

app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});

//FICHIERS STATIQUES
app.use(express.static('files')); 

//

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

//exemple clignotage 
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(13);
  led.blink(800);
});



