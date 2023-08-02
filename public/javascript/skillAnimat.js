const trigerDiv = document.querySelector(".skill-bar");
let hasRunFunction = false;

function increaseValueOnScroll() {
  // Get the skill bar and ch-wdt elements
  let skillBars = document.querySelectorAll(".skill-bar");
  let divArray = Array.from(document.querySelectorAll(".ch-wdt"));

  // Set the duration for the animation (3 seconds)
  const duration = 3000;

  // Function to animate the progress bar and the count
  function animateProgressBar(i, targetValue) {
    let startTime = null;
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min((progress / duration) * 100, 100);
      const currentValue = Math.round((targetValue * percentage) / 100);

      // Update the text content and width of the progress bar
      divArray[i].textContent = currentValue;
      divArray[i].style.width = currentValue + "%";
      skillBars[i].textContent = currentValue;

      // Keep animating until the duration is reached
      if (progress < duration) {
        requestAnimationFrame(step);
      } else {
        // Set the final value after reaching 100%
        divArray[i].textContent = targetValue;
      }
    }
    requestAnimationFrame(step);
  }

  // Loop through each skill bar and start the animation for each
  for (let i = 0; i < skillBars.length; i++) {
    let targetValue = Number(skillBars[i].textContent);
    animateProgressBar(i, targetValue);
  }
}

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries, oberver) => {
  if (entries[0].isIntersecting && !hasRunFunction) {
    increaseValueOnScroll();
    hasRunFunction = true;
  }
}, options);

observer.observe(trigerDiv);
