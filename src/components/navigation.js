import React, {Component, useEffect, useState} from 'react'
import axios from "axios";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GoogleLogin from 'react-google-login';

import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {

    // const dynamicLink = (route, linkText) => {
    //     return(
    //         <div className="nav-link-wrapper">
    //             <NavLink to={route} activeClassName="nav-link-active">
    //                 {linkText}
    //             </NavLink>
    //         </div>
    //     )
    // }


    // onSignIn = (googleUser) => {
    //     var profile = user.getBasicProfile();
    //     console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    //     console.log('Name: ' + profile.getName());
    //     console.log('Image URL: ' + profile.getImageUrl());
    //     console.log('Email: ' + profile.getEmail());

    //     // gapi.load('auth2', function() {
    //     //     auth2 = gapi.auth2.init({
    //     //       client_id: 'CLIENT_ID.apps.googleusercontent.com',
    //     //       fetch_basic_profile: false,
    //     //       scope: 'profile'
    //     //     });

    //     //     auth2.signIn().then(function() {
    //     //         console.log(auth2.currentUser.get().getId());
    //     //       });
    //     //     });

    //     // if (auth2.isSignedIn.get()) {
    //     //     var profile = auth2.currentUser.get().getBasicProfile();
    //     //     console.log('ID: ' + profile.getId());
    //     //     console.log('Full Name: ' + profile.getName());
    //     //     console.log('Email: ' + profile.getEmail());
    //         this.props.handleSuccessfulLogin(profile.getName())
    //     // } else {
    //     //       console.log("can't find user info")
    //     // }
    // }

    responseGoogle = response => {
        let userName = response.profileObj.name
        this.props.handleSuccessfulLogin(userName)
        console.log(response)
    }

    handleSignOut = () => {
        let auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.log('User signed out.');
            this.props.handleSuccessfulLogout()
        });
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
                    <div className="nav-link-wrapper">
                        <NavLink to="/user-alerts" activeClassName="nav-link-active">
                            My Alerts
                        </NavLink>
                    </div>
                </div>

                <div className="right-side">
                    {this.props.loggedInStatus === "LOGGED_IN" ? <a onClick={this.handleSignOut}>
                        Sign Out
                    </a> : <GoogleLogin
                                clientId="866689668072-3ov7is4028nben3tloj0lh1emoab3me5.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />}
                </div>
            </div>
        )
    }
}

