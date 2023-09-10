import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class CardItem extends Component {
  render() {
    const { 
      thumbnail,
    id,
    price,
    quantity,
    title,
    totalPrice
} = this.props.product

const priceValue = quantity == 1 ? price : `${quantity} x ${price} = ${totalPrice}`

    return (
    <div className='flex items-center mb-4 gap-4 border-b-2 border-slate-5000'>
        <img className='w-20' src={thumbnail} alt={title} />
        <div className='flex-1'>
          <Link className='text-xl font-semibold' to={`/products/${id}`}>{title}</Link>
          <p className='text-gray-700'>{priceValue}</p>
        </div>
        </div>
    )
  }
}

export default CardItem