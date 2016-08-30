'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Point = new Schema({
    desc: String,
    type: Number,
    givenBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    givenTo: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    group: {
        type: Schema.Types.ObjectId,
        ref: 'Group'
    },
    value: Number
});

module.exports = mongoose.model('Point', Point);