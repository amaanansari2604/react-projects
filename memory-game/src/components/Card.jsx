
export const Card = (card, onClick) => {
    return (
    <div className="card" onClick={() => onClick(card)}>
        <div className="card-front">?</div>
        <div className="card-back">
            {card.card.value}
        </div>
        </div>
    )
}