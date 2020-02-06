import React, { Component } from "react"

export default class Home extends Component {
    constructor(props){
        super(props)

        this.state ={
            setVisible: false
        }
    }

    render(){
        return (
            <div className="home-page-wrapper">
                <div className="dev-info-container" onClick={() => this.setVisible()}>
                    {`This site was built as my solo Capstone project at Bottega. 
                    To learn more about the site and technologies used to build it, 
                    click anywhere in this area.
                    
                    Otherwise, click search to start searching or to sign in.`}
                </div>
            </div>
        )
    }
}