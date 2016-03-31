import React from 'react'

const LobbyHeaders = () => (
  <tr id="lobby-headers">
    <td id="lobby-title">Cardshifter Lobby</td>
    // TODO this button doesn't do anything at the moment 
    // It needs to open deck builder without a game invite
    <td id="lobby-deck-builder" width="20%"><button className="btn btn-navbar csh-button">Deck Builder</button></td>
  </tr>
)

export default LobbyHeaders