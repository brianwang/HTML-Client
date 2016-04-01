import React from 'react'

const GameScreen = () => (
  <div className="game game-{{modName}}">
    // Player display
    <div>
      <div /*ng-repeat="(type, info) in playerInfos"*/ className="player"
          /*ng-class="{'player-user': info == playerInfos.user, 'player-opponent': info != playerInfos.user}"*/>

        // Player information boxes
        <div className="properties player-info-box">
          <h4 style="text-decoration: underline; font-weight: bold;" /*ng-click="selectEntity(info)"*/
              /*ng-class="{'selected': info.selected, 'targetable': doingAction && targets.indexOf(info.id) !== -1}"*/>
                {{info.name}}
              </h4>
          <ul style="list-style: none outside none; margin: 0; padding: 0;">
            <li /*ng-repeat="(name, value) in info.properties"*/>
              <b>{{name}}</b>: {{value}}
            </li>
            <li>
              <b>CARDS: </b>{{info.zones.Hand.length()}}
            </li>
          </ul>
          // Action buttons
          <div className="player-actions">
            <div /*ng-repeat="action in actions"*/ /*ng-if="action.isPlayer"*/>
              <input /*ng-click="startAction(action)"*/ /*ng-hide="doingAction"*/ type="button" value="{{action.action}}"
                       className="btn btn-navbar csh-button"/>
            </div>
            <div>
              <input /*ng-click="cancelAction()"*/ /*ng-show="doingAction"*/ type="button" value="Cancel"
                       className="btn btn-navbar csh-button"/>
              <input /*ng-click="performAction()"*/ /*ng-show="doingAction"*/ type="button" value="{{currentAction.action}}"
                       className="btn btn-navbar csh-button"/>
            </div>
          </div>
        </div>

        // Player cards
        <div /*ng-repeat="(zoneName, zoneInfo) in info.zones" className="zone zone-{{zoneName}}"*/>
          <div /*ng-show="zoneInfo.known"*/>
            <card card-info="card" targets="targets" doing-action="doingAction" 
                  select-entity="selectEntity(card)" actions="actions" start-action="startAction(action)"
                  /*ng-repeat="(id, card) in zoneInfo.entities"*/>
            </card>
          </div>

          // For opponent's cards. Is there a better way?
          <div /*ng-show="!zoneInfo.known && zoneName==='Hand'"*/>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default GameScreen