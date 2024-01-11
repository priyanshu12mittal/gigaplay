import React from 'react'
import {motion} from 'framer-motion'
import { variant1 } from '../utils/motion'
import Button from './Button'

const GameCard = ({ delay, img, bg_img, card_h1, card_type, card_p, button}) => {
  return (
    <motion.div
      variants={variant1(delay)} initial='hidden' whileInView='show' 
      className=' text-center relative rounded-2xl w-full md:w-[30%] basis-0 shrink-0 grow bg-gray-900 bg-opacity-50 p-5'
    > 
      <img className=' shadow-lg rounded-2xl w-full h-60 object-cover object-center shadow-gray-900/75' src={bg_img}></img>
      <div className=' absolute top-12 mx-auto left-0 right-0'>
        <img className=' mx-auto w-[100px] h-[100px] object-cover' src={img}></img>
        <h1 className=' text-white text-2xl font-bold'>{card_h1}</h1>
        <p className=' text-white text-lg font-normal'>{card_type}</p>
      </div>
      <p className=' text-zinc-400 text-sm font-medium text-center mt-7 mb-4'>{card_p}</p>
      <Button text={'Play Now'}></Button>
    </motion.div>
  )
}

export default GameCard
