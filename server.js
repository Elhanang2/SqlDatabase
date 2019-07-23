require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require("passport")
const path = require('path');
const users = require("./routes/api/users");
const app = express();

//Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '/client/build')));

//Routes
app.use("/api/users", users);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
  });

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose.connect(
        db, {
            useNewUrlParser: true
        }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));
    
const port = process.env.PORT || 7000;

//passport middleware
app.use(passport.initialize());

//passport config
require("./config/passport")(passport);



// launch our backend into a port
app.listen(port, () => console.log(`Server running on port ${port} !`))