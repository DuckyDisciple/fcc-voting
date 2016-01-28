"use strict";

(function(){
    var divGit = document.querySelector("#github-profile") || null;
    var profileIdGit = document.querySelector("#profile-git-id") || null;
    var usernameGit = document.querySelector("#profile-git-username") || null;
    var displayNameGit = document.querySelector("#profile-git-display") || null;
    var publicReposGit = document.querySelector("#profile-git-repos") || null;

    var divG = document.querySelector("#google-profile") || null;
    var profileIdG = document.querySelector("#profile-g-id") || null;
    var emailG = document.querySelector("#profile-g-email") || null;
    var displayNameG = document.querySelector("#profile-g-display") || null;
    
    var displayName = document.querySelector("#profile-display") || null;
    
    var apiUrlGit = appUrl + '/api/git/:id';
    var apiUrlG = appUrl + '/api/g/:id';
    
    function updateHtmlElement(data, element, userProperty){
        element.innerHTML = data[userProperty];
    }
    
    ajaxFunctions.ready(ajaxFunctions.ajaxRequest("GET",apiUrlGit,function(data){
        var userObject = JSON.parse(data);
        
        if(userObject.username!==undefined){
            if(divGit!==null) divGit.className = "profile";
        }
        
        if(displayName!==null){
            if(userObject.displayName!==undefined){
                updateHtmlElement(userObject,displayName,'displayName');
            }else if(userObject.username!==undefined){
                updateHtmlElement(userObject,displayName,'username');
            }
        }
        
        if(profileIdGit!==null){
            updateHtmlElement(userObject,profileIdGit,'id');
        }
        if(displayNameGit!==null){
            updateHtmlElement(userObject,displayNameGit,'displayName');
        }
        if(usernameGit!==null){
            updateHtmlElement(userObject,usernameGit,'username');
        }
        if(publicReposGit!==null){
            updateHtmlElement(userObject,publicReposGit,'publicRepos');
        }
    }));
    
    ajaxFunctions.ready(ajaxFunctions.ajaxRequest("GET",apiUrlG,function(data){
        var userObject = JSON.parse(data);
        
        if(userObject.email!==undefined){
            if(divG!==null) divG.className = "profile";
        }
        
        if(displayName!==null){
            if(userObject.displayName!==undefined){
                updateHtmlElement(userObject,displayName,'displayName');
            }else if(userObject.email!==undefined){
                updateHtmlElement(userObject,displayName,'email');
            }
        }
        
        if(profileIdG!==null){
            updateHtmlElement(userObject,profileIdG,'id');
        }
        if(emailG!==null){
            updateHtmlElement(userObject,emailG,'email');
        }
        if(displayNameG!==null){
            updateHtmlElement(userObject,displayNameG,'displayName');
        }
    }));
})();