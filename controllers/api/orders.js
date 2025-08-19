const Order = require('../../models/order');

module.exports = {
  cart,
  addToCart,
  setItemQtyInCart,
  checkout,
  index,    // NEW
  show      // NEW
};

async function cart(req, res) {
  const cart = await Order.getCart(req.user._id);
  res.json(cart);
}
async function addToCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.addItemToCart(req.params.id);
  res.json(cart);
}
async function setItemQtyInCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.setItemQty(req.body.itemId, req.body.newQty);
  res.json(cart);
}
async function checkout(req, res) {
  const cart = await Order.getCart(req.user._id);
  cart.isPaid = true;
  await cart.save();
  res.json(cart);
}

// ===== Order history =====
async function index(req, res) {
  const orders = await Order
    .find({ user: req.user._id, isPaid: true })
    .sort('-updatedAt');
  res.json(orders);
}
async function show(req, res) {
  const order = await Order.findOne({
    _id: req.params.id,
    user: req.user._id,
    isPaid: true
  });
  if (!order) return res.status(404).json({ error: 'Not found' });
  res.json(order);
}
