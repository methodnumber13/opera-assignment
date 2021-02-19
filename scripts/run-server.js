const express = require('express');
const path = require('path');
const app = express();

const public = path.join(__dirname, '../build');
app.use(express.static(public));
app.get('/*', function (req, res) {
  res.sendFile(path.join(public, 'index.html'));
});
app.listen(9009, () => {
  console.log(`Listening on port ${9009}`);
});
