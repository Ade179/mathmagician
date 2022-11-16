import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Calculator from './components/calculator';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Footer from './components/Footer';
import Quote from './components/Quote';
import './App.css';

class App extends React.PureComponent {
  render() {
    return (
      <>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/calculator" element={<Calculator />} />
          <Route exact path="/quotes" element={<Quote />} />
        </Routes>
        <Footer />
      </>
    );
  }
}

export default App;
