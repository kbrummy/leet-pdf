require("dotenv").config();
const mongoose = require("mongoose");
const docspring = require("./routes/api/docspring");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const routes = require("./routes");
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3001;

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected.');
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handles communication between react and server for data transfer
app.use(cors({origin: process.env.SERVER_URL, credentials: true}));

app.use(cookieParser(process.env.SECRET));

// ------------------------------------------- ROUTES -----------------------------------------------------

// path to static assets
app.use(express.static(path.join(__dirname, 'client', 'build')))

// homepage
app.get("/", (req, res) => {
  res.sendFile('index.html');
})

// save data to database here
app.post("/createpdf", function (req, res) {
  docspring.generateDs11(req, res);
});

// healthcheck
app.get("/test", (req, res) => {
  res.send("Test Succeeded.")
})

// ----------------------------------------- END OF ROUTES-----------------------------------------------------

// ------------------------------------------- MIDDLEWARE -----------------------------------------------------

app.use(passport.initialize());
app.use(passport.session());

// ---------------------------------------- END OF MIDDLEWARE -------------------------------------------------

// --------------------------------------- FIRE UP THE SERVER ------------------------------------------------

app.use(routes);

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT: ${PORT}!`);
});
