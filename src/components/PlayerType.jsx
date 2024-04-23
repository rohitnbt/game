import React from 'react'
import { useDispatch } from 'react-redux'
import { setIsSinglePlayer } from '../store/playerSlice';
setIsSinglePlayer

export const PlayerType = ({setShowPlayerType}) => {
    const dispatch = useDispatch();
  return (
   <div className="background">
     <div className='PlayerType'>
        <h1 style={{marginBottom: "0px"}}>Welcome!</h1>
        <p style={{textAlign: "center"}}>Please Select Game Type.</p>
        <div className='player-btn'>
            <button onClick={()=>{dispatch(setIsSinglePlayer(true)); setShowPlayerType(false)}}>1 Player</button>
            <button onClick={()=>{dispatch(setIsSinglePlayer(false)); setShowPlayerType(false)}}>2 Player</button>
        </div>
    </div>
   </div>
  )
}
