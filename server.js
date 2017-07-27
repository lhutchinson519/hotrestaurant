// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
   var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var newReservation;

app.post("/api/new", function(req, res) {
	newReservation = req.body;
	console.log(newReservation);
	tables.push(newReservation);
	res.json(newReservation);
});

app.get("/api/", function(req, res){
	res.json(newReservation)
})

var tables = [];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reservations", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});

app.post("/reservations", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});

app.post('/tables', function(req, res) {
	res.sendFile(path.join(__dirname, "tables.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
