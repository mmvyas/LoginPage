import React, { Component } from "react";

class Welcome extends Component {
  logout() {
    this.props.history.push("/logout");
  }
  render() {
    const { username } = this.props.match.params;
    return (
      <div>
        <h3>Welcome {username}</h3>
        <button onClick={this.logout.bind(this)}>Logout</button>
      </div>
    );
  }
}

export default Welcome;
