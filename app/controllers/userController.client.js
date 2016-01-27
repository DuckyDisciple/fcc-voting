"use strict";

(function(){
    var profileId = document.querySelector("#profile-id") || null;
    var username = document.querySelector("#profile-username") || null;
    var displayName = document.querySelector("#profile-display");
    var publicRepos = document.querySelector("#profile-repos") || null;
    var apiUrl = appUrl + '/api/:id';
    
    function updateHtmlElement(data, element, userProperty){
        element.innerHtml = data[userProperty];
    }
    
    ajaxFunctions.ready(ajaxFunctions.ajaxRequest("GET",apiUrl,function(data){
        var userObject = JSON.parse(data);
        
        updateHtmlElement(userObject,displayName,'displayName');
        if(profileId!==null){
            updateHtmlElement(userObject,profileId,'id');
        }
        if(username!==null){
            updateHtmlElement(userObject,username,'username');
        }
        if(publicRepos!==null){
            updateHtmlElement(userObject,publicRepos,'publicRepos');
        }
    }));
})();