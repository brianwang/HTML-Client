import React from 'react'

const GettingStarted = () => (
  <div>
    <h3>Getting started</h3>
  
    <p>To begin playing, first select the server you would like to connect to:</p>
    // TODO the server data was extracted into ../containers/gameServers
    // and needs to be imported from there and parsed into this UL
    <ul>
      <li><strong>Local Host: </strong>Select this if you are hosting a local game server on your own machine.</li>
      <li><strong>dwarftowers.com: </strong><a href="http://www.dwarftowers.com">dwarftowers.com</a> server hosted by our development team.</li>
      <li><strong>zomis.net: </strong><a href="http://www.zomis.net/">Zomis Productions</a> server hosted by our development team.</li>
      <li><strong>Other: </strong> Enter a server address manually.</li>
    </ul>
    <p>Then enter a user name and click <strong>Log in</strong>.</p>
  </div>
)

export default GettingStarted
