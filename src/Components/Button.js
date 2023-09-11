import React from 'react'

const Button = ({ text, isOutline, isFull, isIcon }) => {

  const btnType = isOutline ? ' text-center border border-primary-800 bg-white px-6 rounded-md text-primary-700 hover:bg-primary-50 focus:bg-primary-100' : ' bg-primary-500 hover:bg-primary-600 px-6 focus:bg-primary-700 text-white focus-visible:outline-none '
  const btnFull = isFull ? ' w-full py-3 text-xl' : ' py-2 text-md'
  const btnIcon = isIcon ?  ' px-0 px-2' : ''

  return (
    <div>
      <button className={'block text-center transition rounded-md font-semibold ' + btnType + btnFull + btnIcon}>{text}</button>
    </div>  
    
  )
}

export default Button