import React from 'react'

const Button = ({text}) => {
  return (
    <button className=' text-zinc-700 md:px-14 bg-teal-200 md:py-4 px-8 py-3 w-fit rounded-full hover:bg-transparent duration-200 hover:border-white hover:text-white border-teal-200 border-2'>
      {text}
    </button>
  )
}

export default Button
