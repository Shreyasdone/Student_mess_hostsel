

function sendMessage() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    if(name.length === 0){
        alert("Enter your name!");
        throw new Error;
    }
    else if(email.length === 0){
        alert("Enter your email!");
        throw new Error;
    }
    else if(message.length === 0){
        alert("Write your message!");
        throw new Error;
    }
    else{
        alert("Hey " + name + ", We have received your message. Thank you for reaching out to us. Will get to you back shortly")
    }
  }

$(function () {

    $('#properties-slider').slick({
         slidesToShow: 4,
         slidesToScroll: 1,
         prevArrow: '<a href="#" class="slick-arrow slick-prev">previous</a>',
         nextArrow: '<a href="#" class="slick-arrow slick-next">next</a>',
         responsive: [
             {
                 breakpoint: 1100,
                 settings: {
                     slidesToShow: 3,
                     slidesToScroll: 1,
                     infinite: true,
                 }
             },
             {
                 breakpoint: 767,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 1,
                     infinite: true,
                 }
             },
             {
                 breakpoint: 530,
                 settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1,
                     infinite: true,
                 }
             }
         ]
    });

 });

