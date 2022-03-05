import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../stylesheets/nav.css'

const Nav = ({count}) => {

  return (
    <nav>
      <h1 className='logo'>STEAM</h1>
      <ul>
        <Link to="/shop">
          <li>DEALS</li>
        </Link>
        <Link to='/shoppingcart'>
          {(count === 0) ? <li>CART</li> : <li>CART {count}</li>}
        </Link>
      </ul>
    </nav>
  )
}

export default Nav
