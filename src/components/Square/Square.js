import React from 'react';

const Square = (props) => (
  <button className='square' 
    onClick={props.onClick}
    id={props.id} >
    {props.value}
  </button>
)

export default Square;