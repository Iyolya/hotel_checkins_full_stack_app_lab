// Node package imports
const parser = require('express');
const cors = require('cors');
const express = require('express');
const MongoClient = require('mongodb').MongoClient;

// Routers
const createRouter = require('./helpers/create_router.js');

const app = express();

app.use(cors());
app.use(parser.json());

//establish connection to database
MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    console.log(err);
  }

  const db = client.db('hotel_db');
  const bookings = db.collection('bookings');
  const bookingsRouter = createRouter(bookings);
  app.use('/api/bookings', bookingsRouter);

  app.listen(3000, () => {
    console.log(`app listening on port ${this.address().port}`);
  });
});
