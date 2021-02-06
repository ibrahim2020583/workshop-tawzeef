
// stickynavbar
window.addEventListener('scroll' , ()=> {
    let nav = document.querySelector('.navbar')
    
    nav.classList.toggle('sticky' , window.scrollY > 0)
   
});

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
// random image
let img = document.querySelector('#image');
let arr = ['images/blog/blog_4.png' ,'images/blog/blog_2.png' ,'images/blog/single_blog_5.png' ,'images/blog/single_blog_1.png' ,];
setInterval(()=>{
  let randomNumber =Math.floor(Math.random()*arr.length);
  img.src = arr[randomNumber];
},1000)
let img1 = document.querySelector('#image1');
let arr1 = ['images/blog/single_blog_3.png' ,'images/blog/single_blog_1.png' ,'images/blog/blog_3.png' ,'images/blog/blog_4.png' ,];
setInterval(()=>{
  let randomNumber =Math.floor(Math.random()*arr1.length);
  img1.src = arr[randomNumber];
},3000)
let img2 = document.querySelector('#image2');
let arr2 = ['images/blog/blog_1.png' ,'images/blog/blog_2.png' ,'images/blog/single_blog_4.png' ,'images/blog/single_blog_2.png' ,];
setInterval(()=>{
  let randomNumber =Math.floor(Math.random()*arr2.length);
  img2.src = arr[randomNumber];
},4000)
let img3 = document.querySelector('#image3');
let arr3 = ['images/blog/single_blog_3.png' ,'images/blog/single_blog_5.png' ,'images/blog/blog_3.png' ,'images/blog/blog_4.png' ,];
setInterval(()=>{
  let randomNumber =Math.floor(Math.random()*arr3.length);
  img3.src = arr[randomNumber];
},2000)
// random image