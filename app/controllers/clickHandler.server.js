"use strict";

function clickHandler(db){
    var clicks = db.collection("clicks");
    this.getClicks = function(req, res){
        var clickProjection = {'_id': 0};
        clicks.findOne({}, clickProjection, function(err, data){
           if(err) throw err;
           
           if(data){
               res.json(data);
           }else{
               clicks.insert({'clicks':0}, function(err, doc) {
                   if(err) throw err;
                   
                   res.json(doc);
               });
           }
        });
    };
    this.addClick = function(req, res) {
        clicks.findAndModify({}, {_id:1}, {$inc: { clicks:1 } }, function(err, data){
            if(err) throw err;
            
            res.json(data);
        });
    };
    this.resetClicks = function(req, res){
        clicks.findAndModify({}, {_id:1}, {$set: { clicks:0 } },function(err, data) {
            if(err) throw err;
            
            res.json(data);
        })
    }
}

module.exports = clickHandler;