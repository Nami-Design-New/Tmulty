//theme toggle
let lightThemeBtn = document.getElementById("lightTheme");
let darkThemeBtn = document.getElementById("darkTheme");
let body = document.querySelector("body");
let brand = document.querySelector(".brand");
lightThemeBtn.addEventListener("click", () => {
  body.classList.remove("dark-theme");
  brand.src = "assets/images/logo.svg";
  document.querySelector(".illustration img").src =
    "assets/images/forgetpass1.svg";
  document.querySelector(".otp img").src = "assets/images/otp1.svg";
  document.querySelector(".confirmpass img").src = "assets/images/newpass1.svg";
});
darkThemeBtn.addEventListener("click", () => {
  body.classList.add("dark-theme");
  brand.src = "assets/images/logo-dark.svg";
  document.querySelector(".illustration img").src =
    "assets/images/forgetpass2.svg";
  document.querySelector(".otp img").src = "assets/images/otp2.svg";
  document.querySelector(".confirmpass img").src = "assets/images/newpass2.svg";
});
