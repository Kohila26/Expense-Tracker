
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Import transaction routes
const transactionRoutes = require("./routes/transactionRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect transaction routes
app.use("/api/transactions", transactionRoutes);

// Test route
app.get("/", (req, res) => {
    res.send("Expense Tracker Backend Running");
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("MongoDB Error:", err));

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
