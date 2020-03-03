import React, {Component, useEffect, useState} from 'react'
import GoogleLogin from 'react-google-login';
import axios from 'axios';
// import request from 'request'

export default class UserAlerts extends Component {
    constructor(props){
        super(props)

        this.state={
            loggedInName: "",
            userAlerts: [],
            userFound: false
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
        this.props.history.push("/user-alerts")
    }

    handleSignOut = () => {
        this.props.handleSuccessfulLogout()
        this.setState({
            loggedInName: ""
        })
    }

    getAlerts = () => {
        axios
        // .get("http://localhost:8000/carAverages")
        .get("https://ksl-alerts-user-api.herokuapp.com/users")
        .then(response => {
            console.log("data received, checking for user...")
            response.data.forEach(user => {
                if(user.name === this.state.loggedInName){
                    console.log("user found, getting alerts...")

                    axios
                    .get("https://ksl-alerts-user-api.herokuapp.com/alerts")
                    .then(response2 => {
                        response2.data.forEach(alert => {
                            if(alert.user_id === user.id){
                                this.setState({
                                    userAlerts: this.state.userAlerts.concat(response2.data),
                                    userFound: true
                                })

                                console.log(this.state.userAlerts)
                            }
                        })
                    })
                    .then(userNotFound => {
                        if(this.state.userFound === false){
                            axios
                            .post("https://ksl-alerts-user-api.herokuapp.com/user", {
                            // .post("http://localhost:5000/user", {
                                "name": this.state.loggedInName
                            })
                            .catch(error => console.log("new user post error ", error))

                            console.log("new user created")
                        }
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