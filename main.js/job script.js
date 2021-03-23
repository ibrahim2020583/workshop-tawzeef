// stickynavbar
window.addEventListener('scroll' , ()=> {
    let nav = document.querySelector('.navbar')
    
    nav.classList.toggle('sticky' , window.scrollY > 0)
   
});


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
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#goup").fadeIn();
    } else {
      $("#goup").fadeOut();
    }
  });
  $("#goup").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});



const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 800

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
});


function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("filter");
  filter = input.value.toUpperCase();
  ul = document.getElementsByClassName("my-candidates");
  
  li = document.getElementsByClassName("candidates-titel");
console.log (li)
  for (i = 0; i < li.length; i++) {
    
    p = li[i].getElementsByTagName("p")[0];
      txtValue = p.textContent || p.innerText;
      
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          ul[i].style.display = "";
      } else {
         ul[i].style.display = "none";
      }
  }
}