import React, { Component } from "react";
import GoogleLogin from 'react-google-login';
import axios from 'axios'
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import NavBar from "./navigation"
import Footer from "./footer"
import SearchForm from "./search-form"
import NoMatch from "./no-match"
import UserAlerts from "./user-alerts"
import Home from "./home"

export default class App extends Component {

    constructor(props) {
        super(props)
    
        // Icons();
    
        this.state = {
          loggedInStatus: "NOT_LOGGED_IN",
          userName: ""
        }
      }

      handleSuccessfulLogin = (name) => {
        this.setState({
          loggedInStatus: "LOGGED_IN",
          userName: name
        })
      }
    
      handleUnsuccessfulLogin = () => {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN"
        })
      }
    
      handleSuccessfulLogout = () => {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN"
        })
      }
    
      checkLoginStatus = () => {
          const loggedIn = response.data.logged_in
          const loggedInStatus = this.state.loggedInStatus
    
          if(userName && loggedInStatus === "LOGGED_IN") {
            return loggedIn
          }else if (userName && loggedInStatus === "NOT_LOGGED_IN") {
            this.setState({
              loggedInStatus: "LOGGED_IN"
            })
          }else if(!userName && loggedInStatus === "LOGGED_IN"){
            this.setState({
              loggedInStatus: "NOT_LOGGED_IN"
            })
          }
      }
    
      componentDidMount() {
        this.checkLoginStatus()
      }
    
    //   authorizedPages = () => {
    //       return [ <Route key="portfolio-manager" path="/portfolio-manager" component={PortfolioManager} /> ]
    //   }

//   searchParams = () => {
//     const searchMake = ''
//     const searchModel = ''
//     const searchYearMax = 2003
//     const searchYearMin = 1993
//     const searchMilesMax = 200000
//     const searchMilesMin = 50000
//     const searchPriceMax = 4000

//     axios
//         // .get('http://localhost:5000/cars')
//         .get('https://ksl-scraper-api-main.herokuapp.com/cars')
//         .then(response => {
//             // console.log(response.data)
//             response.data.forEach(car => {
//                 // this is awful but it works. TODO make this less awful with functions PLEASE
//                 // Seriously this is the worst thing I have ever done
//                 if(searchMake && car.make === searchMake){
//                     if(searchModel && car.model === searchModel){
//                         if(searchYearMin && searchYearMax && car.year >= searchYearMin && car.year <= searchYearMax){
//                             if(searchMilesMin && searchMilesMax && car.miles >= searchMilesMin && car.miles <= searchMilesMax){
//                                 if(searchPriceMax && car.price <= searchPriceMax){
//                                     if(searchPriceMin && car.price >= searchPriceMin){
//                                         console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
//                                     }
//                                 } else if(searchPriceMax = null){
//                                     if(searchPriceMin && car.price >= searchPriceMin){
//                                         console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
//                                     }
//                                 }
//                             } else if(!searchMilesMin && searchMilesMax && car.miles <= searchMilesMax){
//                                 if(searchMilesMin && searchMilesMax && car.miles >= searchMilesMin && car.miles <= searchMilesMax){
//                                     if(searchPriceMax && car.price <= searchPriceMax){
//                                         if(searchPriceMin && car.price >= searchPriceMin){
//                                             console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
//                                         }
//                                     } else if(searchPriceMax = null){
//                                         if(searchPriceMin && car.price >= searchPriceMin){
//                                             console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
//                                         }
//                                     }
//                                 }
//                             } else if(!searchMilesMin && !searchMilesMax){
//                                 if(searchMilesMin && searchMilesMax && car.miles >= searchMilesMin && car.miles <= searchMilesMax){
//                                     if(searchPriceMax && car.price <= searchPriceMax){
//                                         if(searchPriceMin && car.price >= searchPriceMin){
//                                             console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
//                                         }
//                                     } else if(searchPriceMax = null){
//                                         if(searchPriceMin && car.price >= searchPriceMin){
//                                             console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
//                                         }
//                                     }
//                                 }
//                             }
//                         } else if (!searchYearMax && searchYearMin && car.year >= searchYearMin){
//                             if(searchMilesMin && searchMilesMax && car.miles >= searchMilesMin && car.miles <= searchMilesMax){
//                                 if(searchPriceMax && car.price <= searchPriceMax){
//                                     if(searchPriceMin && car.price >= searchPriceMin){
//                                         console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
//                                     }
//                                 } else if(searchPriceMax = null){
//                                     if(searchPriceMin && car.price >= searchPriceMin){
//                                         console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
//                                     }
//                                 }
//                             }
//                         } else if(!searchYearMax && !searchYearMin){
//                             if(searchMilesMin && searchMilesMax && car.miles >= searchMilesMin && car.miles <= searchMilesMax){
//                                 if(searchPriceMax && car.price <= searchPriceMax){
//                                     if(searchPriceMin && car.price >= searchPriceMin){
//                                         console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
//                                     }
//                                 } else if(searchPriceMax = null){
//                                     if(searchPriceMin && car.price >= searchPriceMin){
//                                         console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
//                                     }
//                                 }
//                             }
//                         } 
//                     } else if(!searchModel){
//                         if(car.year >= searchYearMin && car.year <= searchYearMax){
//                             if(car.miles >= searchMilesMin && car.miles <= searchMilesMax){
//                                 if(searchPriceMax && car.price <= searchPriceMax){
//                                     console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
//                                 }
//                             }
//                         }
//                     }
//                 } else if(!searchMake){
//                     if(searchModel && car.model === searchModel){
//                         if(searchYearMin && searchYearMax && car.year >= searchYearMin && car.year <= searchYearMax){
//                             if(searchMilesMin && searchMilesMax && car.miles >= searchMilesMin && car.miles <= searchMilesMax){
//                                 if(searchPriceMax && car.price <= searchPriceMax){
//                                     if(searchPriceMin && car.price >= searchPriceMin){
//                                         console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
//                                     }
//                                 } else if(searchPriceMax = null){
//                                     if(searchPriceMin && car.price >= searchPriceMin){
//                                         console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
//                                     }
//                                 }
//                             } else if(!searchMilesMin && searchMilesMax && car.miles <= searchMilesMax){
//                                 if(searchMilesMin && searchMilesMax && car.miles >= searchMilesMin && car.miles <= searchMilesMax){
//                                     if(searchPriceMax && car.price <= searchPriceMax){
//                                         if(searchPriceMin && car.price >= searchPriceMin){
//                                             console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
//                                         }
//                                     } else if(searchPriceMax = null){
//                                         if(searchPriceMin && car.price >= searchPriceMin){
//                                             console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
//                                         }
//                                     }
//                                 }
//                             } else if(!searchMilesMin && !searchMilesMax){
//                                 if(searchMilesMin && searchMilesMax && car.miles >= searchMilesMin && car.miles <= searchMilesMax){
//                                     if(searchPriceMax && car.price <= searchPriceMax){
//                                         if(searchPriceMin && car.price >= searchPriceMin){
//                                             console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
//                                         }
//                                     } else if(searchPriceMax = null){
//                                         if(searchPriceMin && car.price >= searchPriceMin){
//                                             console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
//                                         }
//                                     }
//                                 }
//                             }
//                         } else if (!searchYearMax && searchYearMin && car.year >= searchYearMin){
//                             if(searchMilesMin && searchMilesMax && car.miles >= searchMilesMin && car.miles <= searchMilesMax){
//                                 if(searchPriceMax && car.price <= searchPriceMax){
//                                     if(searchPriceMin && car.price >= searchPriceMin){
//                                         console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
//                                     }
//                                 } else if(searchPriceMax = null){
//                                     if(searchPriceMin && car.price >= searchPriceMin){
//                                         console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
//                                     }
//                                 }
//                             } else if(!searchMilesMin && searchMilesMax && car.miles <= searchMilesMax){
//                                 if(searchMilesMin && searchMilesMax && car.miles >= searchMilesMin && car.miles <= searchMilesMax){
//                                     if(searchPriceMax && car.price <= searchPriceMax){
//                                         if(searchPriceMin && car.price >= searchPriceMin){
//                                             console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
//                                         }
//                                     } else if(searchPriceMax = null){
//                                         if(searchPriceMin && car.price >= searchPriceMin){
//                                             console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
//                                         }
//                                     }
//                                 }
//                             } else if(!searchMilesMin && !searchMilesMax){
//                                 if(searchMilesMin && searchMilesMax && car.miles >= searchMilesMin && car.miles <= searchMilesMax){
//                                     if(searchPriceMax && car.price <= searchPriceMax){
//                                         if(searchPriceMin && car.price >= searchPriceMin){
//                                             console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
//                                         }
//                                     } else if(searchPriceMax = null){
//                                         if(searchPriceMin && car.price >= searchPriceMin){
//                                             console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
//                                         }
//                                     }
//                                 }
//                             }
//                         } else if(!searchYearMax && !searchYearMin){
//                             if(searchMilesMin && searchMilesMax && car.miles >= searchMilesMin && car.miles <= searchMilesMax){
//                                 if(searchPriceMax && car.price <= searchPriceMax){
//                                     if(searchPriceMin && car.price >= searchPriceMin){
//                                         console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
//                                     }
//                                 } else if(searchPriceMax = null){
//                                     if(searchPriceMin && car.price >= searchPriceMin){
//                                         console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
//                                     }
//                                 }
//                             } else if(!searchMilesMin && searchMilesMax && car.miles <= searchMilesMax){
//                                 if(searchMilesMin && searchMilesMax && car.miles >= searchMilesMin && car.miles <= searchMilesMax){
//                                     if(searchPriceMax && car.price <= searchPriceMax){
//                                         if(searchPriceMin && car.price >= searchPriceMin){
//                                             console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
//                                         }
//                                     } else if(searchPriceMax = null){
//                                         if(searchPriceMin && car.price >= searchPriceMin){
//                                             console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
//                                         }
//                                     }
//                                 }
//                             } else if(!searchMilesMin && !searchMilesMax){
//                                 if(searchMilesMin && searchMilesMax && car.miles >= searchMilesMin && car.miles <= searchMilesMax){
//                                     if(searchPriceMax && car.price <= searchPriceMax){
//                                         if(searchPriceMin && car.price >= searchPriceMin){
//                                             console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
//                                         }
//                                     } else if(searchPriceMax = null){
//                                         if(searchPriceMin && car.price >= searchPriceMin){
//                                             console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
//                                         }
//                                     }
//                                 }
//                             }
//                         } 
//                     } else if(!searchModel){
//                         if(car.year >= searchYearMin && car.year <= searchYearMax){
//                             if(car.miles >= searchMilesMin && car.miles <= searchMilesMax){
//                                 if(searchPriceMax && car.price <= searchPriceMax){
//                                     console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
//                                 }
//                             }
//                         }
//                     }
//                 }
//             })
//         })
// }

// break the horrible if statements above into functions...

// checkMake = () => {
//     if(searchMake && car.make === searchMake){
//         checkModel()
//     } else if(searchMake && car.make !== searchMake){
//         // if there is a searchMake but current car doesn't match then skip it
//     } 
//     // if there is not make and model listed then just check by year, miles, and price
//     else {
//         checkYear()
//     }
// }

// checkModel = () => {
    
// }

// checkYear = () => {
    
// }

// checkMiles = () => {
    
// }

// checkPrice = () => {
    
// }

render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <NavBar 
              loggedInStatus={this.state.loggedInStatus} 
              handleSuccessfulLogout={this.handleSuccessfulLogout}
              handleSuccessfulLogin={this.handleSuccessfulLogin}
            />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/search-form" component={SearchForm} />
              <Route path="/user-alerts" component={UserAlerts} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
