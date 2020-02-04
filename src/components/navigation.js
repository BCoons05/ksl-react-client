import React, {Component, useEffect, useState} from 'react'
import axios from "axios";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

const NavBar = props => {

    // const dynamicLink = (route, linkText) => {
    //     return(
    //         <div className="nav-link-wrapper">
    //             <NavLink to={route} activeClassName="nav-link-active">
    //                 {linkText}
    //             </NavLink>
    //         </div>
    //     )
    // }


    const onSignIn = (googleUser) => {
        gapi.load('auth2', function() {
            auth2 = gapi.auth2.init({
              client_id: 'CLIENT_ID.apps.googleusercontent.com',
              fetch_basic_profile: false,
              scope: 'profile'
            });

            auth2.signIn().then(function() {
                console.log(auth2.currentUser.get().getId());
              });
            });

        // if (auth2.isSignedIn.get()) {
        //     var profile = auth2.currentUser.get().getBasicProfile();
        //     console.log('ID: ' + profile.getId());
        //     console.log('Full Name: ' + profile.getName());
        //     console.log('Email: ' + profile.getEmail());
        //     props.handleSuccessfulLogin(profile.getName())
        // } else {
        //       console.log("can't find user info")
        // }
    }

    const handleSignOut = () => {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.log('User signed out.');
            props.handleSuccessfulLogout()
        });
    }

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
                {props.loggedInStatus === "LOGGED_IN" ? <a onClick={handleSignOut}>
                    Sign Out
                </a> : <div class="g-signin2" data-onsuccess="onSignIn"></div>}
            </div>
        </div>
    )
}

    export default withRouter(NavBar)