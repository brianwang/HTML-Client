import React from 'react'

/*** READ ME! ***
2016-03-31 | Phrancis
This file is full of artifacts from Angular that I have *no idea* how to even
begin writing in a way that represents something usable with React/Redux.
I have left many of the Angular artifacts as commented-out code for now, for the sake of
documentation. These can safely and should be removed as React/Redux is implemented.
*****************/

const Card = ({ doingAction, targets, actions, card }) => (
  <div className="card card-outer">
    // TODO Find a suitable replacement for ng-FitText
    // Apply to fields in this model whose length may vary significantly, for example card descriptions 
    // and flavor text, to avoid resizing the card due to line breaks to fit the text.
  
    // not sure this is needed; left over from Angular version... delete if not needed:
    <div className="test">
      doingAction: {doingAction} targets: {targets} actions: {actions} card: {card}
    </div>
    // card name
    <div>
      <div className="card-name">
        <a href 
        /*ng-click="selectEntity(card)"*/ 
        /*ng-className="{'selected': card.selected, 'targetable': doingAction && targets.indexOf(card.id) !== -1}"*/
        >
          {card.properties.name}
        </a>
      </div>

    </div>
    // card image
    <div style="clear:both;">
      <div style="text-align: center;">
        <img style="width: 160px; height: 120px;" className="card-image" />
      </div>
    </div>
    // card type
    <div className="card-type">
      {card.properties.creatureType}
    </div>
    // card statistics
    <div>
      // mana cost
      <div style="float: left; padding: 5px">
        <button className="btn btn-sm btn-info active glyphicon glyphicon-tint" style="cursor:default">
          {card.properties.MANA_COST}
        </button>
      </div>
      <div style="float: right; padding: 5px;" className="btn-group">
        // attack
        <button /*ng-show="card.properties.ATTACK"*/ className="btn btn-sm btn-danger active glyphicon glyphicon-screenshot" style="cursor:default">
          {card.properties.ATTACK}
        </button>
        <button /*ng-hide="card.properties.ATTACK"*/ className="btn btn-sm btn-danger active glyphicon glyphicon-screenshot" style="cursor:default">
          -
        </button>
        // health
        <div className="card-property">
          <button /*ng-show="card.properties.HEALTH"*/ className="btn btn-sm btn-success active glyphicon glyphicon-heart" style="cursor:default">
            {card.properties.HEALTH}
          </button>
          <button /*ng-hide="card.properties.HEALTH"*/ className="btn btn-sm btn-success active glyphicon glyphicon-heart" style="cursor:default">
            -
          </button>
          <dynamic-animation items="card.animations.HEALTH" />
        </div>
      </div>
    </div>
    <div style="clear: both;">
      <div style="float: left; padding: 5px; text-align: center;">
        // scrap cost
        <button /*ng-show="card.properties.SCRAP_COST"*/ className="btn btn-xs btn-primary active glyphicon glyphicon-wrench" style="cursor:default">
          {card.properties.SCRAP_COST}
        </button>
      </div>
      <div /*ng-show="card.properties.SCRAP"*/ style="float: left; padding: 5px; text-align: center;">
        // scrap value
        <button className="btn btn-xs btn-primary active glyphicon glyphicon-cog" style="cursor:default">
          {card.properties.SCRAP}
        </button>
      </div>
      // flavor text
      <div /*ng-show="card.properties.flavor"*/ style="float: right; padding: 5px; text-align: center;">
        <button type="button" className="btn btn-xs btn-primary glyphicon glyphicon-book"
            popover-placement="top"
            popover="{card.properties.flavor}">
        </button>
      </div>
      // effect text
      <div ng-show="card.properties.effect" style="float: right; padding: 5px; text-align: center;">
        <button type="button" className="btn btn-xs btn-warning glyphicon glyphicon-flash"
            popover-placement="top"
            popover="{card.properties.effect}">
          FX
        </button>
      </div>
    </div>
    <div className="card-actions">
      <button className="btn btn-xs btn-navbar csh-button">
        {actions}
      </button>
    </div>
  </div>
)

export default Card