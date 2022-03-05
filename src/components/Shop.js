import React, {useState, useEffect} from 'react'
import {Link, Outlet} from 'react-router-dom'
import '../stylesheets/shop.css'

const Shop = ({formHandler, quantities, changeQuantities}) => {
  useEffect(()=> {
    fetchData()
  }, [])

  const [items, setItems] = useState([])
  const [game, setGame] = useState()


  const fetchData = async () => {
    const dataset = await fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15')
    const item = await dataset.json()
    setItems(item)
  }

  const formSubmission = (e) => {
    e.preventDefault()
    formHandler(game)
  }

  const changeHandler = (e) => {
    const {name, value} = e.target
    changeQuantities(name, value)
    const game = items.find(obj => obj.title === name)
    setGame(game)
  }

  return (
    <main className="shopItems">
      {items.map(game => (
        <div className='items' key={game.gameID}>
            <img src={game.thumb}/>
            <h3>{game.title}</h3>
            <section className='priceInformation'>
              <span className='salePrice'>${game.salePrice} </span>
              <span className="normalPrice"> ${game.normalPrice}</span>
            </section>
            <span>Metacritic: {game.metacriticScore}</span>
            <form className='cartAddition' onSubmit={formSubmission}>
              <label htmlFor={game.title}>Quantity:</label>
              <input type='number' name={game.title} value={quantities[game.title]} onChange={changeHandler}/>
              <button type='submit'>Add to Cart</button>
            </form>
        </div>
      ))}
    </main>
  )
}

export default Shop
