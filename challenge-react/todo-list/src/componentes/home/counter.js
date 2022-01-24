import { useState } from "react";

export function Counter() {
  const title = "";

  const [state, setState] = useState({
    counter: 0,
  });

  const handleChange = (increment) => {
    if (increment === 0) {
      setState({
        counter: state.counter * increment,
        clicks: state.clicks + 1,
      });
    } else {
      setState({
        counter: state.counter + increment,
        clicks: state.clicks + 1,
      });
    }
  };

  const template = (
    <>
      <p className="info">0 gentlemen pointing at you</p>
      <button className="button button--select">Select all</button>

      <h3>Counter</h3>
      <div className="counter">
        <div className="counter__h3">{state.counter}</div>
        <div className="counter-buttons">
          <button
            type="button"
            className="counter-buttons__button"
            onClick={(evt) => handleChange(+1)}
          >
            +
          </button>
          <button
            type="button"
            className="counter-buttons__button"
            onClick={(evt) => handleChange(-1)}
          >
            -
          </button>
          <button
            type="button"
            className="counter-buttons__button"
            onClick={(evt) => handleChange(0)}
          >
            Reset
          </button>
        </div>
        <div className="counter__h3">Clicks: {state.clicks}</div>
      </div>
    </>
  );
  return template;
}
