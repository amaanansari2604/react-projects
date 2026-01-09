import { GameHeader } from "./components/GameHeader";
import { Card } from "./components/Card";
import { useState } from "react";

const cardValues = [
   "🍎", "🍌", "🍉", "🍇", "🍓", "🍒", "🍑", "🍍",
   "🍎", "🍌", "🍉", "🍇", "🍓", "🍒", "🍑", "🍍"
]

function App() {

  const [cards, setCards] = useState([])

  const initializeGame = () => {
    // shuffle the cards

    const finalCards = cardValues.map((value, index)=>(
        
    ))
  }

  return (
    <div className="app">
      <GameHeader score={2} moves={5} />

      <div className="cards-grid">
        {cardValues.map((card) => (
          <Card card={card}/>
        ))}
      </div>
    </div>
  )
}

export default App
