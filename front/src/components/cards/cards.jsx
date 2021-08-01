import React from 'react'
import Card from './card'

const Cards = ({data}) => {
    return (
<div className="container">
      {data.response.docs.map(d => (
        <Card item={d} key={d.id}/>
      ))}
    </div>
    )
}

export default Cards
