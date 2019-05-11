$(document).ready(function(){
    //Particles.js----------------->
    $("#particle-button").click(function(){
     particlesJS.load('particles-js', 'package.json');
    })
    
    

  AOS.init();

    $(".submit-btn").on("click", function(event){
        event.preventDefault();
    })
    
    })