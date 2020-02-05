import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchResults = (props) => {
    const searchResultList = props.data.map(searchResult => {
        return(
            <div key={searchResult.id} className="search-result-wrapper">
                <div className="search-result-content">
                    <div className="search-result-car-header">
                        <a onClick={()=> window.open(`http://${searchResult.link}`, "_blank")}><h2>{searchResult.year} {searchResult.make} {searchResult.model}</h2></a>
                    </div>
                    <div className="search-result-car-details">{`${searchResult.miles} miles`} {`$${searchResult.price}`}</div>
                </div>
            </div>
        )
    })

    return <div className="search-results-list-wrapper">{searchResultList}</div>
}

export default SearchResults