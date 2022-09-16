import './App.css';

import React from 'react'
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Footer from "./components/Footer"
import data from "./data"

function App() {
  const cards = data.map(item => {
    return (
        <Card
            key={item.id}
            item={item}
        />
    )
})
  return (
    <main>
      <Navbar />
      <section className="cards-list">
          {cards}
      </section>
      <Footer />
    </main>
  );
}

export default App;
