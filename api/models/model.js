const mongoose = require('./../config')

const _schema = {
  name: String,
  age: Number
}
const schema = new mongoose.Schema(_schema)

module.exports = mongoose.model('Pokemon', schema)