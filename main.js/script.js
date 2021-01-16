//animation div
AOS.init();
// stickynavbar
window.addEventListener('scroll' , ()=> {
    let nav = document.querySelector('.navbar')
    nav.classList.toggle('sticky' , window.scrollY > 200)
})
// slick slider
$('.featured-candidates').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
  autoplaySpeed: 2000
  });