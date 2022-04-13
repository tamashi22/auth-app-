import React, { Component } from "react";
import userService from "../servises/user.service";
import { Table } from "react-bootstrap";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: null,
      users: []
    };
  }

  componentDidMount() {
    userService.getPublicContent().then(
      ({ count, users }) => {
        this.setState({
          count: count,
          users: users
        });
      },

      (error) => {
        this.setState({
          content:
            (error.response && error.response.data) ||
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
          <h3>Admin page</h3>
        </header>
        <div className="table">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Name</th>
                <th>Age</th>
                <th>role</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((person, i) => (
                <tr key={i}>
                  <td>{person.id}</td>
                  <td>{person.email}</td>
                  <td>{person.name}</td>
                  <td>{person.age}</td>
                  <td>{person.role}</td>
                  <td>{person.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
