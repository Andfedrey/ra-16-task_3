import React from 'react'
import Star from './Star'

export default function Stars({count}) {
  const newArray = Array(count).fill('')
  return (
    <>
      {(count > 0 && count <= 5) && 
      <ul className="card-body-stars u-clearfix">
        {newArray.map(el => <li><Star></Star></li>)}
    </ul>}
    </>
    
  )
}
