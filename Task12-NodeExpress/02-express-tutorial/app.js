const express = require("express");
const app = express();

const people = require("./router/people");

const auth = require("./router/auth");

//static assets
app.use(express.static("./methods-public"));

//urlencoded
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

//set the people route
app.use("/api/people", people);

//set the authentication route
app.use("/login", auth);

app.listen(5000, () => {
  console.log("Server listening at post 5000...");
});
