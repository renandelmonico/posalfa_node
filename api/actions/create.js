module.exports = ( Model ) => ( req, res ) => {
  const body = req.body

  return Model.create(body, (err, data) => {
    if (err) return console.log('ERRO: ', err)

    return res.json(data)
  })
}