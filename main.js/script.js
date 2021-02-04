//animation div
// AOS.init();
// stickynavbar
window.addEventListener('scroll' , ()=> {
    let nav = document.querySelector('.navbar')
    let btn = document.querySelector(".back-top")
    nav.classList.toggle('sticky' , window.scrollY > 0),
    btn.classList.toggle('d-block' , window.scrollY > 200)
});
// slick slider
// $('.featured-candidates').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 2,
//     autoplay: true,
//   autoplaySpeed: 2000
//   });
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
 function myFunction(){
        let form = document.querySelector('.login-form')
        form.classList.add('d-none');
       
    }
    function Get(){
        let form = document.querySelector('.login-form')
        form.classList.remove('d-none')
        form.classList.add('d-block')
    }

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



// ============
// go up page

$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#goup').fadeIn(); 
        } else { 
            $('#goup').fadeOut(); 
        } 
    }); 
    $('#goup').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});


//add and remove drowp dowen in nav bar
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});