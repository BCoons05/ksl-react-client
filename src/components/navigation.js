import React, {Component, useEffect, useState} from 'react'
import axios from "axios";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

const NavigationComponent = props => {

    const dynamicLink = (route, linkText) => {
        return(
            <div className="nav-link-wrapper">
                <NavLink to={route} activeClassName="nav-link-active">
                    {linkText}
                </NavLink>
            </div>
        )
    }

    const responseGoogle = (response) => {
        console.log(response);
      }

    // const handleSignOut = () => {
    //     axios.delete("https://api.devcamp.space/logout", { 
    //         withCredentials: true 
    //     })
    //     .then(response => {
    //         if(response.status === 200){
    //             props.history.push("/")
    //             props.handleSuccessfulLogout()
    //         }
    //         return response.data
    //     })
    //     .catch(error => {
    //         console.log("signout error", error)
    //     })
    // }

    return (
        <div className="nav-wrapper">
            <div className="left-side">
                <div className="nav-link-wrapper">
                    <NavLink exact to="/" activeClassName="nav-link-active">
                        Search
                    </NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/about-me" activeClassName="nav-link-active">
                        Set Alerts
                    </NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/contact" activeClassName="nav-link-active">
                        My Alerts
                    </NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/blog" activeClassName="nav-link-active">
                        My Info
                    </NavLink>
                </div>

                {props.loggedInStatus === "LOGGED_IN" ? dynamicLink("/portfolio-manager", "Portfolio Manager") : null}
                
            </div>

            <div className="right-side">
            {/* <GoogleLogin
                clientId="866689668072-3ov7is4028nben3tloj0lh1emoab3me5.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            /> */}

                <div class="g-signin2" data-onsuccess="onSignIn"></div>

                {props.loggedInStatus === "LOGGED_IN" ? <a onClick={handleSignOut}>
                    {/* <FontAwesomeIcon icon="sign-out-alt" /> */}
                </a> : null}
            </div>
        </div>
    )
}

    export default withRouter(NavigationComponent)