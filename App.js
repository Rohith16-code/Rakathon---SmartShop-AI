import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import SunglassesPreview from './components/SunglassesPreview';
import ClothesPreview from './components/ClothesPreview';
import Products from './components/products';  // Import the Products component

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/try/cloth">
          <ClothesPreview/>
        </Route>              
        <Route path="/try/sunglasses">
          <SunglassesPreview/>
        </Route>
        <Route path="/products">  {/* Add this Route for Products page */}
          <Products/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>   
  );
}

export default App;
