// BLOCK 1: Importing Dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// BLOCK 2: Configuring the Express App
dotenv.config();

const app = express();

// BLOCK 3: Setting Up Middleware
const corsOptions = {
    origin: "https://todo-lyart-nine-24.vercel.app/",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Allow credentials (like cookies) to be sent
};
app.use(cors(corsOptions));

app.use(express.json());

// BLOCK 4: Connecting to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB Connection Failed:", err);
    process.exit(1); // Exit process with failure
  }
};

// Call the database connection function
connectDB();

// BLOCK 5: Defining Routes
const tasksRoutes = require("./routes/tasks");
app.use("/api/tasks", tasksRoutes);

// BLOCK 6: Starting the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});