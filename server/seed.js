require("dotenv").config();

const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose.connect(process.env.MONGO_URL)
.then(async () => {

  await Product.deleteMany();

  await Product.insertMany([
    {
      name: "iPhone 16",
      price: 79999,
      category: "Mobiles",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      description: "Latest Apple smartphone"
    },

    {
      name: "Nike Shoes",
      price: 3999,
      category: "Fashion",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      description: "Comfortable running shoes"
    },

    {
      name: "Smart Watch",
      price: 2999,
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      description: "Fitness tracking smartwatch"
    }
  ]);

  console.log("Products Added");

  process.exit();
});