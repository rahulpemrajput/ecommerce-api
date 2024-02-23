// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Add a product
router.post('/create', productController.createProduct);

// List all products
router.get('/', productController.listProducts);

// Delete a product
router.delete('/:id', productController.deleteProduct);

// Update product quantity
router.post('/:id/update_quantity', productController.updateProductQuantity);

module.exports = router;
