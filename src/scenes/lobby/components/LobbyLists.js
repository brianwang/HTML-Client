import React from 'react'
import LobbyMessageList from './LobbyMessageList'
import LobbyUsersList from './LobbyUsersList'

const LobbyLists = () => (
  <tr id="lobby-lists">
    <LobbyMessageList />
    <LobbyUsersList />
  </tr>
)

export default LobbyLists