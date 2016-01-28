"use strict";

(function(){
    var addButton = document.querySelector('.adder');
    var resetButton = document.querySelector('.btn-delete');
    var clickNum = document.querySelector('#click-num');
    var apiUrl = appUrl + '/api/:id/clicks';

    function updateClickCount(data){
        var clicksObject = JSON.parse(data);
        clickNum.innerHTML = clicksObject.clicks;
    }
    
    ajaxFunctions.ready(ajaxFunctions.ajaxRequest("GET",apiUrl,updateClickCount));
    
    addButton.addEventListener("click",function(){
        console.log("Add clicked");
        ajaxFunctions.ajaxRequest("POST",apiUrl,function(){
            ajaxFunctions.ajaxRequest("GET",apiUrl,updateClickCount);
        });
    });
    
    resetButton.addEventListener("click",function(){
        console.log("Reset clicked");
        ajaxFunctions.ajaxRequest("DELETE",apiUrl,function() {
            ajaxFunctions.ajaxRequest("GET",apiUrl,updateClickCount);
        });
    });
})();