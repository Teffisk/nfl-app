import React, { Component } from "react";
import moment from "moment";
import TeamName from "./TeamName";
import TeamForm from "./TeamForm";
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
    const today = moment().format("YYYYMMDD");
    const url = `https://api.mysportsfeeds.com/v1.2/pull/nfl/2019-regular/roster_players.json?fordate=20190909&team=${
      this.state.team
    }`;
    fetch(url, {
      method: "get",
      headers: {
        "Content-Type": "text/plain",
        Authorization: "Basic " + btoa("batkins4" + ":" + "GeneBelcher")
      }
    })
      .then(response => {
        console.log("Reponse:", response);
      })
      .catch(err => {
        console.log("Error:", err);
      });
  };

  render() {
    return (
      <div className="homepage">
        <h1 className="site-title">Sports Ball!</h1>
        <TeamName className="team-name" name={this.state.team} />
        <TeamForm handleOnChange={this.handleTeamChange} />
        {/* <TeamRoster roster={this.state.roster}/> */}
        <Footer />
      </div>
    );
  }
}

export default Homepage;
