const mongoose = require('./config')
const Model = require('./model')

Model.remove({}, (err, data) => {
  if (err) return console.log('ERRO: ', err)

  console.log('Removeu: ', data.result)
})