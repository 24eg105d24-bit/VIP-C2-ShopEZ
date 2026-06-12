require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes"); 
const cartRoutes = require("./routes/cartRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const reviewRoutes =
require("./routes/reviewRoutes");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/cart", cartRoutes);
app.use("/reviews", reviewRoutes);
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("Mongo Error:", err));

app.get("/", (req, res) => {
  res.send("ShopEZ Backend Running");
});

app.listen(process.env.PORT, () => {
  console.log(`Server Running on Port ${process.env.PORT}`);
}); 