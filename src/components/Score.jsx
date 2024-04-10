import React from 'react'

export const Score = ({score}) => {
  return (
    <div className='score'>
        <h3>Guss : Bull : Cow</h3>
        {
            score.map((item,i)=> <p key={i}>{item}</p>)
        }
    </div>
  )
}
