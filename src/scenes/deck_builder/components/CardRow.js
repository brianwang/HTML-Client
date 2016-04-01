import React from 'react'

const CardRow = ({ card }) => (
  // TODO the {card.properties.creatureType} is artifact from Angular
  // and needs to be adaped to React/Redux implementation
  <tr /*data-ng-repeat="card in cards"*/>
    <td>
      {card.properties.creatureType}
    </td>
    <td>
      // NOTE this link must bring the card into focus
      <a href /*data-ng-click="showDetails(card)"*/>
        {card.properties.name}
      </a>
    </td>
    <td style="text-align: center;">
      // Controls to add or remove a card to deck, and counter to show "current / max" count 
      <div className="btn-group">
        // NOTE minus/decrement button 
        <button 
            /*data-ng-click="decrement(card)"*/ 
            type="button" 
            className="btn btn-xs btn-default glyphicon glyphicon-minus">
        </button>
        // How many of this card selected for this deck, and what the max allowed is 
        <button 
            type="button" 
            className="btn btn-xs btn-default">
          <b>{$parent.currentDeck[card.id]} / {card.max}</b>
        </button>
        // NOTE plus/increment button 
        <button 
            /*data-ng-click="increment(card)"*/ 
            type="button" 
            className="btn btn-xs btn-default glyphicon glyphicon-plus">
        </button>
      </div>
    </td>
    <td style="text-align: center;">
      {card.properties.MANA_COST}
    </td>
    <td style="font-weight: bold; text-align: center;">
      // NOTE 'ATTACK' display
      <span /*ng-show="card.properties.ATTACK"*/ style="font-size: 1.0em;">
        {card.properties.ATTACK}
      </span>
      <span /*ng-hide="card.properties.ATTACK"*/ style="font-size: 1.0em; color: red;">
        {"-"}
      </span>
      <span>
        {"/"}
      </span>
      // NOTE 'HEALTH' display
      <span /*ng-show="card.properties.HEALTH"*/ style="font-size: 1.0em;">
        {card.properties.HEALTH}
      </span>
      <span /*ng-hide="card.properties.HEALTH"*/ style="font-size: 1.0em; color: red;">
        {"-"}
      </span>
    </td>
    <td style="text-align: center;">
      {card.properties.SICKNESS}
    </td>
    <td style="text-align: center;">
      <span ng-show="card.properties.ATTACK_AVAILABLE" style="font-size: 0.8em; color: green;">
        Yes
      </span>
      <span ng-hide="card.properties.ATTACK_AVAILABLE" style="font-size: 0.8em; color: red;">
        No
      </span>
    </td>
    <td style="text-align: center;">
      // effect popover 
      <button 
          type="button" 
          className="btn btn-xs btn-default" 
          popover-placement="top"
          popover="{card.properties.effect}" 
          popover-title="{card.properties.name}"
          /*ng-show="card.properties.effect"*/>
        FX
      </button>
    </td>
    <td style="text-align: center;">
      // flavor text popover 
      <button 
          type="button" 
          className="btn btn-xs btn-default" 
          popover-placement="right"
          popover="{card.properties.flavor}"
          /*ng-show="card.properties.flavor"*/>
        {"?"}
      </button>
    </td>
  </tr>
)

export default CardRow