const express = require("express");
const router = express.Router();

const Review =
  require("../models/Review");

router.get("/:productId",
  async (req, res) => {

    const reviews =
      await Review.find({
        productId:
          req.params.productId
      });

    res.json(reviews);

});

router.post("/",
  async (req, res) => {

    const review =
      new Review(req.body);

    await review.save();

    res.json({
      message:
        "Review Added"
    });

});

module.exports = router;