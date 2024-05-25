const express = require("express");
const path = require("path");
const collection = require("../../config");
const bcrypt = require("bcrypt");

const app = express();
// convert data into json format
app.use(express.json());
// Static file
app.use(express.static(path.join(__dirname, "../public")));

app.use(express.urlencoded({ extended: false }));
//use EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../templates"));

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

// Register User
app.post("/signup", async (req, res) => {
  console.log(req.body);
  const data = {
    name: req.body.email,
    password: req.body.password,
    konfirmasi_password: req.body.confirm_password,
  };

  // Check if the username already exists in the database
  const existingUser = await collection.findOne({ name: data.name });

  if (existingUser) {
    res.send("User already exists. Please choose a different username.");
  } else {
    // Hash the password using bcrypt
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    // Number of salt rounds for bcrypt
    const hashedPassword = await bcrypt.hashSync(data.password, salt);

    data.password = hashedPassword; // Replace the original password with the hashed one
    data.konfirmasi_password = hashedPassword;

    const userdata = await collection.create(data);
    console.log(userdata);
  }

  const backURL = req.header("Referer") || "/";
  res.redirect(backURL);
});

// Login user
app.post("/login", async (req, res) => {
  try {
    const check = await collection.findOne({ name: req.body.email });
    if (!check) {
      res.send("User name cannot found");
    }
    // Compare the hashed password from the database with the plaintext password
    const isPasswordMatch = bcrypt.compareSync(req.body.password, check.password);
    if (!isPasswordMatch) {
      res.send("wrong Password");
    } else {
      res.render("home");
    }
  } catch {
    res.send("wrong Details");
  }
});

// Define Port for Application
const port = 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
