const express = require("express");
const router = express.Router();

const Product = require("../models/Product");

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();

    res.json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {

  try {

    const product =
      await Product.findById(
        req.params.id
      );

    res.json(product);

  } catch (error) {

    res.status(500).json(error);

  }

});

router.post("/", async (req, res) => {

  try {

    const product = new Product(req.body);

    await product.save();

    res.json({
      message: "Product Added Successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

router.delete("/:id", async (req, res) => {

  try {

    await Product.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Product Deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

router.put("/:id", async (req, res) => {

  try {

    await Product.findByIdAndUpdate(
      req.params.id,
      req.body
    );

    res.json({
      message: "Product Updated"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

module.exports = router;