/*jshint esversion: 6 */

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

var items = ["Item 1", "Item 2"];

app.get("/", (req, res) => {
  res.render("list", { day: today(), items: items });
});

app.post("/", function (req, res) {
  items.push(req.body.newItem);
  res.redirect("/");
});

app.listen(process.env.PORT || port, function () {
  console.log(`Example app listening at http://localhost:${port}`);
});

function dayOfWeek() {
  const today = new Date();
  const currentDay = today.getDay();
  switch (currentDay) {
    case 0:
      return "Sunday";
      break;
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tuesday";
      break;
    case 3:
      return "Wednesday";
      break;
    case 4:
      return "Thursday";
      break;
    case 5:
      return "Friday";
      break;
    case 6:
      return "Saturday";
      break;
    default:
      console.log("Error currentDay is: " + currentDay);
      break;
  }
}

function today() {
  const day = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  return day.toLocaleDateString("en-us", options);
}
