import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchResults = (props) => {
    const searchResultList = props.data.map(searchResult => {
        return(
            <div key={searchResult.id} className="search-result-wrapper" onClick={()=> window.open(`http://${searchResult.link}`, "_blank")}>
                <div className="search-result-content">
                    <div className="search-result-car-header">
                        <h2>{searchResult.year} {searchResult.make} {searchResult.model}</h2>
                    </div>
                    <div className="search-result-car-details">
                        <div>{`${searchResult.miles} miles`}</div>
                        <div>{`$${searchResult.price}`}</div>
                    </div>
                </div>
            </div>
        )
    })

    return <div className="search-results-list-wrapper">{searchResultList}</div>
}

export default SearchResults