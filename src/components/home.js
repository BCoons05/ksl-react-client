import React, { Component } from "react"
import * as cheerio from 'cheerio'; 
import * as request from 'request';

export default class Home extends Component {
    constructor(props){
        super(props)

        this.state ={
            setVisible: false
        }
    }

    fetchKSL = (year, make, model, minMiles, maxMiles) => {
        request(`https://cars.ksl.com/search/make/${make}/model/${model}/yearFrom/${year}/yearTo/${year}/mileageFrom/${minMiles}/mileageTo/${maxMiles}/titleType/Clean+Title/page/0`, (error, response, html) => {
            this.getCarData(html)
        })
    }
      
    displayResults = (carDetails, miles, price, link ) => {
        document.getElementByClassName("dev-info-container").innerHTML += `<a href="cars.ksl.com${link}">${carDetails} ${miles}miles $${price}</a><br>`
    }

    parseSlug = () => {
        let searchDetails = this.props.match.params.slug.split('-')
        let year = searchDetails[0]
        let make = searchDetails[1]
        let model = searchDetails[2]
        let minMiles = searchDetails[3]
        let maxMiles = searchDetails[4]
        
        this.fetchKSL(year, make, model, minMiles, maxMiles)
    }

    getCarData = (html) => {
        const data = cheerio.load(html)
        let carArray = []
        let linkArray = []
        let newCarArray = []
        let i = 1
        let carData = data('.link').text()
        let price = data('.price').text()
        let miles = data('.mileage').text()
    
        carData = carData.split('      ')
        price = price.split('                    ')
        miles = miles.split('            ')
    
        data('.link').each((idx, el) => {
            const carLink = data(el).attr('href')
            linkArray.push(carLink)
        })
    
        // I think I am missing some data with this. need to consider changes
        linkArray = linkArray.slice(4, -10)
        if(linkArray.length > 25){
            linkArray = linkArray.slice(1, linkArray.length)
        }
    
        carData.forEach(car => {
            if(/^\d/.test(car)){
                carInfo = car.split(' ')
                carArray.push(car)
                if(price[i].startsWith('MSRP')){
                    price[i] = price[i].slice(4, 12)
                } else{
                    price[i] = price[i].slice(1, 8)
                }
                price[i].trim()
                price[i] = price[i].split(',')
                carInfo.push(price[i].join(''))
                miles[i] = miles[i].slice(9, 16)
                miles[i].trim()
                miles[i] = miles[i].split(',')
                carInfo.push(miles[i].join(''))
                carInfo.push(linkArray[i])
                newCarArray.push(carInfo)
                i++
            }
        })
    
        this.makeCarObject(newCarArray)
    }
    
    makeCarObject = carArray => {
        let year = ""
        let make = ""
        let model = ""
        let price = ""
        let miles = ""
        let link = ""
        let newCarDetails = ""
    
        carArray.forEach(car => {
            if(car.length == 6){
                year = car[0]
                make = car[1]
                model = car[2]
                trim = ""
                price = car[3].trim()
                miles = car[4].trim()
                link = car[5]
                newCarDetails = `${year} ${make} ${model}`
            } else if(car.length == 7){
                year = car[0]
                make = car[1]
                model = car[2]
                trim = car[3]
                price = car[4].trim()
                miles = car[5].trim()
                link = car[6]
                newCarDetails = `${year} ${make} ${model}`
            }else if(car.length == 8){
                year = car[0]
                make = car[1]
                model = car[2]
                trim = `${car[3]} ${car[4]}`
                price = car[5].trim()
                miles = car[6].trim()
                link = car[7]
                newCarDetails = `${year} ${make} ${model}`
            }else if(car.length > 9){
                year = car[0]
                make = car[1]
                model = `${car[3]} ${car[4]}`
                trim = `${car[5]} ${car[6]} ${car[7]}`
                price = car[8].trim()
                miles = car[9].trim()
                link = car[10]
                newCarDetails = `${year} ${make} ${model}`
    
            }else{
                year = car[0]
                make = car[1]
                model = `${car[2]} ${car[3]}`
                trim = `${car[4]} ${car[5]}`
                price = car[6].trim()
                miles = car[7].trim()
                link = car[8]
                newCarDetails = `${year} ${make} ${model}`
            }
    
            if(price.startsWith('$')){
                price = price.slice(1, price.length)
            }
    
            console.log(newCarDetails + " " + miles + " miles $" + price)
            displayResults(newCarDetails, miles, price, link)
            // console.log(`cars.ksl.com${link}`)
            // postCar(year, make, model, trim, price, miles, link)
        })
    }

    componentDidMount(){
        this.parseSlug()
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