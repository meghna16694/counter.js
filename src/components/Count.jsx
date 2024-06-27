import React from 'react'
import { useState } from 'react'

export const Count = ({incrementValue}) => {

    const [price , setPrice] = useState(0)

    const handleIncrement = () =>{
        setPrice(price + incrementValue)
    }

    const handleDecrement = () =>{
        setPrice(price - incrementValue)
    }
  return (
    <div>
        <h1>price : ${price}</h1>
        <button onClick={handleIncrement}> +</button>

        <button onClick={handleDecrement}>-</button>
    </div>
  )
}
