require("dotenv").config();
const mongoose = require("mongoose");
const docspring = require("./test/docspring");
const express = require("express");
const cors = require("cors");
var passport = require("./config/passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");

// const { access } = require("graceful-fs");
const app = express();
// require('./config/passport')(passport);
const PORT = process.env.PORT || 3001;

const routes = require("./routes");

//----------------------------------------- END OF IMPORTS---------------------------------------------------
mongoose.connect(

  // "mongodb+srv://{Place Your Username Here!}:{Place Your Password Here!}@cluster0-q9g9s.mongodb.net/test?retryWrites=true&w=majority",
  process.env.MONGODB_URI || "mongodb://localhost/leetdbteam",
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

// Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  // handles communication between react and server for data transfer 
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true,
  })
);
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);
// require("./passportConfig")(passport);

//----------------------------------------- END OF MIDDLEWARE---------------------------------------------------

// Routes
// app.post("/login", (req, res, next) => {
//   passport.authenticate("local", (err, user, info) => {
//     if (err) throw err;
//     if (!user) res.send("No User Exists");
//     else {
//       req.logIn(user, (err) => {
//         if (err) throw err;
//         res.send("Successfully Authenticated");
//         console.log(req.user);
//       });
//     }
//   })(req, res, next);
// });
// app.post("/register", (req, res) => {
//   User.findOne({ username: req.body.username }, async (err, doc) => {
//     if (err) throw err;
//     if (doc) res.send("User Already Exists");
//     if (!doc) {
//       const hashedPassword = await bcrypt.hash(req.body.password, 10);

// const newUser = new User({
//   username: req.body.username,
//   password: hashedPassword,
// });

// async function userCreated() {
//     await newUser.save();
//     res.send("User Created");
// };
// userCreated();

app.post("/createpdf", function (req, res) {
  // save data to database here
  docspring.generateDs11(req, res);
});

//----------------------------------------- END OF ROUTES---------------------------------------------------
//Start Server
// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
