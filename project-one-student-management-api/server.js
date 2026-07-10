// ======================================================
// Import Required Packages
// ======================================================

// Express is used to create the server.
const express = require("express");

// CORS allows frontend applications to communicate with backend.
const cors = require("cors");

// Loads environment variables from the .env file.
require("dotenv").config();

// ======================================================
// Import Custom Files
// ======================================================

// Logger middleware
const logger = require("./middleware/logger");

// Student Routes
const studentRoutes = require("./routes/studentRoutes");

// ======================================================
// Create Express App
// ======================================================

const app = express();

// ======================================================
// Global Middleware
// ======================================================

// Allows cross-origin requests.
app.use(cors());

// Parses incoming JSON data.
app.use(express.json());

// Custom Logger Middleware
app.use(logger);

// ======================================================
// Routes
// ======================================================

// Home Route
app.get("/", (req, res) => {

    res.status(200).json({
        success: true,
        message: "Student Management API is Running Successfully!"
    });

});

// Student Routes
app.use("/students", studentRoutes);

// ======================================================
// Server
// ======================================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`Server Running On Port ${PORT}`);

});
//----------------------------------------------------------------------------------------------------------------------------------------------------
//rough work
//----------------------------------------------------------------------------------------------------------------------------------------------------

// const express = require("express");
// It imports the Express package into this file.
// Why?
// Express provides everything needed to build a web server.
// Without importing it, we cannot create an Express application.
// After this line, the variable express stores the Express module.
// const app = express.json();
// const cors = require("cors");//Later, our frontend (React) will send requests to this backend.
// require("dotenv").config();//Loads all environment variables from the .env file into process.env.
// const app = express();
// Everything we build—routes, middleware, APIs—will be attached to this app object.
// Think of app as the main server object.
// app.use(cors());//Every incoming request passes through this middleware before reaching any route.
// app. use(express.json());//Without this middleware, the server cannot read JSON data sent in the request body.
// const PORT = process.env.PORT || 5000;//Reads the port number from the .env file.
// app.get("/",(req,res)=> {//Creates our first route.
    // res.status(200).json({//Sends a response back to the client.
        // success:true,//This is the JSON response body.
        // "name": "rahul",
        // "age":32,
        // "course":"mern",
        // message:"student managaement api is running succesfully"
    // });
// });

//Starts the server.

// The server begins listening for incoming requests on the specified port.
// Until app.listen() is called, the server is not running.
// app.listen(PORT,()=>{
    // console.log(`server is running on port ${PORT}`);
// });