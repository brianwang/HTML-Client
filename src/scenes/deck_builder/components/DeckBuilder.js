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

      /*
        LIST OF ALL CARDS - Displays one full row below for every card 
        SERVER JSON name      | ref name           | Note
        -------------------------------------------------
        "SICKNESS"            | SICKNESS           | 1 or 0, or empty (for cards where n/a)
        "MANA_COST"           | MANA_COST          | n, or empty (for cards n/a)
        "ATTACK"              | ATTACK             | n, or empty (for cards n/a)
        "HEALTH"              | HEALTH             | n, or empty (for cards n/a)
        "ATTACK_AVAILABLE"    | ATTACK_AVAILABLE   | 1, or empty (when explicit 0 n/a)
        "flavor"              | flavor             | flavor, or empty
        "name"                | name               | name (cannot be empty)
        "description"         | effect             | effect, or empty
        "type"                | creatureType       | type, or empty (for non-creatures)
        "MAX_HEALTH"          | MAX_HEALTH         | n, or empty (for cards n/a)
        "SCRAP"               | SCRAP              | n, or empty (for cards n/a)
        "SCRAP_COST"          | SCRAP_COST         | n, or empty (for cards n/a)
      */
    <table>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Count</th>
        <th>Mana</th>
        <th>A / H</th>
        <th>Sick</th>
        <th>Akt?</th>
        <th>FX</th>
        <th>?</th>
      </tr>
      <tr data-ng-repeat="card in cards">
        <td>{card.properties.creatureType}</td>
        <td><a href /*data-ng-click="showDetails(card)"*/>{card.properties.name}</a></td>
        <td style="text-align: center;">
          // Controls to add or remove a card to deck, and counter to show "current / max" count 
          <div className="btn-group">
            // MINUS button 
            <button /*data-ng-click="decrement(card)"*/ type="button" className="btn btn-xs btn-default glyphicon glyphicon-minus"></button>
            // How many cards you selected for this deck, and what the max allowed is 
            <button type="button" className="btn btn-xs btn-default"><b>{$parent.currentDeck[card.id]} / {card.max}</b></button>
            // PLUS button 
            <button /*data-ng-click="increment(card)"*/ type="button" className="btn btn-xs btn-default glyphicon glyphicon-plus"></button>
          </div>
        </td>
        <td style="text-align: center;">{card.properties.MANA_COST}</td>
        <td style="font-weight: bold; text-align: center;">
          <span /*ng-show="card.properties.ATTACK"*/ style="font-size: 1.0em;">{card.properties.ATTACK}</span>
          <span /*ng-hide="card.properties.ATTACK"*/ style="font-size: 1.0em; color: red;">-</span>
          <span>/</span>
          <span /*ng-show="card.properties.HEALTH"*/ style="font-size: 1.0em;">{card.properties.HEALTH}</span>
          <span /*ng-hide="card.properties.HEALTH"*/ style="font-size: 1.0em; color: red;">-</span>
        </td>
        <td style="text-align: center;">{card.properties.SICKNESS}</td>
        <td style="text-align: center;">
          <span ng-show="card.properties.ATTACK_AVAILABLE" style="font-size: 0.8em; color: green;">Yes</span>
          <span ng-hide="card.properties.ATTACK_AVAILABLE" style="font-size: 0.8em; color: red;">No</span>
        </td>
        <td style="text-align: center;">// effect popover 
          <button type="button" className="btn btn-xs btn-default" popover-placement="top"
              popover="{card.properties.effect}" popover-title="{card.properties.name}"
              /*ng-show="card.properties.effect"*/>
            FX
          </button>
        </td>
        <td style="text-align: center;">// flavor tooltip 
          <button type="button" className="btn btn-xs btn-default" popover-placement="right"
              popover="{card.properties.flavor}"
              /*ng-show="card.properties.flavor"*/>
            ?
          </button>
        </td>
      </tr>
    </table>
  </div>
)

export default DeckBuilder