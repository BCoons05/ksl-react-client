import React, {Component, useEffect, useState} from 'react'
import GoogleLogin from 'react-google-login';

export default class UserAlerts extends Component {
    constructor(props){
        super(props)

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
        this.props.history.push("/")
    }

    handleSignOut = () => {
        this.props.handleSuccessfulLogout()
        this.setState({
            loggedInName: ""
        })
    }

    render(){
        return(
            <div>
                <GoogleLogin
                    clientId="866689668072-3ov7is4028nben3tloj0lh1emoab3me5.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        )
    }
}