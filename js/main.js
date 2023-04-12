const element = document.getElementById("myElement");
let position = window.innerWidth;

function animate() {
  position--;
  if (position < -element.offsetWidth) {
    position = window.innerWidth;
  }
  element.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(animate);
}

animate();