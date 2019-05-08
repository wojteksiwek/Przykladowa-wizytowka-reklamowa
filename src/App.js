import React from 'react';
import './App.css';
import Nav from './components/Nav.js'
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
