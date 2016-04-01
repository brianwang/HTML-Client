import React from 'react'
import Card from '../../../shared/components/Card'

const FocusedCard = (cardInfo) => (
  // TODO this is meant to display the currently selected card in focus
  // It should look just like a Card while in-game by sharing the same card model
  <div>
    <Card card-info={cardInfo} /*ng-show="cardInfo"*/></card>
  </div>
)

export default FocusedCard