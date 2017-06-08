var app = require('./index');
const db = app.get('db')
module.exports = {

  getProductsByType: function(req, res){
    const typeId = +req.params.typeId;

    switch (typeId) {
      case 12:
        db.getAllBottles(function(err, products){
            return res.status(200).json(products);
        })
        break;
      case 13:
        db.getAllGrowlers(function(err, products){
            return res.status(200).json(products);
        })
        break;
      case 14:
        db.getAllAccessories(function(err, products){
            return res.status(200).json(products);
        })
        break;
      case 15:
          db.getAllDoubleWall(function(err, products){
              return res.status(200).json(products);
          })
        break;
      default:
        db.getProductsByType([typeId],function(err, products){
            return res.status(200).json(products);
        })
    }
  },
  getProductById: function(req, res){
    const prodId = +req.params.prodId;
    db.getProductById([prodId],function(err, product){
        return res.status(200).json(product);
    })
  },
  getRandomProducts: function(req, res){
    db.getRandomProducts(function(err, products){
      return res.status(200).json(products)
    })
  }

}
