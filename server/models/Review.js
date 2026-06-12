const mongoose = require("mongoose");

const reviewSchema =
  new mongoose.Schema({

    productId: String,

    rating: Number,

    comment: String

  });

module.exports =
  mongoose.model(
    "Review",
    reviewSchema
  );