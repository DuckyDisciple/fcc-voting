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
    name: String,
    groups: [{
        type: Schema.Types.ObjectId,
        ref: 'Group'
    }],
    points: [{
        type: Schema.Types.ObjectId,
        ref: 'Point'
    }],
    role: Number        //-1 Admin, 0 Member, 1 Leader
});

module.exports = mongoose.model('User', User);