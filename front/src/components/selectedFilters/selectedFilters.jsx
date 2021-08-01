import React, { useContext } from 'react'
import { FilterContext } from '../../context/filters/filters'
import SelectedFilter from './selectedFilter'

const SelectedFilters = () => {

    const {state} = useContext(FilterContext)

    return (
        <div className="selected">
            {state.filters.map( c => (
                c.values.map(v => (
                    <SelectedFilter category={c.category} value={v}/>)
                ))
            )}
        </div>
    )
}

export default SelectedFilters
