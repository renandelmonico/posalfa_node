module.exports = ( Model ) => ( req, res ) => {
  const query = {
    _id: req.params.id
  }

  return Model.remove(query, (err, data) => {
    if (err) return console.log('ERRO: ', err)

    return res.json(data)
  })
}