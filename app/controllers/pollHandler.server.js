"use strict";

var Poll = require('../models/polls.js');

function PollHandler(){
    this.getPoll = function(req, res){
        Poll
            .findOne({'_id':req.params.id})
            .exec(function(err, data){
                if(err) throw err;
                
                res.json(data);
            });
    };
    
    this.savePoll = function(req, res){
        var tempTitle = req.body.title;
        var tempDesc = req.body.desc;
        var tempOptions = [];
        var formOptions = req.body.getElementsByClassName("opt");
        for(var i=0; i<formOptions.length; i++){
            var newOption = {
                val: formOptions[i],
                count: 0
            };
            tempOptions.push(newOption);
        }
        
        if(req.params.id){
            Poll
                .findOneAndUpdate({'_id':req.params.id},{$set:{
                    title:tempTitle,
                    desc:tempDesc,
                    options:tempOptions
                }},function(err){
                    if(err) return err;
                    res.redirect('vote/'+req.params.id);
                });
        }else{
            var newPoll = new Poll();
            
            newPoll.title = tempTitle;
            newPoll.desc = tempDesc;
            newPoll.options = tempOptions;
            
            newPoll.save(function(err){
                if(err) return err;
                res.redirect('/vote/'+newPoll._id);
            });
        }
    };
    
    this.deletePoll = function(req,res){
        Poll
            .remove({'_id':req.params.id},function(err){
                if(err) return res.json({err:err});
                res.redirect('/polls');
            });
    };
}

module.exports = PollHandler;