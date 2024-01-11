import React from 'react'
import {motion} from 'framer-motion'
import { variant2 } from '../utils/motion'
import { featuredData } from '../assets/dummy'
import Button from './Button'

const Features = () => {
  return (
    <div className=' min-h-screen p-5 lg:sticky top-28 flex justify-center md:justify-end max-w-[1440px] w-full mx-auto'>
      <div className=' md:max-w-md w-full'>
        <motion.h1 variants={variant2(0.5)} initial='hidden' whileInView='show' className=' text-4xl text-teal-200 font-medium my-5'>
          {featuredData.h1}
        </motion.h1>
        <motion.div
        variants={variant2(0.7)}
        initial='hidden'
        whileInView='show'
        className=' bg-slate-900/50 border-2 rounded-xl p-8 border-slate-700 md:bg-slate-700/50'
      >
        <video src={featuredData.video_url} playsInline loop muted autoPlay preload='true' className=' rounded-lg'></video>
        <h1 className=' text-4xl text-white font-semibold mt-6'>{featuredData.card_h1}</h1>
        <p className=' text-lg text-white my-5 opacity-40'>{featuredData.card_p}</p>
        <Button text={'Play Now'}></Button>
      </motion.div>
      </div>
    </div>
  )
}

export default Features
