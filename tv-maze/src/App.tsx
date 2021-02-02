import React from 'react';
import {HomePage} from './pages/HomePage';
import {ShowPage} from './pages/ShowPage';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/show/:id">
          <ShowPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;