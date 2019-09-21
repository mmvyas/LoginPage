import React, { Component } from "react";
import { tsImportEqualsDeclaration } from "@babel/types";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      err: ""
    };
  }
  login(e) {
    e.preventDefault();
    var username = e.target.elements.username.value;
    var password = e.target.elements.password.value;
    if (username === "Mansi" && password === "Neami") {
      this.props.history.push("/welcome/" + username);
    } else {
      this.setState({
        err: "Invalid"
      });
    }
  }
  render() {
    let style = {
      color: "red"
    };
    return (
      <div>
        <h3>Login</h3>
        <span style={style}>{this.state.err != "" ? this.state.err : ""}</span>
        <form method="post" onSubmit={this.login.bind(this)}>
          Username <input type="text" name="username" />
          <br />
          Password <input type="password" name="password" />
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
