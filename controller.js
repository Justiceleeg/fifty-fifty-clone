var app = require('./index');
const db = app.get('db')
module.exports = {

  getProductsByType: function(req, res){
    const typeId = +req.params.typeId;
    db.getProductsByType([typeId],function(err, products){
        res.status(200).json(products);
    })
  },
  getProductById: function(req, res){
    const prodId = +req.params.prodId;
    db.getProductById([prodId],function(err, product){
        res.status(200).json(product);
    })
  }

}
