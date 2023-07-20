import './App.css'

import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'

import Data from './components/Data'

function App() {
    const cards = Data.map(card => 
        <Card 
            key={card.key}
            {...card}
        />)

  return (
    <>
        <Header />
        {cards}
        <Footer />
    </>
    
  )
}

export default App
