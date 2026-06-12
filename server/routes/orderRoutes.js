const express = require("express");
const router = express.Router();

const Order = require("../models/Order");
const Cart = require("../models/Cart");

// Get all orders
router.get("/", async (req, res) => {

  const orders = await Order.find();

  res.json(orders);

});

// Place Order
router.post("/place", async (req, res) => {

  try {

    const cartItems = await Cart.find();

    const totalAmount = cartItems.reduce(
      (total, item) =>
        total + item.price,
      0
    );

    const order = new Order({
      items: cartItems,
      totalAmount
    });

    await order.save();

    // Clear cart after order
    await Cart.deleteMany();

    res.json({
      message: "Order Placed Successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

router.put("/:id", async (req, res) => {

  try {

    await Order.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status
      }
    );

    res.json({
      message: "Status Updated"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

module.exports = router;