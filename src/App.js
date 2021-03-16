import React, { useState } from 'react';
import Dropdown from './components/Navbar/Dropdown';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Homepage';
import About from './pages/Aboutpage';
import Services from './pages/ServicesPage';
import Contact from './pages/Contactpage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Router>
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
