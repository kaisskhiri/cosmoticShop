/* // models/Product.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
},{timestamps:true});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
 */

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  family_product: {
    type: String,
    required: true,
  },
  inventory: {
    type: Number,
    required: true,
    default: 0,
    
  },

},{timestamps:true});

// Check if inventory is below notification threshold and add a message to the product
productSchema.post('save', async function (doc, next) {
  if (doc.inventory < 10) {
    // Trigger a notification or alert here
    console.log(`Low inventory alert: ${doc.title} only has ${doc.inventory} left!`);
  }
  next();
});
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
