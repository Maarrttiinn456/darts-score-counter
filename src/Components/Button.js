import React from 'react'

const Button = ({ text, size, outline, bgColor, textColor }) => {

  const btnClass = `block text-center  transition rounded-md font-semibold ${size === 'small' ? 'py-3 px-3' : size === 'big' ? 'py-3 px-6 text-xl w-full' : 'py-2 px-6'} ${outline === 'true' ? `border border-primary-800 bg-white hover:bg-primary-50 focus:bg-primary-100` : `bg-${bgColor}-500 bg-${bgColor} hover:bg-${bgColor}-600 focus:bg-${bgColor}-700 text-${textColor} focus-visible:outline-none`} `



  return (
    <button className={btnClass}>{text}</button>  
  )
}

export default Button