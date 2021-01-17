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
<<<<<<< HEAD


 
=======
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
>>>>>>> 409350fef26a1a58009a535ec951973e406cd51a
