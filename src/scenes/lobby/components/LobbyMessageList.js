import React from 'react'

const LobbyMessageList = ({ userFrom, message, timestamp }) => (
  <td id="lobby-message-list">
    <ul id="lobby-chat-messages">
      // TODO wire this to redux
      <li id="lobby-chat-message">
          {"["}{timestamp}{"]"} {userFrom}: {message}
      </li>
    </ul>
  </td>
)

export default LobbyMessageList