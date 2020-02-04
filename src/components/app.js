import React, { Component } from "react";
import GoogleLogin from 'react-google-login';

import NavBar from "./navigation"
import Footer from "./footer"
import SearchForm from "./search-form"

export default class App extends Component {

    constructor(props) {
        super(props)
    
        // Icons();
    
        this.state = {
          loggedInStatus: "NOT_LOGGED_IN"
        }
      }

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
      <div className="app">
        <NavBar />
        <h1>Get alerts when good deals are posted to KSL Csrs</h1>
        <h2>Use the form below to start</h2>
        <SearchForm />
        <Footer />
      </div>
    );
  }
}
