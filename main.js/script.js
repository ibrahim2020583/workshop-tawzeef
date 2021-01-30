//animation div
AOS.init();
// stickynavbar
window.addEventListener('scroll' , ()=> {
    let nav = document.querySelector('.navbar')
    let btn = document.querySelector(".back-top")
    nav.classList.toggle('sticky' , window.scrollY > 200),
    btn.classList.toggle('d-block' , window.scrollY > 200)
})
// slick slider
$('.featured-candidates').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
  autoplaySpeed: 2000
  });
//   campony slider
$('.our-companies').slick({
    // infinite: true,
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
  autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

// Loading Screen

$(window).load(function () {
    
    "use strict";
    
    // Loading Elements
    
    $(".loading-page .logo-web").fadeOut(2000, function () {
        
        // Show The Scroll

        $("body").css("overflow", "auto");
        
        $(this).parent().fadeOut(2000, function () {
            
            $(this).remove();
        });
    });
});


// ==================
// add or removing active
// =======================

// ==================
// add or removing active
// =======================
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}