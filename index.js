import { Tween } from "./Tween.js";

const circle = document.querySelector(".circle");
const startBtn = document.getElementById("startBtn");

const tween = new Tween();

startBtn.addEventListener("click", () => {
    const easingType = "linear";
  tween.animate({
    from: { radius: 0, rotate: 0 },
    to: { radius: 50, rotate: 360 },
    duration: 1000,
    easing:  easingType,

    onUpdate(data) {
      circle.style.borderRadius = `${data.radius}px`;
      circle.style.transform = `rotate(${data.rotate}deg)`;
    },

    onComplete(data) {
      console.log(`Animation completed! -> Easing used: ${easingType}`, data);
    },
  });
});
