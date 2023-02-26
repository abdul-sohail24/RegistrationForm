const express = require("express");
const app = express();
const path = require("path");
require("./db/conn");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");

//Linking app.js & index.html
app.use(express.static(static_path))

//Home Page
app.get("/", (req, res) => {
    res.send(`Hey`)
});

app.listen(port, () => {
    console.log(`Server Running at Port No ${port}`);
});