// routes/productRoutes.js
const router = require('express').Router();
const productController = require('../Controllers/ProductControllers');

router.get('/getAllProducts', productController.getAllProducts);
router.get('/getProductById/:id', productController.getProductById);
router.post('/add', productController.createProduct);
router.put('/update/:id', productController.updateProduct);
router.delete('/delete/:id', productController.deleteProduct);



module.exports = router;
