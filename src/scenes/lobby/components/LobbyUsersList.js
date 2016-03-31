import React from 'react'

const LobbyUsersList = ({ userName }) => (
  <td id="lobby-users-list">
    <ul id="lobby-users">
      // TODO wire this to redux
      <li id="lobby-user">
        <label>
            <input type="radio" value={userName} name="user_selection" /> {userName}
        </label>
      </li>
    </ul>
  </td>
)

export default LobbyUsersList