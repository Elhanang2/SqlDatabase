require('dotenv').config({path: __dirname + "../.env"});
//?const mongoose = require("mongoose");


module.exports = {
    mongoURI: `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds349247.mlab.com:49247/samidata`,
    secretOrKey:  `${process.env.SECRET_KEY}`
};