const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://pachown:2QZ8J6jJoGtj5NOA@cluster0.sr3q8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

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
