"use strict";

var Users = require("../models/users.js");

function UserHandler(){
    
    this.getPolls = function(req, res){
        Users
            .findOne({'google.id':req.user.google.id}, {_id:0})
            .exec(function(err, data){
              if(err) throw err;
               
              res.json(data.polls);
            });
    };
    
    this.addPoll = function(req, res) {
        Users
            .findOneAndUpdate({'google.id':req.user.google.id},{$push: {polls: {pollId: req.params.id}}})
            .exec(function(err, data){
                if(err) throw err;
                
                
                var pollsList = data.polls;
                var lastIndex = pollsList.length;
                var lastPoll = pollsList[lastIndex-1];
                
                if(lastPoll===undefined){
                    res.json(data);
                }else{
                    res.redirect('/vote/'+lastPoll.pollId);
                }
            });
    };
    
    this.deletePoll = function(req, res){
        Users
            .findOneAndUpdate({'github.id':req.user.github.id},{$set:{'numClicks.clicks':0}})
            .exec(function(err, data) {
                if(err) throw err;
                
                res.json(data.numClicks);
            });
    };
}

module.exports = UserHandler;