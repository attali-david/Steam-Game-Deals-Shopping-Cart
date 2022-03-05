import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import {useState} from 'react'
import Nav from './components/Nav.js'
import Shop from './components/Shop.js'
import ShoppingCart from './components/ShoppingCart.js'
import Item from './components/Items.js'
import './stylesheets/app.css'
import Home from './components/Home.js'


const App = () => {
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState([])
  const [quantities, setQuantities] = useState({})


  const formHandler = (game) => {
    if(cart.find(item => item.game.title === game.title)){
      const filterCart = cart.filter(item => item.game.title != game.title)
      setCart([...filterCart].concat({game, quantity:quantities[game.title]}))
    } else {
      setCart(prevCart => (prevCart.concat({game, quantity:quantities[game.title]}))
        )
      setCount(count+1)
    }
  }

  const changeQuantities = (name, value) => {
    if(quantities.hasOwnProperty(name)){
      const mapQuantities = quantities
      mapQuantities[name] = value
      setQuantities({...mapQuantities})
    } else {
      setQuantities({...quantities,[name]:value})
    }
  }
  console.log(cart)
  // console.log(quantities)


  return (
    <BrowserRouter>
      <>
        <Nav count={count}/>
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path= '/shop' element={<Shop formHandler={formHandler} changeQuantities={changeQuantities} quantities={quantities}/>}/>
          <Route path = '/shoppingcart' element={<ShoppingCart cart={cart}/>}/>
        </Routes >
      </>
    </BrowserRouter>
  )
}

export default App
