document.addEventListener("DOMContentLoaded", function () {
  function createDiamond() {
    const diamond = document.createElement("div");
    diamond.classList.add("diamond");

    // Set random position and animation duration
    const randomLeft = Math.random() * window.innerWidth;
    const randomDuration = 3 + Math.random() * 2; // 3 to 5 seconds

    diamond.style.left = `${randomLeft}px`;
    diamond.style.animationDuration = `${randomDuration}s`;

    document.body.appendChild(diamond);

    // Remove diamond after animation ends
    diamond.addEventListener("animationend", () => {
      diamond.remove();
    });
  }

  // Create multiple diamonds at random intervals
  function generateDiamonds() {
    setInterval(createDiamond, 250); // Generate a diamond every 500ms
  }

  generateDiamonds();
});
