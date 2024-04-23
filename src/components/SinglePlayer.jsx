import React from 'react'
import { User } from './User'
import { Score } from './Score';
import { useSelector } from 'react-redux'

export const SinglePlayer = () => {
    const score = useSelector((state) => state.player.playerOneScore);
  return (
    <div className={`single-player`}>
        <h1>Single Player</h1>
        <User player="player"/>
        { score.length ? <Score score={score} /> : " " }
    </div>
  )
}
