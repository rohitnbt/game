import React, { useEffect, useState } from 'react'
import { User } from './User'

export const Player2 = ({user}) => {
    const  [isDisabled, setIsDisabled] = useState(false);
    useEffect(()=>{
        setIsDisabled(user);
    },[user])
  return (
    <div className={`player2 ${user ? "inactive" :"" }`}>
        <h1>Player 2</h1>
        <User isDisabled={isDisabled} player="player 2"/>
    </div>
  )
}
