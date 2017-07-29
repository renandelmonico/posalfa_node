const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/pos-alfa-2017';

mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connection open to ${dbURI}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('disconnected');
});

mongoose.connection.on('open', () => {
  console.log('open');
});

mongoose.connection.on('error', () => {
  console.log('error');
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose disconnected');
    process.exit(0);
  });
});

module.exports = mongoose