import React from 'react'
import Filter from './filter'

const Filters = React.memo(({ facets, isLoading }) => {

    if (facets) {
        return (
            <div className="filters">
                {Object.entries(facets).map(f => (
                    <Filter facet={f} key={f[0]} isLoading={isLoading} />
                ))}
            </div>
        )
    }

    return (
        <div>
            Loading
        </div>
    )

})

export default Filters
