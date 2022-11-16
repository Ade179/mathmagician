import React, { PureComponent } from 'react';
import './CSSmodules/footer.css';
import { Link } from 'react-router-dom';

class Footer extends PureComponent {
  render() {
    return (
      <>
        <section className="thesect">
          <div className="logo">
            <h1 className="magicians">Math Magicians</h1>
          </div>
          <div>
            <h2 className="maker">Created by Daniel</h2>
          </div>
          <nav className="nav">
            <Link className="links" to="/">Home</Link>
            |
            <Link className="links" to="/calculator">Calculator</Link>
            |
            <Link className="links" to="/quotes">Quotes</Link>
          </nav>
        </section>
      </>
    );
  }
}

export default Footer;
