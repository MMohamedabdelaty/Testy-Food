'use strict';
console.log("Hi");

$(window).scroll(function (){
    let scrolled = $(window).scrollTop();
    if (scrolled > 500) $(".backtotop").show(500);
    if (scrolled < 500) $(".backtotop").hide(500);
})
$(".backtotop").click(function (){
    $("html , body").animate({
        scrollTop: "0"} , 0)
})


//Let's open and close the mobile menu
$(".openmenu").click(function (){
    $(".sidebar").animate({
        right: "0px"
    })
})
$(".closemenu").click(function (){
    $(".sidebar").animate({
        right: "-250px"
    })
})


//Let's open and close the popup
$(".openPopup").click(function(){
    $(".popupOverlay, .popupContent").addClass("active")
})
$(".closePopup").click(function(){
    $(".popupOverlay, .popupContent").removeClass("active")
})

//let's do the carousel
$(document).ready(function(){
    let menu = $("#cards");
    let reviews = $("#reviews");
    reviews.owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: true,
    })
    menu.owlCarousel({
        items: 4,
        loop: true,
        dots: true,
        nav: true,
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            800: {
                items: 3
            },
            1120: {
                items: 4
            }
        }
    })
  });