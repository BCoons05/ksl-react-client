import React, {Component, useEffect, useState} from 'react'

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
            searchPriceMax: 50000000
        }
    }

    handleSubmit = (event) => {
        axios
        // .get('http://localhost:5000/cars')
        .get('https://ksl-scraper-api-main.herokuapp.com/cars')
        .then(response => {
            // console.log(response.data)
            response.data.forEach(car => {
                // this is awful but it works. TODO make this less awful with functions PLEASE
                // Seriously this is the worst thing I have ever done
                if(this.state.searchMake && car.make.toLowerCase() === this.state.searchMake.toLowerCase()){
                    if(this.state.searchModel && car.model.toLowerCase() === this.state.searchModel.toLowerCase()){
                        if(this.state.searchYearMin && this.state.searchYearMax && car.year >= this.state.searchYearMin && car.year <= this.state.searchYearMax){
                            if(this.state.searchMilesMin && this.state.searchMilesMax && car.miles >= this.state.searchMilesMin && car.miles <= this.state.searchMilesMax){
                                if(this.state.searchPriceMax && car.price <= this.state.searchPriceMax){
                                    if(this.state.searchPriceMin && car.price >= this.state.searchPriceMin){
                                        console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
                                    }
                                } else if(this.state.searchPriceMax = null){
                                    if(this.state.searchPriceMin && car.price >= this.state.searchPriceMin){
                                        console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
                                    }
                                }
                            } else if(!this.state.searchMilesMin && this.state.searchMilesMax && car.miles <= this.state.searchMilesMax){
                                if(this.state.searchMilesMin && this.state.searchMilesMax && car.miles >= this.state.searchMilesMin && car.miles <= this.state.searchMilesMax){
                                    if(this.state.searchPriceMax && car.price <= this.state.searchPriceMax){
                                        if(this.state.searchPriceMin && car.price >= this.state.searchPriceMin){
                                            console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
                                        }
                                    } else if(this.state.searchPriceMax = null){
                                        if(this.state.searchPriceMin && car.price >= this.state.searchPriceMin){
                                            console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
                                        }
                                    }
                                }
                            } else if(!this.state.searchMilesMin && !this.state.searchMilesMax){
                                if(this.state.searchMilesMin && this.state.searchMilesMax && car.miles >= this.state.searchMilesMin && car.miles <= this.state.searchMilesMax){
                                    if(this.state.searchPriceMax && car.price <= this.state.searchPriceMax){
                                        if(this.state.searchPriceMin && car.price >= this.state.searchPriceMin){
                                            console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
                                        }
                                    } else if(this.state.searchPriceMax = null){
                                        if(this.state.searchPriceMin && car.price >= this.state.searchPriceMin){
                                            console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
                                        }
                                    }
                                }
                            }
                        } else if (!this.state.searchYearMax && this.state.searchYearMin && car.year >= this.state.searchYearMin){
                            if(this.state.searchMilesMin && this.state.searchMilesMax && car.miles >= this.state.searchMilesMin && car.miles <= this.state.searchMilesMax){
                                if(this.state.searchPriceMax && car.price <= this.state.searchPriceMax){
                                    if(this.state.searchPriceMin && car.price >= this.state.searchPriceMin){
                                        console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
                                    }
                                } else if(this.state.searchPriceMax = null){
                                    if(this.state.searchPriceMin && car.price >= this.state.searchPriceMin){
                                        console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
                                    }
                                }
                            }
                        } else if(!this.state.searchYearMax && !this.state.searchYearMin){
                            if(this.state.searchMilesMin && this.state.searchMilesMax && car.miles >= this.state.searchMilesMin && car.miles <= this.state.searchMilesMax){
                                if(this.state.searchPriceMax && car.price <= this.state.searchPriceMax){
                                    if(this.state.searchPriceMin && car.price >= this.state.searchPriceMin){
                                        console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
                                    }
                                } else if(this.state.searchPriceMax = null){
                                    if(this.state.searchPriceMin && car.price >= this.state.searchPriceMin){
                                        console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
                                    }
                                }
                            }
                        } 
                    } else if(!this.state.searchModel){
                        if(car.year >= this.state.searchYearMin && car.year <= this.state.searchYearMax){
                            if(car.miles >= this.state.searchMilesMin && car.miles <= this.state.searchMilesMax){
                                if(this.state.searchPriceMax && car.price <= this.state.searchPriceMax){
                                    console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
                                }
                            }
                        }
                    }
                } else if(!this.state.searchMake){
                    if(this.state.searchModel && car.model.toLowerCase() === this.state.searchModel.toLowerCase()){
                        if(this.state.searchYearMin && this.state.searchYearMax && car.year >= this.state.searchYearMin && car.year <= this.state.searchYearMax){
                            if(this.state.searchMilesMin && this.state.searchMilesMax && car.miles >= this.state.searchMilesMin && car.miles <= this.state.searchMilesMax){
                                if(this.state.searchPriceMax && car.price <= this.state.searchPriceMax){
                                    if(this.state.searchPriceMin && car.price >= this.state.searchPriceMin){
                                        console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
                                    }
                                } else if(this.state.searchPriceMax = null){
                                    if(this.state.searchPriceMin && car.price >= this.state.searchPriceMin){
                                        console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
                                    }
                                }
                            } else if(!this.state.searchMilesMin && this.state.searchMilesMax && car.miles <= this.state.searchMilesMax){
                                if(this.state.searchMilesMin && this.state.searchMilesMax && car.miles >= this.state.searchMilesMin && car.miles <= this.state.searchMilesMax){
                                    if(this.state.searchPriceMax && car.price <= this.state.searchPriceMax){
                                        if(this.state.searchPriceMin && car.price >= this.state.searchPriceMin){
                                            console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
                                        }
                                    } else if(this.state.searchPriceMax = null){
                                        if(this.state.searchPriceMin && car.price >= this.state.searchPriceMin){
                                            console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
                                        }
                                    }
                                }
                            } else if(!this.state.searchMilesMin && !this.state.searchMilesMax){
                                if(this.state.searchMilesMin && this.state.searchMilesMax && car.miles >= this.state.searchMilesMin && car.miles <= this.state.searchMilesMax){
                                    if(this.state.searchPriceMax && car.price <= this.state.searchPriceMax){
                                        if(this.state.searchPriceMin && car.price >= this.state.searchPriceMin){
                                            console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
                                        }
                                    } else if(this.state.searchPriceMax = null){
                                        if(this.state.searchPriceMin && car.price >= this.state.searchPriceMin){
                                            console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
                                        }
                                    }
                                }
                            }
                        } else if (!this.state.searchYearMax && this.state.searchYearMin && car.year >= this.state.searchYearMin){
                            if(this.state.searchMilesMin && this.state.searchMilesMax && car.miles >= this.state.searchMilesMin && car.miles <= this.state.searchMilesMax){
                                if(this.state.searchPriceMax && car.price <= this.state.searchPriceMax){
                                    if(this.state.searchPriceMin && car.price >= this.state.searchPriceMin){
                                        console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
                                    }
                                } else if(this.state.searchPriceMax = null){
                                    if(this.state.searchPriceMin && car.price >= this.state.searchPriceMin){
                                        console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
                                    }
                                }
                            } else if(!this.state.searchMilesMin && this.state.searchMilesMax && car.miles <= this.state.searchMilesMax){
                                if(this.state.searchMilesMin && this.state.searchMilesMax && car.miles >= this.state.searchMilesMin && car.miles <= this.state.searchMilesMax){
                                    if(this.state.searchPriceMax && car.price <= this.state.searchPriceMax){
                                        if(this.state.searchPriceMin && car.price >= this.state.searchPriceMin){
                                            console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
                                        }
                                    } else if(this.state.searchPriceMax = null){
                                        if(this.state.searchPriceMin && car.price >= this.state.searchPriceMin){
                                            console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
                                        }
                                    }
                                }
                            } else if(!this.state.searchMilesMin && !this.state.searchMilesMax){
                                if(this.state.searchMilesMin && this.state.searchMilesMax && car.miles >= this.state.searchMilesMin && car.miles <= this.state.searchMilesMax){
                                    if(this.state.searchPriceMax && car.price <= this.state.searchPriceMax){
                                        if(this.state.searchPriceMin && car.price >= this.state.searchPriceMin){
                                            console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
                                        }
                                    } else if(this.state.searchPriceMax = null){
                                        if(this.state.searchPriceMin && car.price >= this.state.searchPriceMin){
                                            console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
                                        }
                                    }
                                }
                            }
                        } else if(!this.state.searchYearMax && !this.state.searchYearMin){
                            if(this.state.searchMilesMin && this.state.searchMilesMax && car.miles >= this.state.searchMilesMin && car.miles <= this.state.searchMilesMax){
                                if(this.state.searchPriceMax && car.price <= this.state.searchPriceMax){
                                    if(this.state.searchPriceMin && car.price >= this.state.searchPriceMin){
                                        console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
                                    }
                                } else if(this.state.searchPriceMax = null){
                                    if(this.state.searchPriceMin && car.price >= this.state.searchPriceMin){
                                        console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
                                    }
                                }
                            } else if(!this.state.searchMilesMin && this.state.searchMilesMax && car.miles <= this.state.searchMilesMax){
                                if(this.state.searchMilesMin && this.state.searchMilesMax && car.miles >= this.state.searchMilesMin && car.miles <= this.state.searchMilesMax){
                                    if(this.state.searchPriceMax && car.price <= this.state.searchPriceMax){
                                        if(this.state.searchPriceMin && car.price >= this.state.searchPriceMin){
                                            console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
                                        }
                                    } else if(this.state.searchPriceMax = null){
                                        if(this.state.searchPriceMin && car.price >= this.state.searchPriceMin){
                                            console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
                                        }
                                    }
                                }
                            } else if(!this.state.searchMilesMin && !this.state.searchMilesMax){
                                if(this.state.searchMilesMin && this.state.searchMilesMax && car.miles >= this.state.searchMilesMin && car.miles <= this.state.searchMilesMax){
                                    if(this.state.searchPriceMax && car.price <= this.state.searchPriceMax){
                                        if(this.state.searchPriceMin && car.price >= this.state.searchPriceMin){
                                            console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
                                        }
                                    } else if(this.state.searchPriceMax = null){
                                        if(this.state.searchPriceMin && car.price >= this.state.searchPriceMin){
                                            console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
                                        }
                                    }
                                }
                            }
                        } 
                    } else if(!this.state.searchModel){
                        if(car.year >= this.state.searchYearMin && car.year <= this.state.searchYearMax){
                            if(car.miles >= this.state.searchMilesMin && car.miles <= this.state.searchMilesMax){
                                if(this.state.searchPriceMax && car.price <= this.state.searchPriceMax){
                                    console.log(`${car.year} ${car.make} ${car.model} ${car.price} ${car.miles} ${car.link}`)
                                }
                            }
                        }
                    }
                }
            })
        })
        .then
            this.setState({
                searchMake:"",
                searchModel:"",
                searchYearMin: 0,
                searchYearMax: 3000,
                searchMilesMin: 0,
                searchMilesMax: 100000000,
                searchPriceMin: 0,
                searchPriceMax: 50000000
            })
    
        event.preventDefault();
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