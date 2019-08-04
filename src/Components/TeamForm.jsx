import React, { Component } from "react";

class TeamForm extends Component {
  render() {
    return (
      <form>
        <div>
          <label>Enter Team Name</label>
        </div>
        <select onChange={this.props.handleOnChange}>
          <option disabled selected>
            Pick your team
          </option>
          <option>Tennesee Titans</option>
          <option>Seattle Seahawks</option>
        </select>
      </form>
    );
  }
}

export default TeamForm;
