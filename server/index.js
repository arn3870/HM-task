require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;
const routes = require("./routes/routes");
const cors = require("cors"); // Import cors package

const app = express();
const port = 3000;

const corsOptions = {
    origin: "*",
    methods: "GET, HEAD, PUT, POST, PATCH, DELETE",
    preFlightContinue: "false",
    optionSuccessStatus: 204,
  };
  

// Connect to MongoDB
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
 console.log(error);
});

database.once("connected", () => {
 console.log("Database Connected");
});
app.use(cors(corsOptions)); // Use cors as middleware

// Middleware to parse JSON requests
app.use(express.json());

// Enable CORS

// Use question routes
app.use("/api", routes);

// Start the server
app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});