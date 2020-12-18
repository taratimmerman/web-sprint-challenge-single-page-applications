import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import PizzaMaker from './Components/PizzaMaker';
import NavBar from './Components/NavBar';
import Confirmation from './Components/Confirmation';

const initialFormValues = {
  size: '',
  sauce: false,
  topping: false,
  special: '',
}


const App = () => {
  return (
    <>
      <NavBar />
        <div>
          <Router>
            <div>
              <Route component={Home} path='/' exact />
              <Route component={PizzaMaker} path='/pizzamaker' />
              <Route component={Confirmation} path='/confrimation' />
            </div>
          </Router>
        </div>
      </>
  );
};
export default App;
