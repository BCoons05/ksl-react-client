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
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }

    const handleSignOut = () => {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.log('User signed out.');
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

                {/* {props.loggedInStatus === "LOGGED_IN" ? dynamicLink("/portfolio-manager", "Portfolio Manager") : null} */}
                
            </div>

            <div className="right-side">
                {props.loggedInStatus === "LOGGED_IN" ? <a onClick={handleSignOut}>
                    {/* <FontAwesomeIcon icon="sign-out-alt" /> */}
                    Sign Out
                </a> : <div class="g-signin2" data-onsuccess={() => onSignIn()}></div>}
            </div>
        </div>
    )
}

    export default withRouter(NavBar)