import React from 'react'
import { motion } from 'framer-motion'
import { workWithUs } from '../assets/dummy'
import Button from './Button'
import { variant1 } from '../utils/motion'

const WorkWithUs = () => {
  return (
    <div className=' text-center md:text-left py-10 overflow-hidden transform-style' id='careers'>
      <div className=' bg-workimg bg-cover bg-center -z-[1] translate3d min-h-full rounded-3xl'>
        <div className=' bg-slate-900 bg-opacity-70 md:bg-opacity-0 px-5 md:px-20 py-40'>
          <motion.div variants={variant1(0.4)} initial='hidden' whileInView='show' className=' md:max-w-md w-full'>
            <h1 className=' text-teal-200 text-3xl md:text-5xl'>{workWithUs.h1}</h1>
            <p className=' text-zinc-400 pt-3 pb-6'>{workWithUs.p}</p>
            <Button text={workWithUs.button}></Button>
          </motion.div>
        </div>
      </div>
    </div>
  ) 
}

export default WorkWithUs
