require("dotenv").config();
const mongoose = require("mongoose");
const docspring = require("./routes/api/docspring");
const express = require("express");
const cors = require("cors");
var passport = require("passport");
const cookieParser = require("cookie-parser");
const routes = require("./routes");
const User = require('./models/user');
const app = express();
const PORT = process.env.PORT || 3001;

//----------------------------------------- END OF IMPORTS---------------------------------------------------
mongoose.connect(

  // "mongodb+srv://{Place Your Username Here!}:{Place Your Password Here!}@cluster0-q9g9s.mongodb.net/test?retryWrites=true&w=majority",
  process.env.MONGODB_URI || "mongodb+srv://agorton:#MDBici1111@cluster0.bpdei.mongodb.net/leetdbteam?retryWrites=true&w=majority",

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
app.use(
  // handles communication between react and server for data transfer 
  cors({
    origin: "https://aliciagorton.github.io", // <-- location of the react app were connecting to
    credentials: true,
  })
);

app.use(cookieParser("secretcode"));

app.get("/test", (req, res) => {
  console.log("you ")
  res.send("hI, Im on the font end now!")
})

app.post("/createpdf", function (req, res) {
  // save data to database here
  docspring.generateDs11(req, res);
});
//----------------------------------------- END OF ROUTES---------------------------------------------------
// Routes needs to go before middleware cause middleware has a catchall.
// Middleware



app.use(routes);

app.use(passport.initialize()); 
app.use(passport.session());
passport.serializeUser(User.serializeUser()); 
passport.deserializeUser(User.deserializeUser());

const LocalStrategy = require('passport-local').Strategy; 
passport.use(new LocalStrategy(User.authenticate()));

//----------------------------------------- END OF MIDDLEWARE---------------------------------------------------
//Start Server
// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
