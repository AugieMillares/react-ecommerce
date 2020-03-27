import React from 'react';
import { Switch, Route, Link} from 'react-router-dom';

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./component/header/header.component";

import './App.css';


function App() {
  return (
    <div>
        <Header/>
        <Switch>
            <Route exact={true} path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
        </Switch>
    </div>
  );
}

export default App;
