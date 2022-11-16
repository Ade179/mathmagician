import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const clickHandler = (e) => {
    const handled = calculate(state, e.target.innerText);
    return setState(handled);
  };

  const { total, next, operation } = state;
  return (
    <section className="cont">
      <div className="cta">Let us do some math!</div>
      <div className="container">
        <div className="screen">
          <span className="answer">
            { total }
            { operation }
            { next }
          </span>
        </div>
        <div className="buttons">
          <button type="button" onClick={clickHandler} className="white">+/-</button>
          <button type="button" onClick={clickHandler} className="white">AC</button>
          <button type="button" onClick={clickHandler} className="white">%</button>
          <button type="button" onClick={clickHandler} className="orange">÷</button>
          <button type="button" onClick={clickHandler} className="white">7</button>
          <button type="button" onClick={clickHandler} className="white">8</button>
          <button type="button" onClick={clickHandler} className="white">9</button>
          <button type="button" onClick={clickHandler} className="orange">x</button>
          <button type="button" onClick={clickHandler} className="white">4</button>
          <button type="button" onClick={clickHandler} className="white">5</button>
          <button type="button" onClick={clickHandler} className="white">6</button>
          <button type="button" onClick={clickHandler} className="orange">-</button>
          <button type="button" onClick={clickHandler} className="white">1</button>
          <button type="button" onClick={clickHandler} className="white">2</button>
          <button type="button" onClick={clickHandler} className="white">3</button>
          <button type="button" onClick={clickHandler} className="orange">+</button>
          <button type="button" onClick={clickHandler} className="white span2">0</button>
          <button type="button" onClick={clickHandler} className="white">.</button>
          <button type="button" onClick={clickHandler} className="orange">=</button>
        </div>
      </div>
    </section>
  );
}
export default Calculator;
