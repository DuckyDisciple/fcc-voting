'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    github:{
        id: String,
        displayName: String,
        username: String,
        publicRepos: Number
    },
    google:{
        id: String,
        displayName: String,
        email: String,
        token: String
    },
    numClicks:{
        clicks: Number
    }
});

module.exports = mongoose.model('User', User);