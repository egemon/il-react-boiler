const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

// app.get('/api/v1/hello', (req, res) => {
//   res.send('Hello World!')
// });
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});


app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});