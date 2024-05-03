import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  // for clock
  const [h, setH] = useState<number>(0);
  const [m, setM] = useState<number>(0);
  const [s, setS] = useState<number>(0);
  useEffect(() => {
    var intervalID = setInterval(() => {
      const today = new Date();
      const h = (today.getHours() % 12) + today.getMinutes() / 59; // 22 % 12 = 10pm
      const hAngle = h * 30; // 12 * 30 = 360deg
      const m = today.getMinutes(); // 0 - 59
      const mAngle = m * 6;
      const s = today.getSeconds(); // 0 - 59
      const sAngle = s * 6; // 60 * 6 = 360deg

      setH(hAngle);
      setM(mAngle);
      setS(sAngle);
    }, 500);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  // for wave circle
  const [toggle, setToggle] = useState(false);

  // for slider
  const sliderBoxRef = useRef<HTMLDivElement>(null);
  const sliderBtnRef = useRef<HTMLSpanElement>(null);
  const sliderColorRef = useRef<HTMLSpanElement>(null);
  const sliderTooltipRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const box = sliderBoxRef.current;
    const btn = sliderBtnRef.current;
    const color = sliderColorRef.current;
    const tooltip = sliderTooltipRef.current;
    if (!box || !btn || !color || !tooltip) return;

    const updateUi = (e: MouseEvent) => {
      e.preventDefault();
      let targetRect = box.getBoundingClientRect();
      let x = e.pageX - targetRect.left + 10;
      if (x > targetRect.width) {
        x = targetRect.width;
      }
      if (x < 0) {
        x = 0;
      }
      btn.style.left = x - 10 + "px";

      // get the position of the button inside the container (%)
      let percentPosition = (x / targetRect.width) * 100;

      // color width = position of button (%)
      color.style.width = percentPosition + "%";

      // move the tooltip when button moves, and show the tooltip
      tooltip.style.left = x - 13 + "px";
      tooltip.style.opacity = "1";

      // show the percentage in the tooltip
      tooltip.textContent = Math.round(percentPosition) + "%";
    };

    const onMouseUp = (e: MouseEvent) => {
      window.removeEventListener("mousemove", updateUi);
      tooltip.style.opacity = "0";

      btn.addEventListener("mouseover", function () {
        tooltip.style.opacity = "1";
      });

      btn.addEventListener("mouseout", function () {
        tooltip.style.opacity = "0";
      });
    };

    box.addEventListener("mousedown", (e) => {
      updateUi(e);
      window.addEventListener("mousemove", updateUi);
      window.addEventListener("mouseup", onMouseUp);
    });
    return () => {
      box.removeEventListener("mousedown", () => {});
      box.removeEventListener("mouseover", () => {});
      box.removeEventListener("mouseout", () => {});
      window.removeEventListener("mousemove", () => {});
      window.removeEventListener("mouseup", () => {});
    };
  }, [sliderBoxRef, sliderBtnRef, sliderColorRef, sliderTooltipRef]);

  return (
    <div className="container">
      <div className="components">
        <div className="switch">
          <div className="switch__1">
            <input id="switch-1" type="checkbox" />
            <label htmlFor="switch-1"></label>
          </div>

          <div className="switch__2">
            <input id="switch-2" type="checkbox" defaultChecked />
            <label htmlFor="switch-2"></label>
          </div>
        </div>

        <div className="checkbox">
          <div className="checkbox__1">
            <input id="checkbox-1" type="checkbox" />
            <label htmlFor="checkbox-1">
              <i className="material-icons">done</i>
            </label>
          </div>
          <div className="checkbox__2">
            <input id="checkbox-2" type="checkbox" defaultChecked />
            <label htmlFor="checkbox-2">
              <i className="material-icons">done</i>
            </label>
          </div>
        </div>

        <div className="radio">
          <div className="radio__1">
            <input id="radio-1" type="radio" name="radio" value="1" />
            <label htmlFor="radio-1"></label>
          </div>

          <div className="radio__2">
            <input
              id="radio-2"
              type="radio"
              name="radio"
              value="2"
              defaultChecked
            />
            <label htmlFor="radio-2"></label>
          </div>
        </div>

        <div className="btn btn__primary">
          <p>Button</p>
        </div>
        <div className="btn btn__secondary">
          <p>Button</p>
        </div>

        <div className="clock">
          <div
            className="hand hours"
            style={{ transform: `rotate(${h}deg)` }}
          ></div>
          <div
            className="hand minutes"
            style={{ transform: `rotate(${m}deg)` }}
          ></div>
          <div
            className="hand seconds"
            style={{ transform: `rotate(${s}deg)` }}
          ></div>
          <div className="point"></div>
          <div className="marker">
            <span className="marker__1"></span>
            <span className="marker__2"></span>
            <span className="marker__3"></span>
            <span className="marker__4"></span>
          </div>
        </div>

        <div className="chip">
          <div className="chip__icon">
            <i className="material-icons">palette</i>
          </div>
          <p>Neumorphic Design</p>
          <div className="chip__close">
            <i className="material-icons">close</i>
          </div>
        </div>

        <div className="circle">
          <span
            className={`circle__btn ${toggle ? "shadow" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            <i className={`material-icons pause ${toggle ? "visibility" : ""}`}>
              pause
            </i>
            <i className={`material-icons play ${toggle ? "visibility" : ""}`}>
              play_arrow
            </i>
          </span>
          <span className={`circle__back-1 ${toggle ? "paused" : ""}`}></span>
          <span className={`circle__back-2 ${toggle ? "paused" : ""}`}></span>
        </div>

        <div className="form">
          <input
            type="text"
            className="form__input"
            placeholder="Type anything..."
          />
        </div>

        <div className="search">
          <input
            type="text"
            className="search__input"
            placeholder="Search..."
          />
          <div className="search__icon">
            <i className="material-icons">search</i>
          </div>
        </div>

        <div className="segmented-control">
          <input
            type="radio"
            name="radio2"
            value="3"
            id="tab-1"
            defaultChecked
          />
          <label htmlFor="tab-1" className="segmented-control__1">
            <p>Tab 1</p>
          </label>

          <input type="radio" name="radio2" value="4" id="tab-2" />
          <label htmlFor="tab-2" className="segmented-control__2">
            <p>Tab 2</p>
          </label>

          <input type="radio" name="radio2" value="5" id="tab-3" />
          <label htmlFor="tab-3" className="segmented-control__3">
            <p>Tab 3</p>
          </label>

          <div className="segmented-control__color"></div>
        </div>

        <div className="icon">
          <div className="icon__home">
            <i className="material-icons">home</i>
          </div>
          <div className="icon__account">
            <i className="material-icons">person</i>
          </div>
          <div className="icon__settings">
            <i className="material-icons">settings</i>
          </div>
        </div>

        <div className="slider">
          <div className="slider__box" ref={sliderBoxRef}>
            <span className="slider__btn" id="find" ref={sliderBtnRef}></span>
            <span className="slider__color" ref={sliderColorRef}></span>
            <span className="slider__tooltip" ref={sliderTooltipRef}>
              50%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
