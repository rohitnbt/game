import React, { useEffect, useState } from 'react'
import { User } from './User'
import { Score } from './Score';
import { useSelector } from 'react-redux'

export const Player2 = ({user}) => {
    const  [isDisabled, setIsDisabled] = useState(false);
    const score = useSelector((state) => state.player.playerTowScore);

    useEffect(()=>{
        setIsDisabled(user);
    },[user])
  return (
    <div className={`player2 ${user ? "inactive" :"" }`}>
        <h1>Player 2</h1>
        <User isDisabled={isDisabled} player="player 2"/>
        { score.length ? <Score score={score} /> : " " }
    </div>
  )
}
