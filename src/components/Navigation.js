import React, { PureComponent } from 'react';
import './CSSmodules/Navigation.css';
import { Link } from 'react-router-dom';

class Navigation extends PureComponent {
  render() {
    return (
      <>
        <div className="nav-bar" data-testId="nav">
          <div className="logo">
            <h1 className="magicians">Math Magicians</h1>
          </div>
          <nav className="nav">
            <Link className="links" to="/">Home</Link>
            |
            <Link className="links" to="/calculator">Calculator</Link>
            |
            <Link className="links" to="/quotes">Quotes</Link>
          </nav>
        </div>
      </>
    );
  }
}

export default Navigation;
