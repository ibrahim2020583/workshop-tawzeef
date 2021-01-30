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
 function myFunction(){
        let form = document.querySelector('.login-form')
        form.classList.add('d-none');
       
    }
    function Get(){
        let form = document.querySelector('.login-form')
        form.classList.remove('d-none')
        form.classList.add('d-block')
    }