import React, { useState } from 'react'
import {motion} from 'framer-motion'
import {navVariants} from '../utils/motion'
import {navbar} from '../assets/dummy'
import {FaXmark,FaBarsStaggered} from 'react-icons/fa6'

const Navbar = () => {
  const [click,setClick] = useState(false);
  return (
    <motion.div
      variants={navVariants}
      initial='hidden'
      whileInView="show"
      className=' fixed top-0 left-0 right-0 bg-transparent p-5 max-w-[11/12] w-full mx-auto flex justify-between z-50'
    >
      <h1 className=' text-white my-3 text-2xl font-semibold'>{navbar.logo}</h1>
      <div className=' flex gap-5 flex-col-reverse items-end md:flex-row'>
        <div className={`${click ? ' w-44 text-center sm:text-left py-12 sm:py-0 sm:w-fit px-5 opacity-100':" w-0 px-0 opacity-0"} overflow-hidden bg-white duration-200 sm:duration-1000 rounded-lg sm:h-14 flex flex-col sm:flex-row p-5 sm:items-center sm:justify-between gap-4`}>
          {navbar.links.map(({url,text},index)=> <a key={index} className=' text-xs hover:text-teal-500 duration-500' href={url}>{text}</a>)}
        </div>
        <div onClick={() => setClick(!click)} className=" w-14 h-14 bg-teal-200 rounded-xl flex items-center justify-center">
          {click ? <FaXmark className="text-2xl" /> : <FaBarsStaggered className="text-2xl" />}
        </div>
      </div>
    </motion.div>
  ) 
}

export default Navbar
