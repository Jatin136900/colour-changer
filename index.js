  const colors = ["red", "green", "blue", "yellow", "purple", "orange"];
const hulk = document.querySelectorAll(".box");
hulk.forEach((box) => {
  box.addEventListener("click", () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    box.style.backgroundColor = randomColor;
    box.style. border= '10px solid black';
  });
});