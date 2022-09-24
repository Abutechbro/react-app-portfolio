import './App.css';
import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Home from './pages/Home';



function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
