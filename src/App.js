import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route, Link, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import { history } from "./helpers/histoty";
class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      currentUser: undefined
    };
    history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });
  }

  componentDidMount() {
    const user = this.props.user;
    if (user) {
      this.setState({
        currentUser: user
      });
    }
  }
  logOut() {
    this.props.dispatch(logout());
  }

  render() {
    const { currentUser } = this.state;
    return (
      <>
        <Router history={history}>
          <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
              <Link to={"/"} className="navbar-brand">
                AUTH
              </Link>
              <div className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a href="/admin" className="nav-link">
                    Admin
                  </a>
                </li>

                {currentUser && (
                  <li className="nav-item">
                    <a href="/user" className="nav-link">
                      User
                    </a>
                  </li>
                )}
              </div>
              {currentUser ? (
                <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a href="/profile" className="nav-link">
                      {currentUser.name}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/login" className="nav-link" onClick={this.logOut}>
                      LogOut
                    </a>
                  </li>
                </div>
              ) : (
                <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a href="/login" className="nav-link">
                      Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/register" className="nav-link">
                      Sign Up
                    </a>
                  </li>
                </div>
              )}
            </nav>
            <div className="container mt-3">
              <Switch>
                <Route exact path={"/"} component={Red} />
                <Route exact path={"/admin"} component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/user" component={BoardUser} />
              </Switch>
            </div>
          </div>
        </Router>
      </>
    );
  }
}
function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user
  };
}

const Red = () => {
  return <Redirect to="/home" />;
};
export default connect(mapStateToProps)(App);
