import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'App.css';
import Header from 'components/Header';
import List from 'components/List';
import Home from 'components/Home';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <BrowserRouter>
            <Link to="/">Home</Link>
            <Link to="/list">List</Link>

            <Route exact path="/" component={Home} />
            <Route path="/list" component={List} />
        </BrowserRouter>
    </div>
  );
}

export default App;
