import React from 'react'
import DeckHeader from './DeckHeader'
import DeckControls from './DeckControls'
import SceneControls from './SceneControls'
import SavedDecksList from './SavedDecksList'
import CardsListTable from './CardsListTable'

/*** READ ME! ***
2016-03-31 | Phrancis
This component (in its subs) is full of artifacts from Angular that I have *no idea* how to even
begin writing in a way that represents something usable with React/Redux.
I have left many of the Angular artifacts as commented-out code for now, for the sake of
documentation. These can safely and should be removed as React/Redux is implemented.
*****************/

const DeckBuilder = () => (
  <div>
    <DeckHeader />
    <DeckControls />
    <SceneControls />
    <SavedDecksList />
    // NOTE Perhaps this could be part of the Redux Store under "focusedCard"
    // See https://github.com/Cardshifter/HTML-Client/commit/98ab517501e1cce37c136b9be6b4d4e74fe8cc3a#commitcomment-16930473
    // TODO make this work, a card should be shown as focused when it is clicked, to show its actual
    // in-game form. 
    <Card {...cardInfo} focused />
    <CardsListTable />
  </div>
)

export default DeckBuilder