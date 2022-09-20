import React from 'react';
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <React.Fragment>
      <section class="todoapp">
        <Header />
        <Content />
      </section>
      <Footer />
    </React.Fragment>
  )
}

export default App;
