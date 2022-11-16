import React, { PureComponent } from 'react';
import './CSSmodules/quote.css';

class Quote extends PureComponent {
  render() {
    return (
      <>
        <section className="sect1">
          <div className="quotes">
            <h2 className="mathematician">Mathematics is not about numbers, equations, computations or algorithms; it is about understanding - William Paul Thurston.</h2>
          </div>
        </section>
      </>
    );
  }
}

export default Quote;
