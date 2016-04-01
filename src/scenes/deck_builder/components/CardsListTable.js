import React from 'react'
import CardsListTableHeaders from './CardsListTableHeaders'
import CardRow from './CardRow'

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

const CardsListTable = () => (
  <table>
    <CardsListTableHeaders />
    // TODO render 1 row per card
    <CardRow />
  </table>
)

export default CardsListTable