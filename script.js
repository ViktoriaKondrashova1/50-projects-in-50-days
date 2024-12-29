const percent = document.querySelector(".loading-text");
const image = document.querySelector(".bg");

let counter = 0;

let loading = setInterval(() => {
  counter++;
  percent.innerText = `${counter}%`;
  image.style = `filter: blur(${scale(counter, 0, 100, 30, 0)}px)`;
  percent.style.opacity = scale(counter, 0, 100, 1, 0);
  if (counter === 100) clearInterval(loading);
}, 30);

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
