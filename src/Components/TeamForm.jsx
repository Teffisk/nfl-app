import React, { Component } from "react";

class TeamForm extends Component {
  state = {
    api_key: "70137cfe-9ff2-4666-85d6-7e8bc2"
  };
  render() {
    return (
      <form>
        <div>
          <label>Enter Team Name</label>
        </div>
        <select
          onChange={this.props.handleOnChange}
          defaultValue="Pick your team"
        >
          <option value="TEN">Tennesee Titans</option>
          <option value="SEA">Seattle Seahawks</option>
          <option value="BUC">Tampa Bay Buccaneers</option>
          <option value="NYJ">New York Jets</option>
          <option value="BUF">Buffalo Bills</option>
          <option value="NE">New England Patriots</option>
          <option value="MIA">Miami Dolphins</option>
          <option value="CIN">Cincinnati Bengals</option>
          <option value="PIT">Pittsburgh Steelers</option>
          <option value="BAL">Balitimore Ravens</option>
          <option value="CLE">Cleveland Browns</option>
          <option value="HOU">Houston Texans</option>
          <option value="IND">Indianapolis Colts</option>
          <option value="JAX">Jacksonville Jaguars</option>
          <option value="DEN">Denver Broncos</option>
          <option value="KC">Kansas City Chiefs</option>
          <option value="OAK">Oakland Raiders</option>
          <option value="LAC">Los Angeles Chargers</option>
          <option value="DAL">Dallas Cowboys</option>
          <option value="NYG">New York Giants</option>
          <option value="PHI">Philadelphia Eagles</option>
          <option value="WAS">Washington Redskins</option>
          <option value="CHI">Chicago Bears</option>
          <option value="DET">Detriot Lions</option>
          <option value="GB">Green Bay Packers</option>
          <option value="MIN">Minnesota Vikings</option>
          <option value="ATL">Atlanta Falcons</option>
          <option value="CAR">Carolina Panthers</option>
          <option value="NO">New Orleans Saints</option>
          <option value="ARI">Arizona Cardinals</option>
          <option value="SF">San Francisco 49ers</option>
          <option value="LA">Los Angeles Rams</option>
        </select>
      </form>
    );
  }
}

export default TeamForm;
