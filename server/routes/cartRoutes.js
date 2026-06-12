const express = require("express");
const router = express.Router();

const Cart = require("../models/Cart");

router.get("/", async (req, res) => {
  const items = await Cart.find();
  res.json(items);
});

router.post("/", async (req, res) => {
  const item = new Cart(req.body);

  await item.save();

  res.json({
    message: "Added to Cart"
  });
});

router.delete("/:id", async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);

  res.json({
    message: "Item Removed"
  });
});
module.exports = router;