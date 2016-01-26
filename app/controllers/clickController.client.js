"use strict";

(function(){
    var addButton = document.querySelector('.adder');
    var resetButton = document.querySelector('.btn-delete');
    var clickNum = document.querySelector('#click-num');
    var apiUrl = "https://passport-test-duckydisciple.c9users.io/api/clicks";
    
    function ready(fn){
        if(typeof fn !== 'function'){
            return;
        }
        if(document.readyState==="complete"){
            return fn();
        }
        
        document.addEventListener('DOMContentLoaded', fn, false);
    }
    
    function ajaxRequest(method, url, callback){
        var xmlhttp = new XMLHttpRequest();
        
        xmlhttp.onreadystatechange = function(){
            if(xmlhttp.readyState===4 && xmlhttp.status===200){
                callback(xmlhttp.response);
            }
        };
        
        xmlhttp.open(method,url,true);
        xmlhttp.send();
    }
    
    function updateClickCount(data){
        var clicksObject = JSON.parse(data);
        clickNum.innerHTML = clicksObject.clicks;
    }
    
    ready(ajaxRequest("GET",apiUrl,updateClickCount));
    
    addButton.addEventListener("click",function(){
        console.log("Add clicked");
        ajaxRequest("POST",apiUrl,function(){
            ajaxRequest("GET",apiUrl,updateClickCount);
        });
    });
    
    resetButton.addEventListener("click",function(){
        console.log("Reset clicked");
        ajaxRequest("DELETE",apiUrl,function() {
            ajaxRequest("GET",apiUrl,updateClickCount);
        });
    });
})();