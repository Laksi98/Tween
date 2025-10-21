import { Tween } from "./Tween.js";

const circle = document.querySelector(".circle");

const tween = new Tween();
tween.animate({
  from: { r: 0 },
  to: { r: 50 },
  duration: 1000,
  onUpdate(data) {
    circle.style.borderRadius = `${data.r}px`;
  },
  onComplete(data) {
    console.log("Animation completed!", data);
  },
});
