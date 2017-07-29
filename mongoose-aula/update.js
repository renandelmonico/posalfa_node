const mongoose = require('./config')
const Model = require('./model')

const query = { age: 21 }
const mod = { name: 'Renan Delmonico' }

Model.update(query, mod, (err, data) => {
  if (err) return console.log('ERRO: ', err)

  console.log('Modificou: ', data)
})