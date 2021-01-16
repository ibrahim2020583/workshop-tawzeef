//animation div
AOS.init();
// stickynavbar
window.addEventListener('scroll' , ()=> {
    let nav = document.querySelector('.navbar')
    nav.classList.toggle('sticky' , window.scrollY > 200)
})