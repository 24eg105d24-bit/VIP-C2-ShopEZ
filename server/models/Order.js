const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  items: Array,
  totalAmount: Number,
   status: {
    type: String,
    default: "Placed"
  },
  orderDate: {
    type: Date,
    default: Date.now
  }
});

module.exports =
mongoose.model("Order", OrderSchema);