import React, {Component, useEffect, useState} from 'react'
import axios from 'axios'

export default class SearchForm extends Component {
    constructor(props){
        super(props)
 
        this.state={
            searchMake:"",
            searchModel:"",
            searchYearMin: 0,
            searchYearMax: 3000,
            searchMilesMin: 0,
            searchMilesMax: 100000000,
            searchPriceMin: 0,
            searchPriceMax: 50000000,
            searchResults: []
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // console.log(`${this.state.searchMake} ${this.state.searchModel} from ${this.state.searchYearMin} to ${this.state.searchYearMax}`)

        axios
        // .get('http://localhost:5000/cars')
        .get('https://ksl-scraper-api-main.herokuapp.com/cars')
        .then(response => {
            // console.log(response.data)
            response.data.forEach(car => {
                this.checkMake(car)
            })
        })
        // .then
        //     this.setState({
        //         searchMake:"",
        //         searchModel:"",
        //         searchYearMin: 0,
        //         searchYearMax: 3000,
        //         searchMilesMin: 0,
        //         searchMilesMax: 100000000,
        //         searchPriceMin: 0,
        //         searchPriceMax: 50000000
        //     })
      }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

  searchParams = () => {
    // const searchMake = ''
    // const searchModel = ''
    // const searchYearMax = 2003
    // const searchYearMin = 1993
    // const searchMilesMax = 200000
    // const searchMilesMin = 50000
    // const searchPriceMax = 4000

    
}

// break the horrible if statements above into functions...

checkMake = (car) => {
    if(this.state.searchMake && car.make.toLowerCase() === this.state.searchMake.toLowerCase()){
        this.checkModel(car)
    } else if(this.state.searchMake && car.make.toLowerCase() !== this.state.searchMake.toLowerCase()){
        null
    } 
    // if there is not make and model listed then just check by year, miles, and price
    else {
        this.checkYear(car)
    }
}

checkModel = (car) => {
    if(this.state.searchModel && car.model.toLowerCase() === this.state.searchModel.toLowerCase()){
        this.checkYear(car)
    } else if(this.state.searchModel && car.model.toLowerCase() !== this.state.searchModel.toLowerCase()){
        null
    } 
    // if there is no model listed then just check by year, miles, and price
    else {
        this.checkYear(car)
    }
}

checkYear = (car) => {
    if(this.state.searchYearMin && car.year >= this.state.searchYearMin && car.year <= this.state.searchYearMax){
        this.checkMiles(car)
    } else if(this.state.searchYearMin && car.year <= this.state.searchYearMin || car.year >= this.state.searchYearMax){
        null
    } 
    // if there is no model listed then just check by year, miles, and price
    else {
        this.checkMiles(car)
    }
}

checkMiles = (car) => {
    if(this.state.searchMilesMin && car.miles >= this.state.searchMilesMin && car.miles <= this.state.searchMilesMax){
        this.checkPrice(car)
    } else if(this.state.searchMilesMin && car.miles <= this.state.searchMilesMin || car.miles >= this.state.searchMilesMax){
        null
    } 
    // if there is no model listed then just check by year, miles, and price
    else {
        this.checkPrice(car)
    }
}

checkPrice = (car) => {
    if(this.state.searchPriceMin && car.price >= this.state.searchPriceMin && car.price <= this.state.searchPriceMax){
        console.log(`found ${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
        this.setState({searchResults: [car].concat(this.state.searchResults)})
        console.log(this.state.searchResults)
    } else if(this.state.searchPriceMin && car.year <= this.state.searchPriceMin || car.price >= this.state.searchPriceMax){
        null
    } 
    // if there is no model listed then just check by year, miles, and price
    else {
        console.log(`found ${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
        this.setState({searchResults: [car].concat(this.state.searchResults)})
        console.log(this.state.searchResults)
    }
}

    render(){
        return(
            <form onSubmit={this.handleSubmit} className="search-form-wrapper">
                <div className="two-column">
                    <input
                        type="text"
                        onChange={this.handleChange}
                        name="searchMake"
                        placeholder="Make"
                        value={this.state.searchMake}
                    />

                    <input
                        type="text"
                        onChange={this.handleChange}
                        name="searchModel"
                        placeholder="Model"
                        value={this.state.searchModel}
                    />
                </div>
                <div className="two-column">
                    <input
                        type="text"
                        onChange={this.handleChange}
                        name="searchYearMin"
                        placeholder="Year Min"
                        value={this.state.searchYearMin}
                    />

                    <input
                        type="text"
                        onChange={this.handleChange}
                        name="searchYearMax"
                        placeholder="Year Max"
                        value={this.state.searchYearMax}
                    />
                </div>
                <div className="two-column">
                    <input
                        type="text"
                        onChange={this.handleChange}
                        name="searchMilesMin"
                        placeholder="Miles Min"
                        value={this.state.searchMilesMin}
                    />

                    <input
                        type="text"
                        onChange={this.handleChange}
                        name="searchMilesMax"
                        placeholder="Miles Max"
                        value={this.state.searchMilesMax}
                    />
                </div>
                <div className="two-column">
                    <input
                        type="text"
                        onChange={this.handleChange}
                        name="searchPriceMin"
                        placeholder="Price Min"
                        value={this.state.searchPriceMin}
                    />

                    <input
                        type="text"
                        onChange={this.handleChange}
                        name="searchPriceMax"
                        placeholder="Price Max"
                        value={this.state.searchPriceMax}
                    />
                </div>

                {/* <div className="one-column">
                <RichTextEditor
                    handleRichTextEditorChange={this.handleRichTextEditorChange}
                    editMode={this.props.editMode}
                    contentToEdit={this.props.editMode && this.props.blog.content ? this.props.blog.content : null}
                />
                </div> */}

                <button className="btn">Search</button>
            </form>
        )
    }
}