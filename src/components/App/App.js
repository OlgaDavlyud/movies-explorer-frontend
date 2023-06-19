import React from 'react';
import './App.css';
import '../../index.css'
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="page">
      <Header />
      <Promo />
      <Footer />
    </div>
  );
}

export default App;
