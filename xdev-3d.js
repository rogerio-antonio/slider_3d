const carousel = document.querySelector(".carousel");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let angle = 0;

// Para pausar a rotação automática ao clicar
carousel.addEventListener("mouseover", () => {
  carousel.classList.add("pause");
});
carousel.addEventListener("mouseout", () => {
  carousel.classList.remove("pause");
});

// Botões de navegação
next.addEventListener("click", () => {
  angle -= 60;
  carousel.style.transform = `rotateY(${angle}deg)`;
});

prev.addEventListener("click", () => {
  angle += 60;
  carousel.style.transform = `rotateY(${angle}deg)`;
});
