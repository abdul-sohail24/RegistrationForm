const express = require("express");
const app = express();
require("./db/conn");

const port = process.env.PORT || 3000;

//Home Page
app.get("/", (req, res) => {
    res.send(`Hey`)
});

app.listen(port, () => {
    console.log(`Server Running at Port No ${port}`);
});