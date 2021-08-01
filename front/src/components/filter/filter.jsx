import React, {useContext} from 'react'
import { FilterContext } from '../../context/filters/filters'

const Filter = ({facet}) => {

    const {dispatchFilters} = useContext(FilterContext)

    if(facet){
        const [category, fields] = facet
        return (
            <div className="filter">
                <h4 className="filter__title">{category}</h4>
                {fields.map(f => (
                    <div 
                        key={f[0]} 
                        className="filter__item" 
                        onClick={() => dispatchFilters({
                            type: 'add', 
                            payload: {
                                category: category, 
                                value: f[0]
                            }
                        }
                        )}>
                        <span className="filter__item-key">{f[0]}</span>
                        <span className="filter__item-value">{f[1]}</span> 
                    </div>
                    ))}
            </div>
        )
    }

    return (
        <p>Filter Loading</p>
    )
}

export default Filter
