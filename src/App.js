import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage';

function App() {
  return (

    // BEM
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path='/search' component={SearchPage} />
          <Route path='/' component={Home} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
