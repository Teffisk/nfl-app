import React, { Component } from "react";
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
