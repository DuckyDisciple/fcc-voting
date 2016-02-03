$(document).ready(function(){
    $(".locked").prop("readOnly",true);
});

$(".add-opt").click(function(){
    var newIndex = document.getElementsByClassName("opt").length;
    var newOption = document.createElement("INPUT");
    var optionsDiv = document.getElementById("opts");
    newOption.setAttribute("type","text");
    newOption.className = "opt";
    newOption.setAttribute("name","opt"+newIndex);
    optionsDiv.appendChild(newOption);
    optionsDiv.appendChild(document.createElement("BR"));
});