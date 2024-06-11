const express = require("express");
require('dotenv').config()

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// route
const route = require("./src/route");

app.use(route)

app.listen(3000, () => {
  console.log("listening on port 3000");
  
});
