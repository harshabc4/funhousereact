const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = 2121;
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// connect to mongobd
let db,
  dbConnectionStr = process.env.DB_STRING,
  dbName = "logitrestructure";

mongoose.connect(dbConnectionStr);

// data schema
const itemSchema = {
  title: String,
  description: String,
};

// data model
const Item = mongoose.model("Item", itemSchema, "materials");

// read route
app.get("/showMaterials", (req, res) => {
  Item.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json("Error: " + err));
});

// create route
app.post("/addMaterial", (req, res) => {
  const newItem = new Item({
    title: req.body.title,
    description: req.body.description,
  });
  newItem
    .save()
    .then((item) => console.log(item))
    .catch((err) => res.status(400).json("Error " + err));
});

// delete route
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;

  Item.findByIdAndDelete({ _id: id }, (req, res, err) => {
    if (!err) {
      console.log("Item deleted");
    } else {
      console.log(err);
    }
  });
});

// update route
app.put("/put/:id", (req, res) => {
  const updatedItem = {
    title: req.body.title,
    description: req.body.description,
  };
  Item.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: updatedItem },
    (req, res, err) => {
      if (!err) {
        console.log("Item updated");
      } else {
        console.log(err);
      }
    }
  );
});

app.listen(port, function () {
  console.log("Express is running");
});
