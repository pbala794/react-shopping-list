import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';

export default (
    <div>
        <Route path="/" component={App} />
        <Route path="/basket" component={App} />
    </div>
)