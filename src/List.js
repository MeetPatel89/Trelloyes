import React from 'react';
import Card from './Card';
import Store from './Store';


 function List (props) {
    
    
const cardLists = props.cardIds.map(function(cardId) {
    let card = Store.allCards[cardId]
    return <Card key={cardId} title={card.title} content={card.content}
    />
})

   return (
       
    <section className="List">
        <header className="List-header">
        <h2>{props.header}</h2>
        </header>
        <div className="List-cards">
        </div>
        {cardLists}
    </section>

   )
}


export default List;

