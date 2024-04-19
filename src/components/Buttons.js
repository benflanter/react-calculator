import React from "react";
import "./styles/Buttons.css";
// import CALCULATOR_BUTTONS from "./CalculatorButtons";

const Buttons = ({
  inputHandler,
  clearInput,
  backspace,
  changePlusMinus,
  calculateAns,
}) => {
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("equalbtn").click();
    }
  });

  return (
    <div className="show-btn">
      <button className="btn exp" onClick={inputHandler} data-cy="^">
        ^
      </button>
      <button className="btn exp" onClick={inputHandler} data-cy="(">
        (
      </button>
      <button className="btn exp" onClick={inputHandler} data-cy=")">
        )
      </button>
      <button className="btn exp" onClick={inputHandler} data-cy="√">
        √
      </button>
      <button className="btn exp" onClick={inputHandler} data-cy="X^2">
        x<sup>2</sup>
      </button>
      <button className="btn clr" onClick={clearInput} data-cy="AC">
        AC
      </button>
      <button className="btn clr" onClick={backspace} data-cy="delete">
        ⌫
      </button>
      <button className="btn exp" onClick={inputHandler} data-cy="log">
        log
      </button>
      <button className="btn exp" onClick={inputHandler} data-cy="%">
        ÷
      </button>
      <button className="btn exp" onClick={inputHandler} data-cy="%">
        %
      </button>
      <button className="btn" onClick={inputHandler} data-cy="7">
        7
      </button>
      <button className="btn" onClick={inputHandler} data-cy="8">
        8
      </button>
      <button className="btn" onClick={inputHandler} data-cy="9">
        9
      </button>
      <button className="btn exp" onClick={inputHandler} data-cy="X">
        x
      </button>
      <button className="btn exp" onClick={inputHandler} data-cy="X^3">
        x<sup>3</sup>
      </button>
      <button className="btn" onClick={inputHandler} data-cy="4">
        4
      </button>
      <button className="btn" onClick={inputHandler} data-cy="5">
        5
      </button>
      <button className="btn" onClick={inputHandler} data-cy="6">
        6
      </button>
      <button className="btn exp" onClick={inputHandler} data-cy="-">
        -
      </button>
      <button className="btn exp" onClick={inputHandler} data-cy="3√">
        <sup>3</sup>√
      </button>
      <button className="btn" onClick={inputHandler} data-cy="1">
        1
      </button>
      <button className="btn" onClick={inputHandler} data-cy="2">
        2
      </button>
      <button className="btn" onClick={inputHandler} data-cy="3">
        3
      </button>
      <button className="btn exp" onClick={inputHandler} data-cy="+">
        +
      </button>
      <button className="btn exp" onClick={inputHandler} data-cy="!">
        !
      </button>
      <button className="btn exp" onClick={changePlusMinus} data-cy="±">
        ±
      </button>
      <button className="btn" onClick={inputHandler} data-cy="0">
        0
      </button>
      <button className="btn exp" onClick={inputHandler} data-cy=".">
        .
      </button>
      <button
        className="btn exp equal"
        id="equalbtn"
        onClick={calculateAns}
        data-cy="="
      >
        =
      </button>
    </div>
  );
};

export default Buttons;
