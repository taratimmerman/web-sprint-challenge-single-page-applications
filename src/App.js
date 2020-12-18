import React, {useState} from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import PizzaMaker from './Components/PizzaMaker';
import NavBar from './Components/NavBar';
import Confirmation from './Components/Confirmation';

const App = () => {
  const [order, setOrder] = useState({})
  return (
    <div>
      <Router>
      <NavBar />
      <div className='App'>
            <Route path='/' exact component={Home}/>
            <Route path='/pizzamaker' component={() => <PizzaMaker setOrder={setOrder} />}/>
            <Route path='/confirmation' component={() => <Confirmation order={order} />}/>
      </div>
      </Router>
    </div>
  );
};
export default App;
