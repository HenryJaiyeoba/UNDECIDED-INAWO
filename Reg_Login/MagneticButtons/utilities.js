function range(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// swapping between sign in and sign out
const signUpFormMobile = document.getElementById("sign-up-form-mobile");
const signInFormMobile = document.getElementById("sign-in-form-mobile");
const signUpForm = document.getElementById("sign-up-form");
const signInForm = document.getElementById("sign-in-form");

function screenSizeRender() {
  const signInMobile = document.getElementById("toggle1-mobile");
  const signUpMobile = document.getElementById("toggle2-mobile");
  const signIn = document.getElementById("toggle1");
  const signUp = document.getElementById("toggle2");
  const mobileView = document.querySelector(".mobile-content");
  const desktopView = document.querySelector(".desktop-content");

  // console.log(window.getComputedStyle(desktopView).getPropertyValue("display"));
  if (
    window.getComputedStyle(mobileView).getPropertyValue("display") != "none"
  ) {
    // console.log("I am working Abas");
    function showSignIn() {
      signInMobile.classList.add("active-left");
      signUpMobile.classList.remove("active-right");
      signInFormMobile.classList.add("active-form");
      signUpFormMobile.classList.remove("active-form");
      // console.log("I am running");
    }
    function showSignUp() {
      // console.log("I am working now");
      signUpMobile.classList.add("active-right");
      signInMobile.classList.remove("active-left");
      signInFormMobile.classList.remove("active-form");
      signUpFormMobile.classList.add("active-form");
      // console.log("I am running as well");
    }
    signInMobile.addEventListener("click", showSignIn);
    signUpMobile.addEventListener("click", showSignUp);
  } else if (
    window.getComputedStyle(desktopView).getPropertyValue("display") != "none"
  ) {
    console.log("I am working");
    function showSignIn() {
      signIn.classList.add("active-left");
      signUp.classList.remove("active-right");
      signInForm.classList.add("active-form");
      signUpForm.classList.remove("active-form");
      // console.log("I am running");
    }
    function showSignUp() {
      signUp.classList.add("active-right");
      signIn.classList.remove("active-left");
      signInForm.classList.remove("active-form");
      signUpForm.classList.add("active-form");
      // console.log("I am running as well");
    }
    signIn.addEventListener("click", showSignIn);
    signUp.addEventListener("click", showSignUp);
  } else {
    console.log("there was an error");
  }
}

document.addEventListener("DOMContentLoaded", screenSizeRender);
