"use strict";

var Users = require("../models/users.js");

function UserHandler(){
    
    this.getPolls = function(req, res){
        Users
            .findOne({'google.id':req.user.google.id}, {_id:0})
            .exec(function(err, data){
              if(err) throw err;
              
              var fullName = req.user.google.displayName;
              var firstName = fullName.substring(0,fullName.lastIndexOf(' '));
               
              res.render('polls',{displayName: firstName, polls: data.polls});
            });
    };
    
    this.addPoll = function(req, res) {
        // console.log(typeof req.params.id);
        Users
            .findOneAndUpdate(
                {'google.id':req.user.google.id},
                {$push: {polls: {id: req.params.id, name: req.params.name}}},
                {new:true})
            .exec(function(err, data){
                if(err) throw err;
                
                
                var pollsList = data.polls;
                var lastIndex = pollsList.length;
                var lastPoll = pollsList[lastIndex-1];
                
                // console.log("List: "+pollsList);
                // console.log("Last Poll: "+lastPoll);
                
                if(lastPoll===undefined){
                    res.json(data);
                }else{
                    res.redirect('/vote/'+lastPoll.id);
                }
            });
    };
    
    this.deletePoll = function(req, res){
        // console.log("Receiving: "+req.params.id);
        Users
            .findOneAndUpdate({'google.id':req.user.google.id},{$pull: {polls: {id: req.params.id}}})
            .exec(function(err, data) {
                if(err) throw err;
                
                res.redirect("/polls");
            });
    };
}

module.exports = UserHandler;