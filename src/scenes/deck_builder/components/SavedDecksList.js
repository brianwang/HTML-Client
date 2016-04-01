import React from 'react'

const SavedDecksList = () => (
  // List of saved decks, with `Delete` button 
  <ul>
    // TODO repeat the <li> for each deck
    <li /*data-ng-repeat="deck in savedDecks"*/>
      <a href /*data-ng-click="switchDeck(deck)"*/>
        {deck.name}
      </a>
      <input 
          /*data-ng-click="deleteDeck(deck.name)"*/ 
          type="button" 
          value="Delete" 
          className="btn btn-xs btn-danger" />
    </li>
  </ul>
)

export default SavedDecksList