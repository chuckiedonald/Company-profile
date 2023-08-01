function increaseValueOnScroll() {
  const skillBars = document.querySelectorAll('.skill-bar');
  const duration = 2000; // 2 seconds

  function increaseValue(skillBar, targetValue, targetDivClass) {
    let currentValue = 0;
    const targetDivs = document.querySelectorAll(`.${targetDivClass}`);

    const interval = setInterval(() => {
      if (currentValue <= targetValue) {
        skillBar.textContent = currentValue;
        targetDivs.forEach((div) => {
          div.style.width = currentValue + '%';
        });
        currentValue++;
      } else {
        clearInterval(interval);
      }
    }, duration / targetValue);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const targetValue = parseInt(entry.target.textContent);
        const targetDivClass = entry.target.dataset.target;
        increaseValue(entry.target, targetValue, targetDivClass);
        observer.unobserve(entry.target);
      }
    });
  });

  for (let i = 0; i < skillBars.length; i++) {
    observer.observe(skillBars[i]);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  increaseValueOnScroll();
});
