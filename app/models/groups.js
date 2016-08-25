'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Group = new Schema({
    title: String,
    desc: String,
    dates: String,
    time: String,
    leaders: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    members: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
});

module.exports = mongoose.model('Group', Group);