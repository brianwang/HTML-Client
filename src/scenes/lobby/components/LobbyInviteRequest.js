import React from 'react'

const LobbyInviteRequest = ({ playerName, gameType, acceptInvite }) => (
  /**
  This whole section needs to be shown to the user only when they receive a game invite
  */
  <tr id="lobby-invite-request">
    <td colspan="2">
      <div id="lobby-accept-invite">
        // TODO wire this to redux 
        Game invite from {playerName} to play {gameType}!<br/>
        // TODO buttons need to accept or decline respectively
        <input type="button" value="Accept" class="btn btn-success"/>
        <input type="button" value="Decline" class="btn btn-danger"/>
        <audio id="ping">
          <source src="ping_sound.mp3" type="audio/mpeg">
        </audio>
      </div>
    </td>
  </tr>
)

export default LobbyInviteRequest