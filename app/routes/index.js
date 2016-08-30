"use strict";

var path = process.cwd();
var PointHandler = require(process.cwd()+"/app/controllers/pointHandler.server.js");
var GroupHandler = require(process.cwd()+"/app/controllers/groupHandler.server.js");
var UserHandler = require(process.cwd()+"/app/controllers/userHandler.server.js");

module.exports=function(app, passport){
    
    function isLoggedIn(req, res, next){
        if(req.isAuthenticated()){
            return next();
        }else{
            res.redirect('/login');
        }
    }
    
    var pointHandler = new PointHandler();
    var groupHandler = new GroupHandler();
    var userHandler = new UserHandler();
    
    app.route('/')
        .get(function(req,res){
            res.sendFile(path+"/client/index.html");
        });
        
    app.route('/login')
        .get(function(req,res){
            res.sendFile(path+"/client/login.html");
        });
    
    app.route('/logout')
        .get(function(req, res) {
            req.logout();
            res.redirect('/');
        });
    
    app.route('/new')
        .get(isLoggedIn, function(req, res) {
            // res.sendFile(path+"/client/editPoll.html");
            res.render('editGroup',{});
        });
    
    app.route('/edit/:id')
        .get(isLoggedIn, groupHandler.renderEditPage );
            //use pollHandler to get poll fields
            // var poll = pollHandler.getPoll(req,res);
            // if(poll){
            //     res.render('editPoll',{pollTitle: poll.title, pollDesc: poll.desc, pollOptions: poll.options});
            // }else{
            //   res.render('editPoll',{}); 
            // }
        // );
    
    app.route('/save')
        .post(isLoggedIn, groupHandler.saveGroup);
    app.route('/save/:id')
        .post(isLoggedIn, groupHandler.saveGroup);
        
    app.route('/assign/:group/:user')
        .post(isLoggedIn, pointHandler.assignPoints);
    
    app.route('/api/points/:user')
        .get(pointHandler.getPoints);
    
    app.route('/api/groups')
        .get(isLoggedIn, pointHandler.getMyGroups);
        
    app.route('/groups')
        .get(isLoggedIn, groupHandler.getAllGroups);
        
    app.route('/error/')
        .get(function(req,res){
            res.render('error',{});
        });
    
    // app.route('/profile')
    //     .get(isLoggedIn, function(req,res){
    //         res.sendFile(path+"/client/profile.html");
    //     });
    
    // app.route('/api/git/:id')
    //     .get(isLoggedIn,function(req, res) {
    //         res.json(req.user.github);
    //     });
    
    app.route('/api/:id')
        .get(isLoggedIn, function(req, res){
            res.json(req.user.google);
        });
    
    // app.route('/auth/github')
    //     .get(passport.authenticate('github'));
    
    // app.route('/auth/github/callback')
    //     .get(passport.authenticate('github',{
    //         successRedirect: '/',
    //         failureRedirect: '/login'
    //     }));
    
    app.route('/auth/google')
        .get(passport.authenticate('google',{ scope: ['profile','email'] }));
    
    app.route('/auth/google/callback')
        .get(passport.authenticate('google',{
            successRedirect: '/',
            failureRedirect: '/'
        }));
    
    // app.route('/api/:id/clicks')
    //     .get(isLoggedIn, clickHandler.getClicks)
    //     .post(isLoggedIn, clickHandler.addClick)
    //     .delete(isLoggedIn, clickHandler.resetClicks);
    
    // app.route('/api/git/:id/clicks')
    //     .get(isLoggedIn, clickHandler.getClicks)
    //     .post(isLoggedIn, clickHandler.addClick)
    //     .delete(isLoggedIn, clickHandler.resetClicks);
    // app.route('/api/g/:id/clicks')
    //     .get(isLoggedIn, clickHandler.getClicks)
    //     .post(isLoggedIn, clickHandler.addClick)
    //     .delete(isLoggedIn, clickHandler.resetClicks);
};