$(document).ready(function(){
    $(".locked").prop("readOnly",true);
    $(".submit").prop("disabled",true);
});

$(document).on("keyup","input",checkInputs);

function checkInputs(){
    var allGood = true;
    $("input").each(function(){
        if($(this).val().length===0) allGood=false;
    });
    
    if(allGood){
        $(".submit").prop("disabled",false);
    }else{
        $(".submit").prop("disabled",true);
    }
}

$(".add-opt").click(function(){
    var newIndex = document.getElementsByClassName("opt").length;
    var newOption = document.createElement("INPUT");
    var optionsDiv = document.getElementById("opts");
    newOption.setAttribute("type","text");
    newOption.className = "opt";
    newOption.setAttribute("name","opt"+newIndex);
    optionsDiv.appendChild(newOption);
    optionsDiv.appendChild(document.createElement("BR"));
    checkInputs();
});