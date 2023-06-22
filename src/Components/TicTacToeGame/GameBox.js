import React from 'react'

const GameBox = ({element,playerClick})=>{
  return (
    <div className='gamebox'
    onclick ={playerClick()}>
        {element}-Gamebox

    </div>
  )
}

export default GameBox