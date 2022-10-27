const express = require("express");
const mongoose = require("mongoose");
const todoHandler = require("./route/todoHandler");
const PORT = 3000;
const app = express();
app.use(express.json());
//database connection with mongoose
mongoose
  .connect("mongodb://localhost/todos")
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

//application route
app.use("/todo", todoHandler);
//default errorhandler
const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
};

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
