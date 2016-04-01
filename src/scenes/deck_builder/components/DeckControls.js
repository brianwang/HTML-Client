import React from 'react'

const DeckControls = () => (
  <form>
    <label>
      Save deck as:
    </label>
    <input 
        /*data-ng-model="deckName"*/ 
        type="text" />
    <input 
        /*data-ng-click="saveDeck()"*/ 
        type="submit" 
        value="Save Deck" 
        className="btn btn-xs btn-primary" />
  </form>
)

export default DeckControls