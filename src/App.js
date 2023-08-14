import React from 'react';
import logo from './logo.svg';
import { Router as BrowserRouter, Route } from "react-router-dom"
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
