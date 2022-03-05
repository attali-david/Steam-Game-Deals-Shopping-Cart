import React, {useState, useEffect} from 'react'
import {useLocation, useParams} from 'react-router-dom'

const Item = (props) => {
  const location = useLocation()
  const product = location.state
  const params = useParams()
  const [item, setItem] = useState()

  console.log(params)

  const fetchItem = async () => {
    const itemObj = await fetch(`https://www.cheapshark.com/api/1.0/games?id={params.gameID}`)
    const item = await itemObj.json()
    setItem(item)
  }

  useEffect(() => {
    fetchItem()
    console.log(item)
  }, [])

  return (
      <section>
        <h1>Hello</h1>
      </section>
  )
}

export default Item
