$(document).ready(function(){
    //Particles.js----------------->
    $("#particle-button").click(function(){
     particlesJS.load('particles-js', 'package.json');
    })
    
    AOS.init();


    $(".submit-btn").on("click", function(event){
        event.preventDefault();
        $('#myModal').modal('show')
        // $('#myModal').modal({ show: false})
        $('.validate').val("");
     
    function validateForm() {
          var isValid = true;
          $('.validate').each(function () {
              if ($(this).val() === "") {
                  isValid = true;
              }
          });
          console.log(isValid)
          return isValid;
      }

      if (validateForm() == true) {

        console.log("Thank you for contacting me")
    }else {
           
            
      alert("Please fill out all fields before submitting.")
    }
  })
    
    })