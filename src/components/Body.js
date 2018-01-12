import React from 'react'

const Body = ({ display }) => (
  <div className='body'>
    <ul>
      <li onClick={display}>Ross</li>
      <li onClick={display}>Frederick</li>
      <li onClick={display}>Bishal</li>
      <li onClick={display}>Melissa</li>
      <li onClick={display}>Tracey</li>
      <li onClick={display}>Tim</li>
      <li onClick={display}>Eddie</li>
    </ul>
  </div>
)

export default Body
