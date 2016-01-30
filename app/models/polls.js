'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Poll = new Schema({
    title: String,
    desc: String,
    options: [{
        val: String
    }]
});

module.exports = mongoose.model('Poll', Poll);