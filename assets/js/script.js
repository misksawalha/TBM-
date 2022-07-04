/*==================Change navbar color=====================*/ 
// let aboutSec=$(".about").offset().top;
// $(window).scroll(function(){
//     let scrollValue=$(window).scrollTop();
//     if(scrollValue>aboutSec-50) //the -50 //حطيناها عشان قبل ما يوصل بالضبط لان بكون في منطقة بختفي فيها كل شيء
//     {
//         $(".navbar").css("backgroundColor","blue");
//     }
//     else{
//         $(".navbar").css("backgroundColor","white");
//     }
// })


    let aboutSec=$(".about").offset().top;
    $(window).scroll(function(){
        let scrollValue=$(window).scrollTop();
        if(scrollValue >= aboutSec-50) //the -50 //حطيناها عشان قبل ما يوصل بالضبط لان بكون في منطقة بختفي فيها كل شيء
        {
            $("#btnUp").fadeIn(200);
        }
        else{
            $("#btnUp").fadeOut(200);
        }
    })
$("#btnUp").click(function(){
    $(window).scrollTop(0);
})
$("a").click(function(e){
    let attr=$(e.target).attr('href');
    let sectionOffset= $(attr).offset().top;
    $("html,body").animate({scrollTop:sectionOffset},2000)
})

$(document).ready(function(){
    $(".loading .sk-cube-grid").fadeOut(3000);//to hide the spinner
    $("#loading").fadeOut(3000); //to hide the background
    $("body").css("overflow","auto");
})

// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel();
//   });

//   $(document).ready(function() {
//     $(".skitter-large").skitter();
//   });