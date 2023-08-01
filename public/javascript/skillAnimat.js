function increaseValueOnScroll() {
  const skillBars = document.querySelectorAll('.skill-bar');
  const targetDivs = document.querySelectorAll('.ch-wdt');
  const duration = 2000; // 2 seconds

  function animateWidthChange(element, targetValue, duration) {
    let currentValue = 0;
    const incrementValue = targetValue / (duration / 1000);

    const interval = setInterval(() => {
      if (currentValue <= targetValue) {
        element.textContent = currentValue;
        element.style.width = (currentValue / targetValue) * 100 + '%';
        currentValue += incrementValue;
      } else {
        clearInterval(interval);
      }
    }, 1000 / incrementValue);
  }

  skillBars.forEach((skillBar, index) => {
    const targetValue = parseInt(skillBar.textContent);
    animateWidthChange(skillBar, targetValue, duration);
    if (targetDivs[index]) {
      animateWidthChange(targetDivs[index], targetValue, duration);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  increaseValueOnScroll();
});
