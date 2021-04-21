$(document).ready(function(){


    $('.pointer').mouseenter(function(){
        
        
       $(this).find('.dropdown').addClass('active');

       
    })
    
    $('.pointer').mouseleave(function(){

        $(this).find('.dropdown').removeClass('active');

    }) 


})