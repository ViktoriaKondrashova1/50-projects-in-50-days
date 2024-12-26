const cards = document.querySelectorAll(".panel");

for (const card of cards) {
  card.addEventListener("click", (e) => {
    const activeCard = document.querySelector(".active");
    if (!e.target.classList.contains("active")) {
      activeCard.classList.remove("active");
      e.target.classList.add("active");
    }
  });
}
