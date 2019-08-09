import React, { Component } from "react";

class TeamForm extends Component {
  render() {
    return (
      <form>
        <div>
          <label>Enter Team Name</label>
        </div>
        <select onChange={this.props.handleOnChange}>
          <option disabled defaultValue>
            Pick your team
          </option>
          <option value="ten">Tennesee Titans</option>
          <option value="sea">Seattle Seahawks</option>
        </select>
      </form>
    );
  }
}

export default TeamForm;
