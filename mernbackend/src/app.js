const express = require("express");
const app = express();
const path = require("path");
require("./db/conn");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");

//Linking app.js & index.html
app.use(express.static(static_path));

//Setting view Engine (get data from index.hbs)
app.set("view engine", "hbs");

//Home Page
app.get("/", (req, res) => {
    res.render("index");
});

app.listen(port, () => {
    console.log(`Server Running at Port No ${port}`);
});