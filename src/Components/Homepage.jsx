import React, { Component } from "react";
import moment from "moment";
import TeamName from "./TeamName";
import TeamForm from "./TeamForm";
import Header from "./Header";
import Footer from "./Footer";
import "./Homepage.css";

class Homepage extends Component {
  state = {
    team: ""
  };

  handleTeamChange = e => {
    e.preventDefault();
    this.setState({ team: e.target.value });
    // TODO: add API call to get team roster
    this.callRosterApi(this.state.team);
  };

  callRosterApi = team => {
    const today = moment().format("YYYYMMDD");
    const api_key = "70137cfe-9ff2-4666-85d6-7e8bc2";
    const userName = "batkins4";
    const password = "GeneBelcher";
    const testUrl = `https://api.mysportsfeeds.com/v1.2/pull/nhl/2019-2020-regular/overall_team_standings.json`;
    const scheduleUrl = `https://api.mysportsfeeds.com/v1.2/pull/nfl/2019-regular/full_game_schedule.json`;
    const url = `https://api.mysportsfeeds.com/v1.2/pull/nfl/2019-regular/roster_players.json?fordate=20190909&team=${team}`;
    fetch(testUrl, {
      headers: {
        Authorization: `Bearer ${api_key}`
      }
    })
      .then(response => {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }
        response.json().then(data => {
          console.log("Data:", data);
        });
      })
      .catch(err => {
        console.log("Error:", err);
      });
  };

  render() {
    return (
      <div className="homepage">
        <Header />
        <TeamName className="team-name" name={this.state.team} />
        <TeamForm handleOnChange={this.handleTeamChange} />
        {/* <TeamRoster roster={this.state.roster}/> */}
        <Footer />
      </div>
    );
  }
}

export default Homepage;
