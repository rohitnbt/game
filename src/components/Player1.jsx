import React, { useEffect, useState } from 'react'
import { User } from './User'
import { Score } from './Score';
import { useSelector } from 'react-redux'

export const Player1 = ({user}) => {
    const [isDisabled, setIsDisabled] = useState(false);
    const score = useSelector((state) => state.player.playerOneScore);

    useEffect(()=>{
        setIsDisabled(user)
    },[user])
  return (
    <div className={`player1 ${user ? "inactive" :"" }`}>
        <h1>Player 1</h1>
        <User isDisabled={isDisabled} player="player 1"/>
        { score.length ? <Score score={score} /> : " " }
    </div>
  )
}
