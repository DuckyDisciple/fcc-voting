'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    google:{
        id: String,
        displayName: String,
        email: String,
        token: String
    },
    polls:[{
        type: Schema.Types.ObjectId,
        ref: 'pollId'
    }]
});

module.exports = mongoose.model('User', User);