import React, { Component } from "react";
import GoogleLogin from 'react-google-login';
import axios from 'axios'
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import NavBar from "./navigation"
import Footer from "./footer"
import SearchForm from "./search-form"
import NoMatch from "./no-match"
import UserAlerts from "./user-alerts"
import Home from "./home"

export default class App extends Component {

    constructor(props) {
        super(props)
    
        // Icons();
    
        this.state = {
          loggedInStatus: "NOT_LOGGED_IN",
          userName: ""
        }
      }

      handleSuccessfulLogin = (name) => {
        this.setState({
          loggedInStatus: "LOGGED_IN",
          userName: name
        })
      }
    
      handleUnsuccessfulLogin = () => {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN"
        })
      }
    
      handleSuccessfulLogout = () => {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN"
        })
      }
    
    //   Not working, should check logged in status on mount
      checkLoginStatus = () => {
          const loggedInStatus = this.state.loggedInStatus
    
          if(this.state.userName && loggedInStatus === "LOGGED_IN") {
            return loggedIn
          }else if (this.state.userName && loggedInStatus === "NOT_LOGGED_IN") {
            this.setState({
              loggedInStatus: "LOGGED_IN"
            })
          }else if(!this.state.userName && loggedInStatus === "LOGGED_IN"){
            this.setState({
              loggedInStatus: "NOT_LOGGED_IN"
            })
          }
      }
    
      componentDidMount() {
        this.checkLoginStatus()
      }
    
    //   authorizedPages = () => {
    //       return [ <Route key="portfolio-manager" path="/portfolio-manager" component={PortfolioManager} /> ]
    //   }

render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <NavBar 
              loggedInStatus={this.state.loggedInStatus} 
              handleSuccessfulLogout={this.handleSuccessfulLogout}
              handleSuccessfulLogin={this.handleSuccessfulLogin}
            />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/search-form" component={SearchForm} />
              <Route path="/user-alerts" 
                render = {props => (
                  <UserAlerts 
                    {...props} 
                    handleSuccessfulLogin={this.handleSuccessfulLogin} 
                    handleUnsuccessfulLogin={this.handleUnsuccessfulLogin} 
                  />
                )} 
              />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
