import React, { PureComponent } from 'react';
import './CSSmodules/footer.css';

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
          <article className="contact">
            <div className="contacts">Conatct:+2348114374848</div>
          </article>
        </section>
      </>
    );
  }
}

export default Footer;
