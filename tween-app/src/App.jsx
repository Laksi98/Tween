import { useRef, useState } from "react";
import { Tween, Easings } from "./Tween";
import "./App.css";

export default function App() {
  const circleRef = useRef(null);
  const [easing, setEasing] = useState("linear");
  const tween = new Tween();

  const startAnimation = () => {
    tween.animate({
      from: { radius: 0, rotate: 0 },
      to: { radius: 50, rotate: 360 },
      duration: 1000,
      easing,
      onUpdate: (data) => {
        circleRef.current.style.borderRadius = `${data.radius}px`;
        circleRef.current.style.transform = `rotate(${data.rotate}deg)`;
      },
      onComplete: () => console.log("Done!"),
    });
  };

  return (
    <div className="app-container">
      <div className="card">
        <h2 className="title">Tween Animation Easing </h2>

        <select
          value={easing}
          onChange={(e) => setEasing(e.target.value)}
          className="select-box"
        >
          {Object.keys(Easings).map((ease) => (
            <option key={ease} value={ease}>
              {ease}
            </option>
          ))}
        </select>

        <button onClick={startAnimation} className="start-btn">
          Start Animation
        </button>

        <div ref={circleRef} className="circle"></div>
      </div>
    </div>
  );
}
