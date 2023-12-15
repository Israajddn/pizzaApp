import React from 'react'
import Pizza from './pizza';

function Menu(props) {
  console.log(props.pizzaData);
  return (
    <main className='menu'>
        <h2>Our Menu</h2>
        {props.pizzaData.map((pizza)=>(
          <Pizza {...pizza}/>
        )
        )}
    </main>
  )
}

export default Menu