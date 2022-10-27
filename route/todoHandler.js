const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const todoSchema = require("../schemas/todoSchema");
const Todo = new mongoose.model("Todo", todoSchema);

//get all the todos
router.get("/", async (req, res) => {
  try {
    const result = await Todo.find();
    res.status(200).json({
      data: result,
      message: "Get all data Success",
    });
  } catch (error) {
    res.status(500).json({
      error: "There was a server side error for inserting a data",
    });
  }
});

//get a todo by id
router.get("/:id", async (req, res) => {
  try {
    const data = await Todo.findOne({ _id: req.params.id });
    res.status(200).json({
      data: data,
      message: "Get a data successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: "There was a error getting a data.please try again later",
    });
  }
});

//post a todo
router.post("/", async (req, res) => {
  try {
    const newTodo = new Todo(req.body);
    await newTodo.save();
    res.status(200).json({
      message: "One Data inserted successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: "There was a server side error for inserting a data",
    });
  }
});
//post multiple todo
router.post("/all", async (req, res) => {
  try {
    await Todo.insertMany(req.body);
    res.status(200).json({
      message: "Many records are inserted successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: "There was a server side error for inserting too many data",
    });
  }
});
//put a todo/ update a todo
router.put("/:id", async (req, res) => {
  await Todo.updateOne(
    { _id: req.params.id },
    {
      $set: {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
      },
    }
  );
  try {
    res.status(200).json({
      message: "Data updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: "There was a server side error for updating data",
    });
  }
});
//delete  todo
router.delete("/:id", async (req, res) => {});

module.exports = router;
