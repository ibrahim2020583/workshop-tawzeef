// stickynavbar
window.addEventListener("scroll", () => {
  let nav = document.querySelector(".navbar");

  nav.classList.toggle("sticky", window.scrollY > 0);
});

//   });
//   campony slider
$(".our-companies").slick({
  // infinite: true,
  centerMode: true,
  centerPadding: "100px",
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
        centerPadding: "40px",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});

// Loading Screen

$(window).load(function () {
  "use strict";

  // Loading Elements

  $(".loading-page .logo-web").fadeOut(2000, function () {
    // Show The Scroll

    $("body").css("overflow", "auto");

    $(this)
      .parent()
      .fadeOut(2000, function () {
        $(this).remove();
      });
  });
});

// ============
// go up page

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

//add and remove drowp dowen in nav bar
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function () {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function () {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function () {
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
let img = document.querySelector("#image");
let arr = [
  "images/blog/blog_4.png",
  "images/blog/blog_2.png",
  "images/blog/single_blog_5.png",
  "images/blog/single_blog_1.png",
];
setInterval(() => {
  let randomNumber = Math.floor(Math.random() * arr.length);
  img.src = arr[randomNumber];
}, 1000);
let img1 = document.querySelector("#image1");
let arr1 = [
  "images/blog/single_blog_3.png",
  "images/blog/single_blog_1.png",
  "images/blog/blog_3.png",
  "images/blog/blog_4.png",
];
setInterval(() => {
  let randomNumber = Math.floor(Math.random() * arr1.length);
  img1.src = arr[randomNumber];
}, 3000);
let img2 = document.querySelector("#image2");
let arr2 = [
  "images/blog/blog_1.png",
  "images/blog/blog_2.png",
  "images/blog/single_blog_4.png",
  "images/blog/single_blog_2.png",
];
setInterval(() => {
  let randomNumber = Math.floor(Math.random() * arr2.length);
  img2.src = arr[randomNumber];
}, 4000);
let img3 = document.querySelector("#image3");

let arr3 = [
  "images/blog/single_blog_3.png",
  "images/blog/single_blog_5.png",
  "images/blog/blog_3.png",
  "images/blog/blog_4.png",
];
setInterval(() => {
  let randomNumber = Math.floor(Math.random() * arr3.length);

  img3.src = arr[randomNumber];
}, 2000);
// random image
// /* <!-- * ------------------------------------------------------
//  start choise langage and changed rtl or ltr navbar
// ------------------------------------------------------------- --> */
english.onclick = () => {
  setLanugage("english");
  localStorage.setItem("Lang", "En");
};
arabic.onclick = () => {
  setLanugage("arabic");
  localStorage.setItem("Lang", "arabic");
};
onload = () => {
  setLanugage(localStorage.getItem("Lang"));
};
// ========================
// nav bar
// ========================
function setLanugage(getLanuage) {
  if (getLanuage === "english") {
    logo.innerHTML = "  tawzef.com";
    home.innerHTML = "  Home ";
    About.innerHTML = "About Us";
    pages.innerHTML = "pages";
    candidates.innerHTML = "candidates";
    job.innerHTML = "job details ";
    elements.innerHTML = "elements ";
    Blog.innerHTML = "Blog";
    Blog1.innerHTML = "Blog";
    Single.innerHTML = "Single Blog ";
    Browse.innerHTML = "Browse Job";
    Contact.innerHTML = "Contact Us";
    login.innerHTML = "login  ";
    Job.innerHTML = "Want A Job  ";
    english.innerHTML = "Ar  ";
    arabic.innerHTML = "Ar  ";

    // =====================================
    //             translat header
    // =====================================
    listed.innerHTML = "4536+ Jobs listed";
    Dream.innerHTML = "Find your Dream Job";
    We.innerHTML =
      "We provide online instant cash loans with quick approval that suit your term length";
    post.innerHTML = " Post A Job ";
// ========================
          // translat joblisting
    // =======================
    joblisting.innerHTML = "job listing"
    browsemorjob.innerHTML = " browsemorjob    "
    Software.innerHTML = " SoftwareEngineer    "
    California.innerHTML = " California, USA        "
    Part.innerHTML = "Part-time "
    Apply.innerHTML = " Apply Now  "
    line.innerHTML = "Date line: 31 Jan 2020   "
    Digital.innerHTML = "Digital Marketer "
    California1.innerHTML = " California, USA "
    Part1.innerHTML = "Part-time "
    Apply1.innerHTML = " Apply Now  "
    line1.innerHTML = "Date line: 31 Jan 2020   "
    Wordpress.innerHTML = " Wordpress Develope"
    California2.innerHTML = " California, USA "
    Part2.innerHTML = "Part-time "
    Apply2.innerHTML = " Apply Now  "
    line2.innerHTML = "Date line: 31 Jan 2020   "
    Visual.innerHTML = " Visual Designer"
    California3.innerHTML = " California, USA "
    Part3.innerHTML = "Part-time "
    Apply3.innerHTML = " Apply Now  "
    line3.innerHTML = "Date line: 31 Jan 2020   "
    seo.innerHTML = " Search Engine Optimizer    "
    California4.innerHTML = " California, USA        "
    Part4.innerHTML = "Part-time "
    Apply4.innerHTML = " Apply Now  "
    line4.innerHTML = "Date line: 31 Jan 2020   "
    Creative.innerHTML = " Creative Designer    "
    California5.innerHTML = " California, USA        "
    Part5.innerHTML = "Part-time "
    Apply5.innerHTML = " Apply Now  "
    line5.innerHTML = "Date line: 31 Jan 2020   "
  // <!-- ---------translat Popolar Categories---------- -->
        Popolar.innerHTML = "  Popolar Categories  "
        Accounting.innerHTML = "  Accounting/Finance   "
        Automotive.innerHTML = "  Accounting/Finance   "
        Constrution.innerHTML = "  Constrution   "
        Healthcare.innerHTML = "  Healthcare   "
        Resturant.innerHTML = "  Resturant/Food   "
        Art.innerHTML = "  Art/Design   "
 // <!-------------translat Top Companies------------------------->
 top.innerHTML = "   Top Companies   "
 browsemorjob1.innerHTML = " browse more Companies    "
 Snack.innerHTML = "   Snack Studio    "
 Snack1.innerHTML = "   Snack Studio    "
 Snack2.innerHTML = "   Snack Studio    "
 Snack3.innerHTML = "   Snack Studio    "
 Snack4.innerHTML = "   Snack Studio    "
 Snack5.innerHTML = "   Snack Studio    "
 Availableposition.innerHTML = "   Availableposition     "
 Availableposition1.innerHTML = "   Availableposition     "
 Availableposition2.innerHTML = "   Availableposition     "
 Availableposition3.innerHTML = "   Availableposition     "
 Availableposition4.innerHTML = "   Availableposition     "
 Availableposition5.innerHTML = "   Availableposition     "
// <!-------------translat footer------------------------->
dream.innerHTML="your Dream Job "
senior.innerHTML=" senior.steps.info@gmail.com   "
phones.innerHTML=" 109700346    "
building.innerHTML=" Building 13- Shabab El    "
Web.innerHTML=" http://www.seniorsteps.net/    "
about.innerHTML=" About: specialized training courses   "
pricing.innerHTML=" Pricing: suitable prices for all    "
carrier.innerHTML=" Carrier: Senior Software Company   "
fAQ.innerHTML=" Instructions: courses scheduled    "
Esteem.innerHTML="  Respect and appreciation for all employees of the institution     "
tawzife.innerHTML="  tawzif    "
Username.placeholder="  Username    "
copyright.innerHTML="  copyright      "
tawzifs.innerHTML="  tawzif      "
Company.innerHTML="  Company      "
newsletter.innerHTML="  newsletter      "
// <!-------------translat Testimonial------------------------->
Testimonial.innerHTML="  Testimonial      "
Testimonial1.innerHTML="  I just want to thank you for your help. I was so pleased and grateful. Keep up the excellent work. Your site provides the best support I have ever encountered.     "
Testimonial2.innerHTML="  I just want to thank you for your help. I was so pleased and grateful. Keep up the excellent work. Your site provides the best support I have ever encountered.     "
Testimonial3.innerHTML="  I just want to thank you for your help. I was so pleased and grateful. Keep up the excellent work. Your site provides the best support I have ever encountered.     "
Testimonial4.innerHTML="  I just want to thank you for your help. I was so pleased and grateful. Keep up the excellent work. Your site provides the best support I have ever encountered.    "
// <!-- ----------------------translatdreame-job -->
jobdream.innerHTML="  Your Dream Job"
Waiting.innerHTML="  Is Waiting For You"
Jobs.innerHTML=" Find Jobs"
upload.innerHTML=" upload your cv"
mo.innerHTML=" mohammedelshaer  "
    mo1.innerHTML="  mohammedelshaer  "
    ibr.innerHTML="  ibrhemelmrasi   "
    ibr.innerHTML="  ibrhemelmrasi   "
    Manager.innerHTML="  Manager   "
    Manager1.innerHTML="  Manager   "
    Manager2.innerHTML="  Manager   "
    Manager3.innerHTML="  Manager   "
    ltr = document.body.style.direction = "ltr";
  } else if (getLanuage === "arabic") {
    logo.innerHTML = " توظيف كوم";
    home.innerHTML = "  الرئيسية ";
    About.innerHTML = "حول";
    pages.innerHTML = "االصفحات";
    candidates.innerHTML = "المرشحين";
    job.innerHTML = "تفاصيل الوظائف";
    elements.innerHTML = "العناصر ";
    Blog.innerHTML = "المدونة";
    Blog1.innerHTML = "مدونة";
    Single.innerHTML = "مدونة شخصية";
    Browse.innerHTML = "  تصفح الوظائف    ";
    Contact.innerHTML = "تواصل معنا  ";
    login.innerHTML = "دخول  ";
    Job.innerHTML = "وظائف  ";
    english.innerHTML = "En ";
    arabic.innerHTML = "En";
    // =====================================
    //             translat header
    // =====================================
    listed.innerHTML = " أكثر من 4536 قائمة وظائف";
    Dream.innerHTML = " ابحث عن الوظيفة التي تحلم بها  ";
    We.innerHTML =
      "نحن نقدم قروضًا نقدية فورية عبر الإنترنت بموافقة سريعة تناسب طول مدتك";
    post.innerHTML = " انشر وظيفة";
    // ========================
          // translat joblisting
    // =======================
    joblisting.innerHTML = "قائمة بالوظائف "
    browsemorjob.innerHTML = "تصفح المزيد من الوظائف  "
    Software.innerHTML = " مهندس برمجيات    "
    California.innerHTML = " كاليفورنيا، الولايات المتحدة الأمريكية     "
    Part.innerHTML = "دوام جزئى "
    Apply.innerHTML = " قدم الأن "
    line.innerHTML = "   أخر موعد للتقديم 31 يناير 2020  "
    Digital.innerHTML = "التسويق الرقمي"
    California1.innerHTML = " كاليفورنيا، الولايات المتحدة الأمريكية "
    Part1.innerHTML = "دوام جزئى "
    Apply1.innerHTML = " قدم الأن "
    line1.innerHTML = "   أخر موعد للتقديم 31 يناير 2020  "
    Wordpress.innerHTML = "  مطور وورد بيرس"
    California2.innerHTML = " كاليفورنيا، الولايات المتحدة الأمريكية "
    Part2.innerHTML = "دوام جزئى "
    Apply2.innerHTML = " قدم الأن "
    line2.innerHTML = "   أخر موعد للتقديم 31 يناير 2020  "
    Visual.innerHTML = "  مصمم جرافيك"
    California3.innerHTML = " كاليفورنيا، الولايات المتحدة الأمريكية "
    Part3.innerHTML = "دوام جزئى "
    Apply3.innerHTML = " قدم الأن "
    line3.innerHTML = "   أخر موعد للتقديم 31 يناير 2020  "
    seo.innerHTML = " تحسين محركات البحث     "
    California4.innerHTML = " كاليفورنيا، الولايات المتحدة الأمريكية     "
    Part4.innerHTML = "دوام جزئى "
    Apply4.innerHTML = " قدم الأن "
    line4.innerHTML = "   أخر موعد للتقديم 31 يناير 2020  "
    Creative.innerHTML = " مصمم مبدع     "
    California5.innerHTML = " كاليفورنيا، الولايات المتحدة الأمريكية     "
    Part5.innerHTML = "دوام جزئى "
    Apply5.innerHTML = " قدم الأن "
    line5.innerHTML = "   أخر موعد للتقديم 31 يناير 2020  "
    // <!-- ---------translat Popolar Categories---------- -->
    Popolar.innerHTML = "  الأكثر بحثا  "
    Accounting.innerHTML = "  المحاسبة المالية  "
    Automotive.innerHTML = "  مجال السيارات   "
    Constrution.innerHTML = "  البناء والمقاولات   "
    Healthcare.innerHTML = "  الرعاية الصحية   "
    Resturant.innerHTML = "  المطاعم   "
    Art.innerHTML = "  الديكور   "
    // <!-------------translat Top Companies------------------------->
    top.innerHTML = "  أفضل الشركات   "
    browsemorjob1.innerHTML = "تصفح المزيد من الشركات  "
    Snack.innerHTML = "   سناك ستوديو   "
    Snack1.innerHTML = "   سناك ستوديو   "
    Snack2.innerHTML = "   سناك ستوديو   "
    Snack3.innerHTML = "   سناك ستوديو   "
    Snack4.innerHTML = "   سناك ستوديو   "
    Snack5.innerHTML = "   سناك ستوديو   "
    Availableposition.innerHTML = "   الوظائف المتوفرة     "
    Availableposition1.innerHTML = "   الوظائف المتوفرة     "
    Availableposition2.innerHTML = "   الوظائف المتوفرة     "
    Availableposition3.innerHTML = "   الوظائف المتوفرة     "
    Availableposition4.innerHTML = "   الوظائف المتوفرة     "
    Availableposition5.innerHTML = "   الوظائف المتوفرة     "
    // <!-------------translat footer------------------------->
    dream.innerHTML="وظيفة أحلامك"
    senior.innerHTML=" senior.steps.info@gmail.com   "
    phones.innerHTML=" 109700346    "
    building.innerHTML=" عمارات 13 شباب المهندسين    "
    Web.innerHTML=" http://www.seniorsteps.net/    "
    about.innerHTML=" حول: دورات تدريبية متخصصة   "
    pricing.innerHTML=" الأسعار: أسعار مناسبة للجميع    "
    carrier.innerHTML=" الناقل: شركة سينيور للبرمجيات  "
    fAQ.innerHTML=" التعليمات: دورات برمجية     "
    Esteem.innerHTML=" الإحترام والتقدير لجميع العاملين بالمؤسسة     "
    tawzife.innerHTML="  توظيف    "
    copyright.innerHTML="  جميع الحقوق محفوظة    "
    Username.placeholder="  أدخل إسمك    "
    tawzifs.innerHTML="  توظيف      "
    Company.innerHTML="  الشركة      "
    newsletter.innerHTML="  القائمة البريدية      "
    // <!-------------translat Testimonial------------------------->
    Testimonial.innerHTML="  شهادة      "
    Testimonial1.innerHTML="    أريد فقط أن أشكرك على مساعدتك. كنت سعيدا وممتنا جدا. استمروا في العمل الممتاز. يوفر موقعك أفضل دعم واجهته على الإطلاق.     "
    Testimonial2.innerHTML="   أريد فقط أن أشكرك على مساعدتك. كنت سعيدا وممتنا جدا. استمروا في العمل الممتاز. يوفر موقعك أفضل دعم واجهته على الإطلاق.        "
    Testimonial3.innerHTML="   أريد فقط أن أشكرك على مساعدتك. كنت سعيدا وممتنا جدا. استمروا في العمل الممتاز. يوفر موقعك أفضل دعم واجهته على الإطلاق.  "
    Testimonial4.innerHTML="   أريد فقط أن أشكرك على مساعدتك. كنت سعيدا وممتنا جدا. استمروا في العمل الممتاز. يوفر موقعك أفضل دعم واجهته على الإطلاق.   "
    // <!-- ----------------------translatdreame-job -->
    jobdream.innerHTML=" وظيفة احلامك"
    Waiting.innerHTML="  نحن في إنتظارك"
    Jobs.innerHTML=" أعثر على وظيفتك"
    upload.innerHTML=" حمل سيرتك الذاتية"
    mo.innerHTML="   محمد الشاعر"
    mo1.innerHTML="   محمد الشاعر"
    ibr.innerHTML="   ابراهيم المراسي "
    ibr.innerHTML="   ابراهيم المراسي "
    Manager.innerHTML="  مدير   "
    Manager1.innerHTML="  مدير   "
    Manager2.innerHTML="  مدير   "
    Manager3.innerHTML="  مدير   "
    rtl = document.body.style.direction = "rtl";
  }
}

// /* <!-- * ------------------------------------------------------
//  end choise langage
// ------------------------------------------------------------- --> */
