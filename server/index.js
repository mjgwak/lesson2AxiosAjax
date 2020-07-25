const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 1128;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

const personData = [{
  name: 'Minji',
  role: 'Shep',
  pay: '$5 Million'
}];

app.get('/person', function(req, res) {
  res.send(personData)
});

app.post('/person', function(req, res) {
  personData.push(req.body)
  res.send(personData)
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});