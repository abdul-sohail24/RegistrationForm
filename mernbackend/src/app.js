const express = require("express");
const app = express();
const path = require("path");

const hbs = require("hbs")

require("./db/conn");
const Register = require("./models/registers")

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended: false}));

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

app.get("/register", (req, res) => {
    res.render("register");
})

//Create a New User in DB
app.post("/register", async (req, res) => {
    try {
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;

        if(password === cpassword) {
            const registerEmployee = new Register({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                gender: req.body.gender,
                phone: req.body.phone,
                age: req.body.age,
                password: req.body.password,
                confirmpassword: req.body.password
            })
            console.log("the success part" + registerEmployee);

            const registered = await registerEmployee.save();
            res.status(201).render("index");

            console.log(registered);

        } else {
            res.send("password aren't matching");
        }
    }
    catch(e) {
        console.log("Error");
        res.status(400).send(e);
    }
})

app.listen(port, () => {
    console.log(`Server Running at Port No ${port}`);
});