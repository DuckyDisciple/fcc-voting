$(document).ready(function(){
    var totalVotes = 0;
    $(".result-count").each(function(){
        totalVotes += +$(this).text();
    });
    $(".result").each(function() {
        var percent = (+$(this).children(".result-count").first().text() / totalVotes) * 100;
        $(this).css("background", "linear-gradient(to right, #ffa000 0%, #ffa000 "+percent+"%, #009688 "+percent+"%, #009688 100%)");
    });
    
});