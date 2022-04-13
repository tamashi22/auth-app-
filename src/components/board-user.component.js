import React, { Component } from "react";
import userService from "../servises/user.service";
export default class BoardUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: "",
      email: "",
      age: null,
      role: "",
      status: ""
    };
  }
  componentDidMount() {
    userService.getUserBoard().then(
      ({ id, name, email, age, role, status, token }) => {
        this.setState({
          id: id,
          name: name,
          email: email,
          age: age,
          role: role,
          status: status
        });
        console.log(this.state.data);
      },
      (error) => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }
  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{this.state.name} Profile</h3>
        </header>
        <p>
          <strong>Id:</strong> {this.state.id}
        </p>
        <p>
          <strong>Email:</strong> {this.state.email}
        </p>
        <p>
          <strong>Age:</strong> {this.state.age}
        </p>

        <ul>
          <li>
            {" "}
            <strong>Role: </strong> {this.state.role}
          </li>
          <li>
            <strong>Status: </strong>
            {this.state.status}
          </li>
        </ul>
      </div>
    );
  }
}
