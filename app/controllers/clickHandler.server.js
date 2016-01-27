"use strict";

var Users = require("../models/users.js");

function ClickHandler(){
    
    this.getClicks = function(req, res){
        Users
            .findOne({'github.id':req.user.github.id}, {_id:0})
            .exec(function(err, data){
               if(err) throw err;
               
               res.json(data.numClicks);
            });
    };
    
    this.addClick = function(req, res) {
        Users
            .findOneAndUpdate({'github.id':req.user.github.id},{$inc:{'numClicks.clicks':1}})
            .exec(function(err, data){
                if(err) throw err;
                
                res.json(data.numClicks);
            });
    };
    
    this.resetClicks = function(req, res){
        Users
            .findOneAndUpdate({'github.id':req.user.github.id},{$set:{'numClicks.clicks':0}})
            .exec(function(err, data) {
                if(err) throw err;
                
                res.json(data.numClicks);
            });
    };
}

module.exports = ClickHandler;