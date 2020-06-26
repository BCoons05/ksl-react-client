import React, {Component, useEffect, useState} from 'react'
import GoogleLogin from 'react-google-login';
import axios from 'axios';
// import request from 'request'

export default class UserAlerts extends Component {
    constructor(props){
        super(props)

        this.state={
            loggedInName: "",
            userAlerts: []
        }
    }

    responseGoogle = response => {
        let userName = response.profileObj.name
        // console.log("user name = ", userName)
        this.setState({
            loggedInName: userName
        })
        this.props.handleSuccessfulLogin(userName)
        this.getAlerts()
        this.props.history.push("/")
    }

    handleSignOut = () => {
        this.props.handleSuccessfulLogout()
        this.setState({
            loggedInName: ""
        })
    }

    // TODO shouldn't need to call the user api again. This info should probably be saved somewhere and I use it to call the alerts api
    getAlerts = () => {
        axios
        // .get(`http://localhost:8000/user/${this.state.loggedInName}`)
        .get(`https://ksl-alerts-user-api.herokuapp.com/user/${this.state.loggedInName}`)
        .then(response => {
            // console.log("data received, checking for user..." + this.state.loggedInName)
            axios
            .get(`https://ksl-alerts-user-api.herokuapp.com/alerts/${response.data.user_id}`)
            .then(response2 => {
                if(response2 == "User not found"){
                    axios
                    .post("https://ksl-alerts-user-api.herokuapp.com/user", {
                    // .post("http://localhost:5000/user", {
                        "name": this.state.loggedInName
                    })
                    .catch(error => console.log("new user post error ", error))

                    console.log("new user created")
                } else {
                    response2.data.forEach(alert => {
                        this.setState({
                            userAlerts: this.state.userAlerts.concat(response2.data)
                        })

                        console.log(this.state.userAlerts)
                    })
                }
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        return(
            <div>
                {this.props.loggedInStatus === "LOGGED_IN" ?
                    <div>
                        <h2>Hello, {this.props.userName}</h2>
                    </div> 
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
        )
    }
}