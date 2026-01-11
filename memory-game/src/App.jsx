import { GameHeader } from "./components/GameHeader";
import { Card } from "./components/Card";
import { useEffect, useState } from "react";

const cardValues = [
  "🍎", "🍌", "🍉", "🍇", "🍓", "🍒", "🍑", "🍍",
  "🍎", "🍌", "🍉", "🍇", "🍓", "🍒", "🍑", "🍍"
]

function App() {

  const [cards, setCards] = useState([])

  console.log(cardValues, "cardvalues")


  const initializeGame = () => {
    // shuffle the cards


    const finalCards = cardValues.map((value, index) => (
      {
        id: index,
        value,
        isFlipped: false,
        isMatched: false
      }
    ))

    setCards(finalCards)
  }

  useEffect(() => {
    initializeGame();
  }, [])

  const handleCardClick = (card) => {
    // don't allow card is already flipped

    console.log(card, "-----card---handleccard click")
    if (card.isFlipped || card.isMatched) {
      return;
    }

    const newCards = cards.map((c) => {
      if (c.id === card.id) {
        return { ...c, isFlipped: true };
      } else {
        return c;
      }
    });

    setCards(newCards)
  }
  return (
    <div className="app">
      <GameHeader score={2} moves={5} />

      <div className="cards-grid">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onClick={handleCardClick}
          />
        ))}
      </div>
y
    </div>
  )
}

export default App
