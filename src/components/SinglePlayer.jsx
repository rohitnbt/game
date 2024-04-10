import React from 'react'
import { User } from './User'
import { Score } from './Score';
import { useSelector } from 'react-redux'

export const SinglePlayer = () => {
    const score = useSelector((state) => state.player.playerTowScore);
  return (
    <div className={`single-player`}>
        <h1>Player 2</h1>
        <User player="player"/>
        { score.length ? <Score score={score} /> : " " }
    </div>
  )
}
