import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
class Profile extends Component {
  render() {
    const { user: currentUser } = this.props;
    console.log(this.props);
    if (!currentUser) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.name}</strong> Profile
          </h3>
        </header>
        <p onClick={() => console.log(currentUser)}>
          <strong>Token:</strong> {currentUser.token.substring(0, 20)} ...{" "}
          {currentUser.token.substr(currentUser.token.length - 20)}
        </p>
        <p>
          <strong>Id:</strong> {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>
        <p>
          <strong>Age:</strong> {currentUser.age}
        </p>
        <strong>Authorities:</strong>
        <ul>
          <li> {currentUser.role}</li>
          <li> {currentUser.status}</li>
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { user } = state.auth;
  console.log(state.auth);
  return {
    user
  };
}
export default connect(mapStateToProps)(Profile);
