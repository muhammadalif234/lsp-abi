
// Owlcarousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    center: true,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
  });
});
const button = document.querySelector('#feedback-button');
  const message = document.querySelector('#feedback-message');

  // Add an event listener to the button
  button.addEventListener('click', function() {
    // Show the message when the button is clicked
    message.innerHTML = 'Terimakasih atas saran dan masukan Anda';
  });