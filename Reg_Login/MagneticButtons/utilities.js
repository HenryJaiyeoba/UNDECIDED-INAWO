function range(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// swapping between sign in and sign out
function addEvent(element, classValue) {
  element.addEventListener("click", () => {
    if (element.classList.contains(classValue)) {
      element.classList.remove(classValue);
    } else {
      element.classList.add(classValue);
    }
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const signIn = document.getElementById("toggle1");
  const signUp = document.getElementById("toggle2");

  addEvent(signIn, "active-left");
  addEvent(signUp, "active-right");
});
