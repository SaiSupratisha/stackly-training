const express = require("express");
const mongoose = require("mongoose");

const User = require("./models/User");

const app = express();

const PORT = 3000;

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/stackly")
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.log("MongoDB connection failed:", error);
    });


// Get all users
app.get("/users", async (req, res) => {
    try {
        const users = await User.find();

        res.json(users);
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving users"
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});