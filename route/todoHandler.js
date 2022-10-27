const express = require("express");
const router = express.Router();

//get all the todos
router.get("/", async (req, res) => {
  res.send("hello");
});

//get a todo by id
router.get("/:id", async (req, res) => {});

//post a todo
router.post("/", async (req, res) => {});
//post multiple todo
router.post("/all", async (req, res) => {});
//put  todo
router.put("/:id", async (req, res) => {});
//delete  todo
router.delete("/:id", async (req, res) => {});

module.exports = router;
