import React from 'react'

const SceneControls = () => (
  <form>
    <input 
        /*data-ng-show="enteringGame"*/ 
        /*data-ng-click="enterGame()"*/ 
        type="button" 
        value="Start game" 
        className="btn btn-sm btn-success" />
    <input 
        /*data-ng-hide="enteringGame"*/ 
        /*data-ng-click="goBack()"*/ 
        type="button" 
        value="Go back to lobby" 
        className="btn btn-sm btn-default" />
  </form>
)

export default SceneControls