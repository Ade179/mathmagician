import React from 'react';

class Calculator extends React.PureComponent {
  render() {
    return (
      <section className="cont">
        <div className="container">
          <div className="screen" />
          <div className="buttons">
            <button type="button" className="white">AC</button>
            <button type="button" className="white">+/-</button>
            <button type="button" className="white">%</button>
            <button type="button" className="orange">÷</button>
            <button type="button" className="white">7</button>
            <button type="button" className="white">8</button>
            <button type="button" className="white">9</button>
            <button type="button" className="orange">x</button>
            <button type="button" className="white">4</button>
            <button type="button" className="white">5</button>
            <button type="button" className="white">6</button>
            <button type="button" className="orange">-</button>
            <button type="button" className="white">1</button>
            <button type="button" className="white">2</button>
            <button type="button" className="white">3</button>
            <button type="button" className="orange">+</button>
            <button type="button" className="white span2">0</button>
            <button type="button" className="white">.</button>
            <button type="button" className="orange">=</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Calculator;
