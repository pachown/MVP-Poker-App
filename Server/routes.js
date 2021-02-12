const app = require('./index.js');

const PORT = 3333

app.listen(PORT, (err) => {
  if (err) { console.log('Error starting server'); } else {
    console.log(`Listening on port ${PORT}`);
  }
});