import React from 'react'
import Card from './card'
import ClipLoader from 'react-spinners/ClipLoader'

const Cards = ({ data, isLoading }) => {

  if (isLoading) {
    return <ClipLoader size={80} className="spinner" />
  }

  return (
    <div className="container">
      {data.response.docs.map(d => (
        <Card item={d} key={d.id} />
      ))}
    </div>
  )
}

export default Cards
