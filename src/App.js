import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './components/Home';
import Contact from './components/Contact';
import ShoppingList from './components/ShoppingList';

import './App.css';

class App extends Component {
    render() {
        return(
            <div>
                <Route path="/" exact component={ Home } />
                <Route path="/contact" component={ Contact } />
                <Route path="/basket" component={ ShoppingList } />
            </div>
        )
    }
}

export default App;
