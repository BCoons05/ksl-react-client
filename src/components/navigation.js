import React, {Component, useEffect, useState} from 'react'
import axios from "axios";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GoogleLogin from 'react-google-login';

import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {

    constructor(){
        super()

        this.state={
            loggedInName: ""
        }
    }

    responseGoogle = response => {
        let userName = response.profileObj.name
        this.setState({
            loggedInName: userName
        })
        this.props.handleSuccessfulLogin(userName)
    }

    handleSignOut = () => {
            this.props.handleSuccessfulLogout()
            this.setState({
                loggedInName: ""
            })
    }
    
    render(){
        return (
            <div className="nav-wrapper">
                <div className="left-side">
                <div className="nav-link-wrapper">
                        <NavLink exact to="/" activeClassName="nav-link-active">
                            Home
                        </NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/search-form" activeClassName="nav-link-active">
                            Search
                        </NavLink>
                    </div>
                    {this.props.loggedInStatus === "LOGGED_IN" ?
                    <div className="nav-link-wrapper">
                        <NavLink to="/user-alerts" activeClassName="nav-link-active">
                            My Alerts
                        </NavLink>
                    </div>
                    : null}
                </div>

                <div className="right-side">
                    {this.props.loggedInStatus === "LOGGED_IN" ? (
                    <div>
                        <h2>Logged in as {this.state.loggedInName}</h2>
                        <a onClick={this.handleSignOut}>
                            Sign Out
                        </a>
                    </div>
                    )
                    : 
                    <GoogleLogin
                        clientId="866689668072-3ov7is4028nben3tloj0lh1emoab3me5.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                    }
                </div>
            </div>
        )
    }
}

