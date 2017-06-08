var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var database = require('./config.js')
//Need to enter username and password for your database
const port = 4201;
var connString = database ;

var app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());

var db = massive.connectSync({connectionString : connString});
//create tables
db.type_create_seed(()=>{});
db.products_create_seed(()=>{});
app.set('db',db);
var controller = require('./controller');

app.get('/api/collections/:typeId', function(req,res){
  controller.getProductsByType(req,res);
});

app.get('/api/products/random', function(req, res){
  controller.getRandomProducts(req,res)
});

app.get('/api/products/:prodId', function(req, res){
  controller.getProductById(req,res)
});

app.listen(port, function(){
  console.log("Successfully listening on :",port)
})
