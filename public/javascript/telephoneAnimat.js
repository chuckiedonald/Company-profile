 // Function to toggle the animation class
 function toggleVibrateAnimation() {
    const telephoneIcon = document.querySelector('.telephone-icon');
    telephoneIcon.classList.toggle('vibrate-animation');
  }

  // Start the animation every 2 seconds
  const clr = setInterval(toggleVibrateAnimation, 2000);

  const tele = document.querySelector('.telephone-icon');
  const teleRmv = document.querySelector('.call-us');

  // stops the animation
  teleRmv.addEventListener('click',()=>{
    clearInterval(clr);
    tele.classList.remove('vibrate-animation');
  })