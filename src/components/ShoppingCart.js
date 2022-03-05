import React, {useState, useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import '../stylesheets/shoppingcart.css'

const ShoppingCart = ({cart}) => {
  const [total, setTotal] = useState(0)
  const location = useLocation()

  useEffect(() => {
    let sum = 0
    for (var items of cart) {
      sum = sum + Number(items.game.salePrice)*items.quantity
    }
    setTotal(sum.toFixed(2))
  }, [])

  return (
    <section className='cart'>
      {cart.map(item => (
        <div key={item.game.gameID + total} className='cartItem'>
          <aside className='cartImage'>
            <img src={item.game.thumb}/>
          </aside>
          <h2>{item.game.title}</h2>
          <section className='pricing'>
            <h1>Quantity: {item.quantity}</h1>
            <h2 className='savings'>You Save {parseInt(item.game.savings)}%</h2>
            <h3 className='price'>Price: ${item.game.salePrice}</h3>
          </section>
        </div>
      ))}
      <span className='total'>Total: {total}</span>
    </section>
  )
}

export default ShoppingCart
