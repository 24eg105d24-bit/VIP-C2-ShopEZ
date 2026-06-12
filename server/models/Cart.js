const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  productId: String,
  name: String,
  price: Number,
  image: String,
  quantity: {
    type: Number,
    default: 1
  }
});

const removeItem = async (id) => {

  await axios.delete(
    `http://localhost:5000/cart/${id}`
  );

  setCartItems(
    cartItems.filter(
      item => item._id !== id
    )
  );
};
module.exports = mongoose.model("Cart", CartSchema);