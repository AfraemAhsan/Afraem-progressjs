const progress = document.getElementById("progress");
const prev = document.getElementById("pre");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentAct = 1;

next.addEventListener("click", () => {
  currentAct++;

  if (currentAct > circles.length) {
    currentAct = circles.length;
  }
  update();
});

pre.addEventListener("click", () => {
  currentAct--;

  if (currentAct < 1) {
    currentAct = 1;
  }
  update();
});
function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentAct) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentAct === 1) {
    pre.disabled = true;
  } else if (currentAct === circles.length) {
    next.disabled = true;
  } else {
    pre.disabled = false;
    next.disabled = false;
  }
}
