/*global $*/

$("#moboButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#mother").offset().top
    }, 2700);
});

$("#cpuButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#cpu").offset().top
    }, 2700);
});

$("#ramButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#ram").offset().top
    }, 2700);
});

$("#hdButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#hd").offset().top
    }, 2700);
});

$("#busButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#bus").offset().top
    }, 2700);
});

$("#keyButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#key").offset().top
    }, 2700);
});