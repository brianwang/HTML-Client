import React from 'react'

const DeckHeader = ({ deckName, maxCards }) => (
  <div>
    <h1>
      Deck name: {deckName}
    </h1>
    <h2>
      // NOTE getTotalSelected() is an artifact from Angular and needs re-implemented
      {getTotalSelected()} / {maxCards}
    </h2>
  </div>
)

export default DeckHeader