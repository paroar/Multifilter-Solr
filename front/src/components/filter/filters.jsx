import React from 'react'
import Filter from './filter'

const Filters = ({facets, isLoading}) => {

    if(facets){
        return (
            <div className="filters">
                {Object.entries(facets.facet_fields).map(f => (
                    <Filter facet={f} key={f[0]}/>
                    ))}
            </div>
        )
    }

    return (
        <p>Filter Loading</p>
    )
}

export default Filters
