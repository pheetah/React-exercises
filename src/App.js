import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import Meals from './components/meals/Meals';

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <main>
        <Meals/>
      </main>
    </React.Fragment>
  );
}

export default App;
