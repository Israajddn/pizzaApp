import React from 'react'

// function Pizza(props) {
//   return (
//     <div>
//         <h2>{props.name}</h2>
//         <p>{props.ingredients}</p>
//         <span>{props.price}</span>
//         <img src={props.photoName} alt="focaccia" />
//     </div>
//   )
// }

// second way of doing it
function Pizza({name, ingredients, price, photoName}) {
  return (
    <div>
        <h2>{name}</h2>
        <p>{ingredients}</p>
        <span>{price}</span>
        <img src={photoName} alt="focaccia" />
    </div>
  )
}

export default Pizza