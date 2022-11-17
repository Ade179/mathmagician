import React, { PureComponent } from 'react';
import './CSSmodules/Home.css';

class Home extends PureComponent {
  render() {
    return (
      <>
        <main data-testid="genesis">
          <h2 className="welcome">Welcome to our page</h2>
          <div className="lores">
            <p className="lore">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laborum maxime a ex quaerat nesciunt nostrum labore blanditiis voluptatum,
              repellendus sed, odio sit eveniet natus harum nisi
              voluptatem amet. Consequatur, consectetur.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laborum maxime a ex quaerat nesciunt
              nostrum labore blanditiis voluptatum, repellendus sed, odio sit eveniet
              natus harum nisi voluptatem amet. Consequatur, consectetur.
            </p>
            <p className="lore">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laborum maxime a ex quaerat nesciunt nostrum
              labore blanditiis voluptatum, repellendus sed,
              odio sit eveniet natus harum nisi voluptatem amet.
              Consequatur, consectetur.Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
              Laborum maxime a ex quaerat nesciunt nostrum
              labore blanditiis voluptatum, repellendus sed,
              odio sit eveniet natus harum nisi voluptatem amet.
              Consequatur, consectetur.
            </p>
          </div>
        </main>
      </>
    );
  }
}

export default Home;
