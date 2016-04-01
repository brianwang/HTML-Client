import React from 'react'
import LoadingScreen from './LoadingScreen'
import DeckBuilder from './DeckBuilder'

const DeckBuilderLoading = () => (
  <div>
    // TODO show this only while deck builder is loading:
    <LoadingScreen />
    // TODO show this after deck duilber is done loading
    <DeckBuilder />
  </div>
)

export default DeckBuilderLoading