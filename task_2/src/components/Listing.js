import React from 'react'
import Item from './Item'

export default function Listing({data}) {
  return (
    <>
    {data.map(el => <Item cardInfo={el} key={el.listing_id}></Item>)}
    </>
  )
}
