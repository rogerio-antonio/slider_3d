const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".item");
const description = document.getElementById("description");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let angle = 0;
let current = 0;

// Pausar animação no mouseover
carousel.addEventListener("mouseover", () => {
  carousel.classList.add("pause");
});
carousel.addEventListener("mouseout", () => {
  carousel.classList.remove("pause");
});

// Atualizar descrição e efeito zoom
function updateActive() {
  items.forEach((item, index) => {
    item.classList.remove("active");
    if (index === current) {
      item.classList.add("active");
    }
  });
  description.innerText = items[current].dataset.text;
}

// Botões de navegação
next.addEventListener("click", () => {
  angle -= 60;
  carousel.style.transform = `rotateY(${angle}deg)`;
  current = (current + 1) % items.length;
  updateActive();
});

prev.addEventListener("click", () => {
  angle += 60;
  carousel.style.transform = `rotateY(${angle}deg)`;
  current = (current - 1 + items.length) % items.length;
  updateActive();
});

// Inicial
updateActive();
