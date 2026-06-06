import React from 'react'

export default function Buttons({
    text,
    type,
    onclick,
    icon,
}) {
  return (
    <button type={type} onclick={onclick}className='bg-blue-500 text-white p-2 ruonded-md hover:p-3 hover:bg-blue-700 hover:text-gray-300'> 
        {text}
        {icon}
    </button>
  )
}
