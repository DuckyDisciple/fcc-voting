'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Poll = new Schema({
    title: String,
    desc: String,
    options: [{
        val: String,
        count: Number
    }]
});

module.exports = mongoose.model('Poll', Poll);