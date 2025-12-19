const express = require("express");
const cors = require("cors");
require("dotenv").config();
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

const connectDB = require("./db");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors({
    origin:"https://13.62.229.96:4000"
    Credential :true
}));
app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

connectDB();

app.use("/api/auth", authRoutes);

module.exports = app;
