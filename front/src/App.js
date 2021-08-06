import React, { useContext, useState, useEffect } from 'react'
import { getGames } from './api'
import { useQuery } from 'react-query'
import Cards from './components/cards/cards'
import Filters from './components/filter/filters'
import SelectedFilters from './components/selectedFilters/selectedFilters'
import { FilterContext } from './context/filters/filters'


function App() {
  const { state, dispatchFilters } = useContext(FilterContext)
  const { isError, isLoading, error, data } = useQuery(["games", state], () => getGames(state.search, state.filters))

  const [preData, setPreData] = useState({
    facet_counts: {
      facet_fields: []
    }
  })


  useEffect(() => {
    if (data) {
      setPreData(data)
    }
  }, [data])

  if (isError) {
    return String(error)
  }


  console.log({ data, isLoading, preData })



  return (
    <div className="wrapper">
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          className="search__input"
          onChange={(e) => {
            dispatchFilters({
              type: 'search',
              payload: {
                searchValue: e.target.value
              }
            }
            )
          }} />
      </div>
      <SelectedFilters />
      <Filters facets={preData.facet_counts.facet_fields} isLoading={isLoading} />
      <Cards data={data} isLoading={isLoading} />
    </div>
  );
}

export default App;
