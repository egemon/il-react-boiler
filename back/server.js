const path = require('path');
const express = require('express');

const app = express();
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

const messages = [
  {
    id: '1',
    author: 'Illia',
    type: 'message',
    text: 'My first message',
  },
  {
    id: '2',
    author: 'Illia Lukianov',
    type: 'message',
    text: 'My second message',
  },
  {
    id: '3',
    author: 'Olha',
    type: 'message',
    text: 'My third message',
  },
];

app.get('/api/v1/messages', (req, res) => {
  console.log('GET /api/v1/messages');

  res.send({
    data: messages,
  });
});

app.get('/api/v1/messages/:id', (req, res) => {
  console.log('GET /api/v1/messages/id', req.params.id);

  res.send({
    data: messages.find(message => message.id === req.params.id),
  });
});

app.get('/*', (req, res) => {
  console.log('html request');
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
