import React from 'react'

const TopNavbar = ({ username }) => (
  <nav className="navbar navbar-inverse">
    <div className="container-fluid">

      <div className="navbar-header">
        <div className="navbar-brand csh-top-link">Cardshifter | {username} </div>
      </div>

      <form className="navbar-form">

        <ul class ="navbar-form navbar-left" style="margin-top: 8px;">
          <li className="dropdown">
            <a href="#" className="dropdown-toggle csh-dropdown-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              Mods
            <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li className="cyborg-font">Cyborg Chronicles</li>
                <li className="cyborg-font"><a href=#>Game rules</a></li>
                <li className="cyborg-font"><a href=#>Cards</a></li>

                <li role="separator" className="divider"></li>

                <li className="mythos-font">Mythos</li>
                <li className="mythos-font"><a href=#>Game rules</a></li>
                <li className="mythos-font"><a href=#>Cards</a></li>
              </ul>
          </li>
        </ul>
        <ul class ="navbar-form navbar-left" style="margin-top: 8px;">
          <li className="dropdown">
            <a href="#" className="dropdown-toggle csh-dropdown-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              Help
            <span className="caret"></span></a>
          </li>
        </ul>
        <ul class ="navbar-form navbar-left" style="margin-top: 8px;">
          <li className="dropdown">
            <a href="#" className="dropdown-toggle csh-dropdown-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              About
            <span className="caret"></span></a>
          </li>
        </ul>

        <div className="form-group navbar-form navbar-left">
            <input name="disconnect_websocket" id="disconnect_websocket" type="button" value="Log Out" className="btn btn-navbar csh-button" />
        </div>
        <div className="form-group navbar-form navbar-left">
            <input name="display_console" id="display_console" type="button" value="Console" className="btn btn-navbar csh-button" />
        </div>

      </form>

    </div>
  </nav>
)

export default TopNavbar