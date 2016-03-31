import React from 'react'

const LobbyMessage = () => (
  <tr>
    <td id="lobby-message">
      // TODO wire to redux
      // NOTE this is the place where users type their messages
      <textarea id="lobby-chat-text-area" rows="1" cols="75" wrap="off" placeholder="Enter chat message..."></textarea>
      // NOTE button to submit/post message to chat
      <input type="submit" value="Send" class="btn btn-navbar csh-button"/>
    </td>
    <td id="lobby-invite">
      // NOTE button to send invite to a player after selecting them from LobbyUsersList
      <input type="button" value="Invite to game" class="btn btn-warning"/>
    </td>
  </tr>
)

export default LobbyMessage