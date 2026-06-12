const express = require("express");
const router = express.Router();

const Order = require("../models/Order");

router.get("/", async (req, res) => {

  const orders = await Order.find();

  res.json(orders);

});

router.post("/", async (req, res) => {

  const order = new Order(req.body);

  await order.save();

  res.json({
    message: "Order Placed Successfully"
  });

});

module.exports = router;