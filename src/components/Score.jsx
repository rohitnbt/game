import React from 'react'

export const Score = ({score}) => {
  return (
    <div className='score'>
        <h3>Guess : Bull : Cow</h3>
        {
            score.map((item,i)=> <p key={i}>{item}</p>)
        }
    </div>
  )
}
