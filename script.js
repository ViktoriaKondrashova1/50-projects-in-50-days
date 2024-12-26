const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const progress = document.querySelector(".progress");
const steps = document.querySelectorAll(".step");

let current = 1;

next.addEventListener("click", () => {
  current++;
  steps.forEach((step) => {
    if (step.innerText === `${current}`) {
      step.classList.add("active");
    }
  });
  const active = document.querySelectorAll(".active");
  progress.style.width = `${((active.length - 1) / (steps.length - 1)) * 100}%`;
  if (current === 4) {
    next.disabled = true;
    prev.disabled = false;
  }
});

prev.addEventListener("click", () => {
  steps.forEach((step) => {
    if (step.innerText === `${current}`) {
      step.classList.remove("active");
    }
  });
  current--;
  const active = document.querySelectorAll(".active");
  progress.style.width = `${((active.length - 1) / (steps.length - 1)) * 100}%`;
  if (current === 1) {
    next.disabled = false;
    prev.disabled = true;
  }
});
