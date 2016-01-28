"use strict";

(function(){
    var addButton = document.querySelector('.adder');
    var resetButton = document.querySelector('.btn-delete');
    var clickNum = document.querySelector('#click-num');
    var apiUrlGit = appUrl + '/api/git/:id/clicks';
    var apiUrlG = appUrl + '/api/g/:id/clicks';

    function updateClickCount(data){
        var clicksObject = JSON.parse(data);
        clickNum.innerHTML = clicksObject.clicks;
    }
    
    ajaxFunctions.ready(ajaxFunctions.ajaxRequest("GET",apiUrlGit,updateClickCount));
    
    addButton.addEventListener("click",function(){
        console.log("Add clicked");
        ajaxFunctions.ajaxRequest("POST",apiUrlGit,function(){
            ajaxFunctions.ajaxRequest("GET",apiUrlGit,updateClickCount);
        });
    });
    
    resetButton.addEventListener("click",function(){
        console.log("Reset clicked");
        ajaxFunctions.ajaxRequest("DELETE",apiUrlGit,function() {
            ajaxFunctions.ajaxRequest("GET",apiUrlGit,updateClickCount);
        });
    });
    
    ajaxFunctions.ready(ajaxFunctions.ajaxRequest("GET",apiUrlG,updateClickCount));
    
    addButton.addEventListener("click",function(){
        console.log("Add clicked");
        ajaxFunctions.ajaxRequest("POST",apiUrlG,function(){
            ajaxFunctions.ajaxRequest("GET",apiUrlG,updateClickCount);
        });
    });
    
    resetButton.addEventListener("click",function(){
        console.log("Reset clicked");
        ajaxFunctions.ajaxRequest("DELETE",apiUrlG,function() {
            ajaxFunctions.ajaxRequest("GET",apiUrlG,updateClickCount);
        });
    });
})();