const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost/poker';

const db = mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
})
.then(() => console.log('connected to mongoDB'))
.catch((err) => console.log('Error connecting to mongoDB'))

module.exports = {

  dbDisc: (done) => {mongoose.disconnect(done)
    .catch((err) => console.log('Error disconnecting from mongoDB', err))}
}