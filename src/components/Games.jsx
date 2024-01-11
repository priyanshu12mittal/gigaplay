import React from 'react'
import { gamesData } from '../assets/dummy'
import GameCard from './GameCard';

const Games = () => {
  return (
    <div id='games'>
      <h1 className=' text-center py-9 text-teal-200 text-4xl'>{gamesData.h1}</h1>
      <div className=' flex justify-center md:justify-between gap-10 flex-col md:flex-row md:flex-nowrap'>
        {
          gamesData.cards.map((card,index)=>{
            return <GameCard key={index} {...card}></GameCard>
          })
        }
      </div>
    </div>
  )
}

export default Games
