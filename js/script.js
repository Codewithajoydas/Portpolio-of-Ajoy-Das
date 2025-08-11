document.querySelectorAll("li").forEach((li) => {
  li.addEventListener("click", () => {
    document
      .querySelectorAll("li")
      .forEach((el) => el.classList.remove("active"));
    li.classList.add("active");
  });
});
