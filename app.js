const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.listen(8000, () => { 
    console.log("the port is listening on port 8000");
  });