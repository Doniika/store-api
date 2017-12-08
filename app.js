// ==== Using packages ====
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// ==== Getting Product Model(Schema) ====
const Product = require('./models/Product.js');

// ==== Init app ====
const app = express();

// ==== Body Parser Middleware ====
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// ==== Connection to MongoDB with Mongoose ====
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/store', {useMongoClient: true})
  .then(function() {
     console.log('Successfully connected to MongoDB!')
  }).catch(function(err) {
     console.error(err)
  });

// ==== ROUTES ====

/* INDEX */
app.get('/', function(req, res, next) {
   res.send("Welcome to Products API");
});

/* GET ALL PRODUCTS */
app.get('/products', function(req, res) {
   // Code for handling products(data) to be returned as JSON
});

/* CREATE PRODUCT */
app.post('/products', function(req, res) {
   // Code for handling create product to DB and return as JSON
});

/* GET PRODUCT */
app.get('/products/:id', function(req, res) {
   // Code for getting one specific product and return as JSON
});

/* UPDATE PRODUCT */
app.put('/products/update/:id', function(req, res) {
   // Code for updating one specific product and return as JSON
});

/* DELETE PRODUCT */
app.delete('/products/delete/:id', function(req, res) {
   // Code to delete one specific product and return message as JSON
});

// ==== Run Application ====
app.listen(3000, () => {
  console.log('Express server is running at http://127.0.0.1:3000');
});
