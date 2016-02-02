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
        // console.log(typeof req.params.id);
        Users
            .findOneAndUpdate({'google.id':req.user.google.id},{$push: {polls: req.params.id}}, {new:true})
            .exec(function(err, data){
                if(err) throw err;
                
                
                var pollsList = data.polls;
                var lastIndex = pollsList.length;
                var lastPoll = pollsList[lastIndex-1];
                
                console.log("List: "+pollsList);
                console.log("Last Poll: "+lastPoll);
                
                if(lastPoll===undefined){
                    res.json(data);
                }else{
                    res.redirect('/vote/'+lastPoll);
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