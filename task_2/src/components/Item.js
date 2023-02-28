import React, {useState} from 'react'


export default function Item({cardInfo}) {
  const {url, MainImage, title, currency_code, price, quantity} = cardInfo;

  const getFullCurrency = () => {
    switch(currency_code) {
      case 'USD':
      return `$ ${price}`;
      case 'EUR':
      return `€ ${price}`;
      default: 
      return `${price} GBP`
    }
  }

  const getTitle = () => {
    return (title?.length < 50) ? title : `${title?.slice(0, 50)}...` 
  }

  const status = () => {
    if(!quantity) return;
    if(quantity < 10) return ('-low')
    if(quantity < 20) return('-medium')
    return('-high')
  }

  return (
    <>
    {cardInfo && <div className="item-list">
      <div className="item">
        <div className="item-image">
          <a href={url}>
            <img src={MainImage?.url_570xN} alt="#"/>
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{getTitle()}</p>
          <p className="item-price">{getFullCurrency()}</p>
          <p className={`item-quantity level${status()}`}>{quantity} left</p>
        </div>
    </div>
  </div>}
    </>
    
  )
}
