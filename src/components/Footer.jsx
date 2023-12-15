import React from 'react'

function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;
  console.log(hour);
  const isOpen = hour >= openHour && hour <= closeHour;
  // if the hour is greater than or equal to open hour 
  // and less than or equal to the close hour

  return (
    <footer className='footer'>
       {/* {new Date().toLocaleDateString()} We are currently open */}
       <div className='order'>
        {
          isOpen && (
            <p>we are open until {closeHour}:00. Come visit us or order online</p>
          )
        }
        <button className='btn'>Order</button>
       </div>
    </footer>
  )
}

export default Footer