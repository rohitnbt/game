import React, { useEffect, useState } from 'react'
import { User } from './User'

export const Player2 = ({user, setUser}) => {
    const  [isDisabled, setIsDisabled] = useState(false);
    useEffect(()=>{
        setIsDisabled(user);
        console.warn("Player 2/ User : "+user+" isDisabled : "+isDisabled);
    },[user])
  return (
    <div className='player2'>
        <h1>Player 2</h1>
        <User isDisabled={isDisabled} setUser={setUser}/>
    </div>
  )
}
