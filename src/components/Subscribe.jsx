import React from 'react'
import { subscribe } from '../assets/dummy'
import Button from './Button'

const Subscribe = () => {
  return (
    <div className=' text-center mx-auto my-20' id='contact'>
      <h1 className=' text-3xl mb-2 font-medium text-teal-200'>{subscribe.h1}</h1>
      <p className=' text-zinc-400 mb-2'>{subscribe.p}</p>
      <input className=' my-4 w-full max-w-3xl text-center py-4 px-10 rounded-full bg-transparent border-zinc-400 hover:bg-teal-200/30 duration-200 outline-teal-500 border-2' type='text' placeholder='Email Address'></input>
      <br></br>
      <Button text={"Submit"}></Button>
    </div>
  )
}

export default Subscribe
