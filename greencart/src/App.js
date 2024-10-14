import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/products" component={ProductList} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
};

export default App;
