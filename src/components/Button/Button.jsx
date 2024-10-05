import React from 'react'
import './Button.css'

const Button = ({onClick,type='button',text, style}) => {
  return (
    <button onClick={onClick} type={type} style={style}className='btn1'>
      {text}
    </button>
  )
}

export default Button