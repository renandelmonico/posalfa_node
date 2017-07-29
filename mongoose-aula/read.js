const mongoose = require('./config')
const Model = require('./model')

Model.find({}, (err, data) => {
  if (err) return console.log('ERRO: ', err)

  console.log('Listagem', data)
})