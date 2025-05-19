document.getElementById("animateBtn").addEventListener("click", function () {
    this.classList.add("animate");
  
    // Remove animation class after animation completes
    setTimeout(() => {
      this.classList.remove("animate");
    }, 500);
  });