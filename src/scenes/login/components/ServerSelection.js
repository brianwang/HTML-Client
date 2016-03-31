import React from 'react'
import ServerOtherInput from './ServerOtherInput'

const ServerSelection = () => (
  <h4>Please log in to continue, or see below for instructions and assistance.</h4>
  // TODO refactor this using formsy-react or other forms library for React
  <form name="login_information" id="login_information" className="login-form">
    <div className="form-group">
      <label htmlFor="server" aria-label="Server">Server:</label>
      // TODO the server data was extracted into ../containers/gameServers
      // and needs to be imported from there and parsed into this selection menu
      <select name="server" id="server" className="form-control">
          <option value="ws://127.0.0.1:4243">Local host</option>
          <option value="ws://dwarftowers.com:4243">dwarftowers.com</option>
          <option value="ws://stats.zomis.net:4243">zomis.net</option>
          <option value="other">Other...</option>
      </select>
      // TODO add some clarification as to what this "secure" selection actually does
      <label htmlFor="secure">Is secure server:</label>
      <input name="secure" id="secure" type="checkbox" value="secure" />
    </div>

    // TODO This part of the form should only be shown if `option value="other"` above is selected
    <ServerOtherInput />

    <div className="form-group">
      <label htmlFor="username">Username:</label>
      <input name="username" id="username" type="text" className="form-control" placeholder="Enter name..." />
    </div>
    <div className="form-group">
      <input name="submit" id="submit" type="button" value="Log in" className="btn btn-success" />
    </div>
  </form>
)

export default ServerSelection