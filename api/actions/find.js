module.exports = ( Model ) => ( req, res, query = {} ) =>
  Model.find( query )
  .then( ( data ) => res.json( data ) )
  .catch( ( err ) => console.log('ERRO: ', err) )