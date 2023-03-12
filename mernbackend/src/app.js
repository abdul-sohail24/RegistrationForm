const express = require("express");
const app = express();
const path = require("path");

const hbs = require("hbs")

require("./db/conn");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

//Linking app.js & index.html
app.use(express.static(static_path));

//Setting view Engine (get data from index.hbs)
app.set("view engine", "hbs");

//Setting views (get data from views)
app.set("views", template_path);

//Setting hbs
hbs.registerPartials(partials_path)

//Home Page
app.get("/", (req, res) => {
    res.render("index");
});

app.listen(port, () => {
    console.log(`Server Running at Port No ${port}`);
});