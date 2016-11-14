var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var index = require('./routes/index');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', index);
app.use(express.static('server/public'));

app.get('/jokes', function(req, res) {
  res.send(jokes);
  console.log("data send");
});

app.post('/jokes', function(req, res) {
  jokes.push(req.body);
  console.log(jokes);
  console.log("Received new joke from client, pushing to array: ", req.body);
  res.sendStatus(200);
});

app.listen(3000);
console.log("Listening on port: 3000");


// initial jokes provided by the client
var jokes = [
  {
    whoseJoke: "Huck",
    jokeQuestion: "What's the difference between roast beef and pea soup?",
    punchLine: "Anyone can roast beef."
  },
  {
    whoseJoke: "Kris",
    jokeQuestion: "How many software engineers does it take to change a lightbulb?",
    punchLine: "None! That's a hardware problem!"
  },
  {
    whoseJoke: "Luke",
    jokeQuestion: "Friends are like snow flakes...",
    punchLine: "If you pee on them they disappear."
  }
];
