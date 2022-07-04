const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');

require("dotenv").config();

//Express server
const app = express();
const port = process.env.PORT || 5000;

//Middleware.  All app.use will be middleware
app.use(cors());
app.use(express.json()); //parse into json file

//connect to mongoDB
const uri = "mongodb+srv://Brian:G0ing%40OR503@cluster0.9s5ij.mongodb.net/paycheck?retryWrites=true&w=majority";
const options = {
  autoIndex: false, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4 // Use IPv4, skip trying IPv6
};
mongoose.connect(uri,options);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log(`MongoDB database connection established successfully.`);
});

const StubRouter = require("./Routes/stubs");
app.use("/stubs", StubRouter);
//Starts server and listening on port.
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
