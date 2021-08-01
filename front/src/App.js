import React, {useContext} from 'react'
import { getGames } from './api'
import { useQuery } from 'react-query'
import Cards from './components/cards/cards'
import Filters from './components/filter/filters'
import SelectedFilters from './components/selectedFilters/selectedFilters'
import { FilterContext } from './context/filters/filters'


function App() {
  const {state, dispatchFilters} = useContext(FilterContext)
  const {isError, isLoading, error, data} = useQuery(["games", state], () => getGames(state.search, state.filters))

  if(isError){
    return String(error)
  }

  return (
    <div className="wrapper">
      <div className="search">
          <input 
          type="text" 
          placeholder="Search" 
          className="search__input" 
          onChange={(e)=>{dispatchFilters({
            type:'search', 
            payload: {
              searchValue: e.target.value
              }
            }
          )}}/>
      </div>
      <SelectedFilters/>
      {isLoading ? <Filters isLoading/> : <Filters facets={data.facet_counts} />}
      {isLoading ? "Is loading..." : <Cards data={data}/>}
    </div>
  );
}

export default App;
