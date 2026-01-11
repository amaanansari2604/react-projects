import { GameHeader } from "./components/GameHeader";
import { Card } from "./components/Card";
import { useEffect, useState } from "react";

const cardValues = [
  "🍎", "🍌", "🍉", "🍇", "🍓", "🍒", "🍑", "🍍",
  "🍎", "🍌", "🍉", "🍇", "🍓", "🍒", "🍑", "🍍"
]

function App() {

  const [cards, setCards] = useState([])
  const [flippedCards, setFlippedCards] = useState([])



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

    const newFlippedCards = [...flippedCards, card.id]
    setFlippedCards(newFlippedCards)

    //check if the two cards are flipped

    if (flippedCards.length === 1){
      const firstCard = cards[flippedCards[0]];

      if(firstCard.value === card.value){
        alert("match")
      } else{
        //flip back card 1 and card 2

        const flippedBackCard = newCards.map((c) => {
          if (newFlippedCards.includes(c.id) || c.id === card.id ) {
            return {...c, isFlipped: false}
          } else {
            return c;
          }
        })

        setCards(flippedBackCard)
      }
    }
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
