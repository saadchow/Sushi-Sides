const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

// Cart flow
router.get('/cart', ordersCtrl.cart);
router.post('/cart/items/:id', ordersCtrl.addToCart);
router.put('/cart/qty', ordersCtrl.setItemQtyInCart);
router.post('/cart/checkout', ordersCtrl.checkout);

// History (NEW)
router.get('/', ordersCtrl.index);
router.get('/:id', ordersCtrl.show);

module.exports = router;
