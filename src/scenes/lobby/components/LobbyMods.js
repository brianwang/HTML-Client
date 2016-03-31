import React from 'react'

const LobbyMods = ({mod}) => (
  <tr id="lobby-mods">
    <td colspan="2" id="lobby-mod-selection">
      // TODO fix this form with formsy-react or other such library
      <form className="form-inline" role="form">
        <div className="form-group">
          <label htmlFor="mod_selection">Select game type:</label>
          <div className="form-control lobby-mod-selector">
            <label>
              // TODO incorporate mod selection
              <input type="radio" value={mod} name="mod_selection" id="mod_selection" />{mod}
            </label>
          </div>
        </div>
      </form>
    </td>
  </tr>
)

export default LobbyMods