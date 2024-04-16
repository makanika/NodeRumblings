const express = require("express");

// Run express as a function
const app = express();

// Adding a middleware function in express
app.use((req, res, next) => {
  console.log("First Express Expression");
  next(); // Goes to the next middleware
});

app.use((req, res, next) => {
  console.log("The Next Middleware from my express application");
  res.send("<h1>Greetings from my first express lesson</h1>");
});

app.listen(3000);
