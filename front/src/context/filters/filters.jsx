import React, { createContext, useReducer } from 'react'

function reducer(state, action) {
    const { type, payload } = action;
    switch (type) {
      case 'add': {
        const {category, value} = payload
        const copyState = [...state.filters]
        
        const catFound = copyState.find(f => f.category === category);
        if (catFound){
          !catFound.values.find(f => f === value) && catFound.values.push(value)
          const idx = copyState.findIndex(f => f.category === category)
          copyState[idx] = catFound
        } else{
          copyState.push({"category": category, values: [value]}) 
        }
        return {
          filters: copyState,
          search: state.search
        };
      }
      case 'remove':{
        const {category, value} = payload
        let copyState = [...state.filters]
        const catIdx = copyState.findIndex(f => f.category === category)
        const newVals = copyState[catIdx].values.filter(f => f !== value)
        const idx = copyState.findIndex(f => f.category === category)
        if(newVals.length <= 0){
          copyState.splice(catIdx,1)
          if(copyState.length <= 0){
            copyState = []
          }
        }else{
          copyState[idx]["values"] = newVals 
        }

        return {
          filters: copyState,
          search: state.search
        };
      }
      case 'search':{
        const {searchValue} = payload
        return {
          filters: state.filters,
          search: searchValue
        };
      }
      default:
        throw new Error();
    }
  }  

const FilterContext = createContext({})

const initialState = {
    filters: [],
    search: ""
}

const FiltersProvider = ({children}) => {

    const [state, dispatchFilters] = useReducer(reducer, initialState)

    return (
        <FilterContext.Provider value={{state, dispatchFilters}}>
            {children}
        </FilterContext.Provider>
    )
}

export {FilterContext, FiltersProvider}
