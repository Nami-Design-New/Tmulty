//theme toggle
let lightThemeBtn = document.getElementById("lightTheme");
let darkThemeBtn = document.getElementById("darkTheme");
let body = document.querySelector("body");
let brand = document.querySelectorAll(".brand");
let nami = document.querySelector("#nami");
lightThemeBtn.addEventListener("click", () => {
  body.classList.remove("dark-theme");
  brand.forEach(b => {
    b.src = "assets/images/logo.svg";
  });
  nami.src = "assets/images/nami.svg";
  document.querySelector(".illustration img").src =
    "assets/images/forgetpass1.svg";
  document.querySelector(".otp img").src = "assets/images/otp1.svg";
  document.querySelector(".confirmpass img").src = "assets/images/newpass1.svg";
});
darkThemeBtn.addEventListener("click", () => {
  body.classList.add("dark-theme");
  brand.forEach(b => {
    b.src = "assets/images/logo-dark.svg";
  });
  nami.src = "assets/images/nami2.svg";
  document.querySelector(".illustration img").src =
    "assets/images/forgetpass2.svg";
  document.querySelector(".otp img").src = "assets/images/otp2.svg";
  document.querySelector(".confirmpass img").src = "assets/images/newpass2.svg";
});
$(document).ready(function() {
  $(".service-card h6").each(function() {
    var text = $(this).text();
    if (text.length > 70) {
      var truncatedText =
        $.trim(text).substring(0, 70).split(" ").slice(0, -1).join(" ") + "...";
      $(this).text(truncatedText);
    }
  });
});
//hero swiper
var swiper = new Swiper(".heroSwiper", {
  direction: "vertical",
  effect: "fade",
  speed: 1000,
  pagination: {
    el: ".mainSliderPagination",
    clickable: true
  },
  navigation: {
    nextEl: ".mainSliderNext",
    prevEl: ".mainSliderPrev"
  }
});
//services swiper
var categoriesSwiper = new Swiper(".categories-swiper", {
  loop: true,
  spaceBetween: 30,
  speed: 2000,
  centeredSlides: true,
  autoplay: {
    delay: 2500
  },
  breakpoints: {
    992: {
      slidesPerView: 4
    },
    768: {
      slidesPerView: 3.5
    },
    350: {
      slidesPerView: 1.5
    }
  }
});
// testimonials slider
var swiper = new Swiper(".testimonilas", {
  loop: true,
  spaceBetween: 30,
  speed: 1000,
  centeredSlides: true,
  pagination: {
    el: ".testimonialsSwiperPagination",
    clickable: true
  },
  autoplay: {
    delay: 2500
  },
  breakpoints: {
    992: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 2
    },
    350: {
      slidesPerView: 1
    }
  }
});
let toggler = document.querySelector(".toogler");
let menu = document.querySelector(".small-media-menu");
toggler.addEventListener("click", () => {
  menu.classList.toggle("show");
  if (menu.classList.contains("show")) {
    toggler.classList.add("close");
  } else {
    toggler.classList.remove("close");
  }
});
$(document).ready(function () {
  // aos
  AOS.init({
      offset: 20,
      delay: 50,
      duration: 300,
      easing: "linear",
      once: true
  });
});