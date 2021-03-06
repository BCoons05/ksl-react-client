import React, {Component, useEffect, useState} from 'react'
import axios from 'axios'

import SearchResults from "./search-results"

export default class SearchForm extends Component {
    constructor(props){
        super(props)
 
        this.state={
            searchMake:"",
            searchModel:"",
            searchYearMin: "",
            searchYearMax: "",
            searchMilesMin: "",
            searchMilesMax: "",
            searchPriceMin: "",
            searchPriceMax: "",
            searchResults: [],
            setVisible: true
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if(this.state.searchResults.length > 0){
            this.setState({
                searchResults: []
            })
        }

        if(!this.state.searchYearMin){
            this.setState({searchYearMin: 0})
            // console.log("set year min to default")
        }
        if(!this.state.searchYearMax){
            this.setState({searchYearMax: 2020})
            // console.log("set year max to default")
        }
        if(!this.state.searchMilesMin){
            this.setState({searchMilesMin: 0})
            // console.log("set miles min to default")
        }
        if(!this.state.searchMilesMax){
            this.setState({searchMilesMax: 500000})
            // console.log("set miles max to default")
        }
        if(!this.state.searchPriceMin){
            this.setState({searchPriceMin: 0})
            // console.log("set price min to default")
        }
        if(!this.state.searchPriceMax){
            this.setState({searchPriceMax: 5000000})
            // console.log("set price max to default")
        }

        axios
        // .get('http://localhost:5000/cars')
        .get(`https://ksl-alerts-user-api.herokuapp.com/${this.state.searchMake}-${this.state.searchModel}-${this.state.searchYearMin}-${this.state.searchYearMax}-${this.state.searchMilesMin}-${this.state.searchMilesMax}-${this.state.searchPriceMin}-${this.state.searchPriceMax}`)
        .then(response => {
            
            response.data.forEach(car => {
                this.setState({
                    searchResults: [car].concat(this.state.searchResults)
                })
            })
        })
        .then(data => {
            console.log("resetting state values")
            this.setState({
                searchMake: "",
                searchModel: "",
                searchYearMin: "",
                searchYearMax: "",
                searchMilesMin: "",
                searchMilesMax: "",
                searchPriceMin: "",
                searchPriceMax: "",
                searchParams: "",
                setVisible: false
            })
            console.log(`searchMake: ${this.state.searchMake} searchModel: ${this.state.searchModel} searchYearMin: ${this.state.searchYearMin} searchYearMax: ${this.state.searchYearMax}`)
        })
        .catch(err => [
            console.log("Error getting cars, or end of data: ", err)
        ])
      }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

checkMake = (car) => {
    if(this.state.searchMake && car.make.toLowerCase() === this.state.searchMake.toLowerCase()){
        // console.log(`${car.make} = ${this.state.searchMake}, checking model`)
        this.checkModel(car)
    } else if(this.state.searchMake && car.make.toLowerCase() !== this.state.searchMake.toLowerCase()){
        // console.log('no make match, skipping')
        null
    } 
    // if there is not make and model listed then just check by year, miles, and price
    else {
        // console.log("no make entered, checking year")
        this.checkYear(car)
    }
}

checkModel = (car) => {
    if(this.state.searchModel && car.model.toLowerCase() === this.state.searchModel.toLowerCase()){
        // console.log("model matches, checking model")
        this.checkYear(car)
    } else if(this.state.searchModel && car.model.toLowerCase() !== this.state.searchModel.toLowerCase()){
        // console.log('no model match, skipping')
        null
    } 
    // if there is no model listed then just check by year, miles, and price
    else {
        // console.log("no model entered, checking year")
        this.checkYear(car)
    }
}

checkYear = (car) => {
    if(this.state.searchYearMin && car.year >= this.state.searchYearMin && car.year <= this.state.searchYearMax){
        // console.log("in year range, checking miles")
        this.checkMiles(car)
    } else if(this.state.searchYearMin && car.year < this.state.searchYearMin){
        // console.log("below year min")
        null
    } else if(this.state.searchYearMax && car.year > this.state.searchYearMax){
        // console.log("above year max")
        null
    } 
    // if there is no model listed then just check by year, miles, and price
    else if(!this.state.searchYearMin){
        // console.log("no min year entered, checking miles")
        this.checkMiles(car)
    }
}

checkMiles = (car) => {
    if(this.state.searchMilesMin && car.miles >= this.state.searchMilesMin && car.miles <= this.state.searchMilesMax){
        // console.log("in mile range, checking price")
        this.checkPrice(car)
    } else if(this.state.searchMilesMin && car.miles < this.state.searchMilesMin){
        // console.log("below mile range")
        null
    }  else if(this.state.searchMilesMax && car.miles > this.state.searchMilesMax){
        // console.log("above mile range")
        null
    } 
    // if there is no model listed then just check by year, miles, and price
    else {
        // console.log("no min miles entered, checking price")
        this.checkPrice(car)
    }
}

checkPrice = (car) => {
    if(this.state.searchPriceMin && car.price >= this.state.searchPriceMin && car.price <= this.state.searchPriceMax){
        // console.log("in price range, sending result")
        // console.log(`found ${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
        this.setState({searchResults: [car].concat(this.state.searchResults)})
        // console.log(this.state.searchResults)
    } else if(this.state.searchPriceMin && car.year < this.state.searchPriceMin){
        // console.log("below price range")
        null
    } else if(this.state.searchPriceMax && car.year > this.state.searchPriceMax){
        // console.log("above price range")
        null
    } 
    // if there is no model listed then just check by year, miles, and price
    else {
        // console.log(`found ${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
        // console.log(`no min price entered, sending all ${car.year} ${car.make} ${car.model}`)
        this.setState({
            searchResults: [car].concat(this.state.searchResults)
        })
        // console.log(this.state.searchResults)
    }
}

handleSetVisible = () => {
    this.setState({ setVisible: true })
}

    render(){
        return(
            <div className="search-page-wrapper">
                {this.state.setVisible ? 
                    (
                    <div className="form-wrapper">
                        <form onSubmit={this.handleSubmit} className="search-form-wrapper">
                            <div className="two-column">
                                <div>
                                    <h3>Make</h3>
                                    <input
                                        type="text"
                                        onChange={this.handleChange}
                                        name="searchMake"
                                        placeholder="Ex: Chevrolet not Chevy"
                                        value={this.state.searchMake}
                                    />
                                </div>
                                <div>
                                    <h3>Model</h3>
                                    <input
                                        type="text"
                                        onChange={this.handleChange}
                                        name="searchModel"
                                        placeholder="Model"
                                        value={this.state.searchModel}
                                    />
                                </div>
                            </div>
                            <div className="two-column">
                                <div>
                                    <h3>From Year</h3>
                                    <input
                                        type="text"
                                        onChange={this.handleChange}
                                        name="searchYearMin"
                                        placeholder="Ex: 2015"
                                        value={this.state.searchYearMin}
                                    />
                                </div>

                                <div>
                                    <h3>To Year</h3>
                                    <input
                                        type="text"
                                        onChange={this.handleChange}
                                        name="searchYearMax"
                                        placeholder="Ex: 2019"
                                        value={this.state.searchYearMax}
                                    />
                                </div>
                            </div>
                            
                            <div className="two-column">
                                <div>
                                    <h3>Minimum Miles</h3>
                                    <input
                                        type="text"
                                        onChange={this.handleChange}
                                        name="searchMilesMin"
                                        placeholder="Ex: 50000"
                                        value={this.state.searchMilesMin}
                                    />
                                </div>
                                <div>
                                    <h3>Maximum Miles</h3>
                                    <input
                                        type="text"
                                        onChange={this.handleChange}
                                        name="searchMilesMax"
                                        placeholder="Ex: 100000"
                                        value={this.state.searchMilesMax}
                                    />
                                </div>
                            </div>
                            <div className="two-column">
                                <div>
                                    <h3>Minimum Price</h3>
                                    <input
                                        type="text"
                                        onChange={this.handleChange}
                                        name="searchPriceMin"
                                        placeholder="Ex: 11000"
                                        value={this.state.searchPriceMin}
                                    />
                                </div>
                                <div>
                                    <h3>Maximum Price</h3>
                                    <input
                                        type="text"
                                        onChange={this.handleChange}
                                        name="searchPriceMax"
                                        placeholder="Ex: 13000"
                                        value={this.state.searchPriceMax}
                                    />
                                </div>
                            </div>
                            <div className="one-column">
                                <button className="btn">Search</button>
                            </div> 
                        </form>
                    </div>)
                    :
                    (
                    <div className="one-column">
                        <div className="results-container">
                            {this.state.searchResults.length > 0 ? <SearchResults data={this.state.searchResults} /> : <h2>No cars that match your criteria, please enter a different vehicle</h2>}
                            <button className="new-search-btn" onClick={() => this.handleSetVisible()}>New Search</button>
                        </div>
                    </div>
                    )
            }
            </div>
        )
    }
}