const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const axios = require('axios');
const PORT = process.env.PORT || 2121;
const cron = require('node-cron');
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

const keySchema = {
  title: String,
  value: String,
  expiresIn: Number,
}

// data model
const Item = mongoose.model("Item", itemSchema, "materials");
const Keytest = mongoose.model("Keytest", keySchema, "key");

function getLastKey() {
  console.log("getLastKey");
  return new Promise((resolve, reject) => {
    Keytest.findOne().sort({ _id: -1 }).exec((err, lastKey) => {
      if (err) {
        reject(err);
      }
      else {
        resolve(lastKey);
      }
    });
  });
}

async function getLastKeyAndRefresh() {
  try {
    console.log("getLastKeyAndRefresh");
    const lastKey = await getLastKey();
    await refreshKeyAndAddToDb(lastKey);
  } catch (error) {
    console.error(error);
  }
}

async function addKeyToDb(result, oldTitle) {
  console.log("addKeyToDb");
  let titleAsArray = oldTitle.split('');
  let newTitle = "Key" + (Number(titleAsArray[titleAsArray.length - 1]) + 1)
  Keytest.create({ title: newTitle, value: result.access_token, expiresIn: result.expires_in }, function (err, doc) {
    if (err) return console.error(err);
    console.log(doc);
  })
}

async function refreshKeyAndAddToDb(oldToken) {
  console.log(oldToken);
  console.log("refreshKeyAndAddToDb");
  let refreshUrl = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${oldToken.value}`
  axios.get(refreshUrl)
    .then(response => {
      console.log(response.data);
      addKeyToDb(response.data, oldToken.title);
    })
    .catch(error => {
      console.log(error);
    });
}

console.log(process.env.RAILWAY_ENVIRONMENT);
if (process.env.RAILWAY_ENVIRONMENT == 'production') {
  cron.schedule('0 6 * * 6', () => {

    console.log('running a task saturday at 6am I hope');
    getLastKeyAndRefresh();
  });
}





// read route
app.get("/showMaterials", (req, res) => {
  Item.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json("Error: " + err));
});

app.get("/getPosts", (req, res) => {
  fetchInstagramPost()
    .then(data => {
      // console.log(data);
      res.json(data.data);
    })
    .catch(err => {
      console.log(err);
    });
});

async function fetchInstagramPost() {
  console.log("fetching")
  try {
    const lastKey = await getLastKey();
    const resp = await axios
      .get(`https://graph.instagram.com/v16.0/17841400385468108/media?fields=id,media_type,media_url,caption,children{media_url,thumbnail_url}&limit=${limit}&access_token=${lastKey.value}`);
    console.log(resp.data);
    return resp.data;

  } catch (err) {
    console.log('error', err)
  }
}

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

// // TEST START
// // Accessing the path module
const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

// // TEST END

app.listen(PORT, function () {
  console.log("Express is running");
  console.log(PORT);
});

const key = '';

console.log("adsf");

app.post('/', (request, response) => {
  db.collection('key').insertOne({
    brand: "zzz",
    product: "aaa"
  })
    .then(result => {
      console.log('Material Added')
      // response.redirect('/materials')
    })
    .catch(error => console.error(error))
})

app.get('/', (request, response) => {
  // Sort array by amount
  db.collection('materials').find().toArray()
    .then(data => {
      key = data
      console.log(data)
      console.log(key)
      console.log(response)
      console.log("adsf")
      // response.render('index.ejs', { info: data })
    })
    .catch(error => console.error(error))
})

app.get('/', (request, response) => {
  // Sort array by amount
  db.collection('materials').find().sort({ amount: -1 }).toArray()
    .then(data => {
      console.log(response)
      console.log(data)
    })
    .catch(error => console.error(error))
})

app.get("/", (req, res) => {
  Item.find()
    .then((items) => res.json(items))
    .then(console.log(res))
    .catch((err) => res.status(400).json("Error: " + err));
});

let limit = 8;