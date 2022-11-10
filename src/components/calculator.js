import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { total: 0, next: null, operation: null };
  }

  clickHandler =(e) => {
    const calculated = calculate(this.state, e.target.innerHTML);
    this.setState(calculated);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <section className="cont">
        <div className="container">
          <div className="screen">
            <span className="answer">
              {total}
              {operation}
              {next}
            </span>
          </div>
          <div className="buttons">
            <button type="button" onClick={this.clickHandler} className="white">+/-</button>
            <button type="button" onClick={this.clickHandler} className="white">AC</button>
            <button type="button" onClick={this.clickHandler} className="white">%</button>
            <button type="button" onClick={this.clickHandler} className="orange">÷</button>
            <button type="button" onClick={this.clickHandler} className="white">7</button>
            <button type="button" onClick={this.clickHandler} className="white">8</button>
            <button type="button" onClick={this.clickHandler} className="white">9</button>
            <button type="button" onClick={this.clickHandler} className="orange">x</button>
            <button type="button" onClick={this.clickHandler} className="white">4</button>
            <button type="button" onClick={this.clickHandler} className="white">5</button>
            <button type="button" onClick={this.clickHandler} className="white">6</button>
            <button type="button" onClick={this.clickHandler} className="orange">-</button>
            <button type="button" onClick={this.clickHandler} className="white">1</button>
            <button type="button" onClick={this.clickHandler} className="white">2</button>
            <button type="button" onClick={this.clickHandler} className="white">3</button>
            <button type="button" onClick={this.clickHandler} className="orange">+</button>
            <button type="button" onClick={this.clickHandler} className="white span2">0</button>
            <button type="button" onClick={this.clickHandler} className="white">.</button>
            <button type="button" onClick={this.clickHandler} className="orange">=</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Calculator;
