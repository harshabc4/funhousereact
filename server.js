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
  dbConnectionStr = process.env.DB_STRING

mongoose.connect(dbConnectionStr);

// data schema
const keySchema = {
  title: String,
  value: String,
  expiresIn: Number,
  createdOn: Date,
  expiresOn: Date
}

// data model
const Key = mongoose.model("Key", keySchema, "Keys");

// addStarterKey();

// async function addStarterKey() {
//   const lastKey = await getLastKey();
//   await addKeyToDbWithoutRefresh(lastKey);
// }

// async function addKeyToDbWithoutRefresh(lastKey) {
//   console.log("addKeyToDb");
//   let oldTitle = lastKey.title;
//   let titleAsArray = oldTitle.split('');
//   let newTitle = "Key" + (Number(titleAsArray[titleAsArray.length - 1]) + 1);
//   let todaysDate = Date.now();
//   let expirationDate = new Date(todaysDate + lastKey.expiresIn * 1000);
//   Key.create({ title: newTitle, value: lastKey.value, expiresIn: lastKey.expiresIn, createdOn: todaysDate, expiresOn: expirationDate }, function (err, doc) {
//     if (err) return console.error(err);
//     console.log(doc);
//   })
//   Key.countDocuments({}, function (err, count) {
//     if (err) {
//       console.error(err);
//     } else {
//       if (count > 5) {
//         Key.findOneAndDelete({}, { sort: { created_at: 1 } }, function (err, deletedDoc) {
//           if (err) {
//             console.error(err);
//           } else {
//             console.log('Successfully deleted the oldest document:', deletedDoc);
//           }
//         });
//       }
//     }
//   })
// }

function getLastKey() {
  console.log("getLastKey");
  return new Promise((resolve, reject) => {
    Key.findOne().sort({ _id: -1 }).exec((err, lastKey) => {
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
  let todaysDate = Date.now();
  let expirationDate = new Date(todaysDate + result.expires_in * 1000);
  Key.create({ title: newTitle, value: result.access_token, expiresIn: result.expires_in, createdOn: todaysDate, expiresOn: expirationDate }, function (err, doc) {
    if (err) return console.error(err);
    console.log(doc);
  })
  Key.countDocuments({}, function (err, count) {
    if (err) {
      console.error(err);
    } else {
      if (count > 5) {
        Key.findOneAndDelete({}, { sort: { created_at: 1 } }, function (err, deletedDoc) {
          if (err) {
            console.error(err);
          } else {
            console.log('Successfully deleted the oldest document:', deletedDoc);
          }
        });
      }
    }
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

console.log("environment " + process.env.RAILWAY_ENVIRONMENT);
if (process.env.RAILWAY_ENVIRONMENT == 'production') {
  cron.schedule('0 6 * * 6', () => {

    console.log('running a task saturday at 6am I hope');
    getLastKeyAndRefresh();
  });
}





// read route
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

let limit = 8;