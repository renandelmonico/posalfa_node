const mongoose = require('mongoose');
//ALTERAR, POIS FIZ USANDO O DOCKER
const dbURI = 'mongodb://192.168.99.100:32768/posalfa';

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