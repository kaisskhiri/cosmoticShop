// controllers/productController.js
const { ObjectId } = require('mongodb');
const Product = require('../models/ProductSchema');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createProduct = async (req, res) => {
  const product = new Product({
    title: req.body.title,
    price: req.body.price,
    image: req.body.image,
    family_product:req.body.family_product,
    inventory:req.body.inventory,
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    product.title = req.body.title || product.title;
    product.price = req.body.price || product.price;
    product.image = req.body.image || product.image;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const result = await Product.deleteOne({ _id: productId });
    res.status(200).json({ message: `Product with id ${productId} deleted successfully` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to delete product' });
  }
};


exports.sortProduct = async (req, res) => {
  try {
    const { sortBy, sortOrder } = req.query;
    let sortObj = {};

    if (sortBy === 'title') {
      sortObj = { title: sortOrder === 'asc' ? 1 : -1 };
    } else if (sortBy === 'price') {
      sortObj = { price: sortOrder === 'asc' ? 1 : -1 };
    } else if (sortBy === 'family_product') {
      sortObj = { family_product: sortOrder === 'asc' ? 1 : -1 };
    } else {
      sortObj = { createdAt: -1 };
    }

    const products = await Product.find().sort(sortObj);
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error.message });
  }
};



// In ProductController.js


exports.getProducts = async (req, res) => {
  try {
    // Get the sort query parameter from the request URL
    const { sort } = req.query;

    let products;

    // Check if the sort parameter is specified and apply sorting accordingly
    if (sort === 'price-asc') {
      products = await Product.find().sort({ price: 'asc' });
    } else if (sort === 'price-desc') {
      products = await Product.find().sort({ price: 'desc' });
    } else if (sort === 'title-asc') {
      products = await Product.find().sort({ title: 'asc' });
    } else if (sort === 'title-desc') {
      products = await Product.find().sort({ title: 'desc' });
    } else if (sort === 'family-asc') {
      products = await Product.find().sort({ family_product: 'asc' });
    } else if (sort === 'family-desc') {
      products = await Product.find().sort({ family_product: 'desc' });
    } else {
      products = await Product.find();
    }

    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};
