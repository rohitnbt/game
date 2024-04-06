import React, { useEffect, useState } from 'react'
import { User } from './User'


export const Player1 = ({user, setUser}) => {
    const [isDisabled, setIsDisabled] = useState(false);
    useEffect(()=>{
        setIsDisabled(user)
        console.warn("Player 1/ User : "+user+" isDisabled : "+isDisabled);
    },[user])
  return (
    <div className={`player1 ${user ? "inactive" :"" }`}>
        <h1>Player 1</h1>
        <User isDisabled={isDisabled} player="player 1"/>
    </div>
  )
}
