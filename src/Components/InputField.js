import React from 'react'

const InputField = ({value,name,placeholder,type, onChange}) => {
  return (
    <input type={type} placeholder={placeholder} name={name} value={ value} onChange={onChange} className='placeholder:text-primary-900 text-xl w-full bg-white focus:ring-0 focus:outline-none focus:border-primary-300 text-primary-900 border border-primary-200 shadow-sm px-3 py-2 rounded-md' />
  )
}

export default InputField