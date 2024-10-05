import React from 'react'
import './Button.css'

const Button = ({onClick,type='button',text}) => {
  return (
    <button onClick={onClick} type={type} className='btn1'>
      {text}
    </button>
  )
}

export default Button