import React from 'react'
import DeckHeader from './DeckHeader'
import DeckControls from './DeckControls'
import SceneControls from './SceneControls'
import SavedDecksList from './SavedDecksList'
import FocusedCard from './FocusedCard'
import CardsListTable from './CardsListTable'

/*** READ ME! ***
2016-03-31 | Phrancis
This file is full of artifacts from Angular that I have *no idea* how to even
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
    <FocusedCard />
    <CardsListTable />
  </div>
)

export default DeckBuilder