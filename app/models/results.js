'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Result = new Schema({
    poll: {
        type: Schema.Types.ObjectId,
        ref: 'Poll'
    },
    vote: Number
});

module.exports = mongoose.model('Result', Result);