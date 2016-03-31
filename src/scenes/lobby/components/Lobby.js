import React from 'react'
import LobbyHeader from './LobbyHeader'
import LobbyInviteRequest from './LobbyInviteRequest'
import LobbyListHeaders from './LobbyListHeaders'
import LobbyLists from './LobbyLists'
import LobbyMessage from './LobbyMessage'
import LobbyMods from './LobbyMods'

const Lobby = () => (
  // TODO Future refactoring to change the whole lobby structure to no longer use HTML tables
  <table id="lobby">
    <LobbyHeaders />
    // TODO This section needs to be shown to the user only when they receive a game invite
    <LobbyInviteRequest />
    <LobbyListHeaders />
    <LobbyLists />
    <LobbyMessage />
    <LobbyMods />
  </table>
)

export default Lobby