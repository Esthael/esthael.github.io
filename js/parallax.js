document.addEventListener("mousemove", parallax);
function parallax(e) {
  this.querySelectorAll(".imagemouv").forEach((imagemouv) => {
    const speed = imagemouv.getAttribute("data-speed");
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;
    imagemouv.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}
