const filterBtns = document.querySelectorAll(".project_filter button");
const projectCards = document.querySelectorAll(".project_card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;

    filterBtns.forEach((button) => {
      button.classList.remove("active");
    });

    btn.classList.add("active");

    projectCards.forEach((card) => {
      const cardCategory = card.dataset.category;

      if (category === "all" || category === cardCategory) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});