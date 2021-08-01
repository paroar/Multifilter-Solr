import React, { useContext } from 'react'
import { FilterContext } from '../../context/filters/filters'

const SelectedFilter = ({category, value}) => {

    const {dispatchFilters} = useContext(FilterContext)

    return (
        <span 
            className="selected__filter" 
            onClick={() => dispatchFilters({type: "remove", payload: {category, value}})}>
                {value}
        </span>
    )
}

export default SelectedFilter
