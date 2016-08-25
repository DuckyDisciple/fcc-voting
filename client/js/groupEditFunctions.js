$(document).ready(function(){
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