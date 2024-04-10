import React from 'react'
import { useState, useEffect } from 'react'
import { check } from '../function/check';
import { useDispatch, useSelector } from 'react-redux'
import { setUser, setBull, setCow, setPlayerOneScore, setPlayerTwoScore } from '../store/playerSlice';
export const User = ({isDisabled, player}) => {
    const [secret, setSecret] = useState("");
    const [code, setCode] = useState("");
    const [secretValue, setSecretValue] = useState("");
    const dispatch = useDispatch()
    const user = useSelector((state) => state.player.value);
    const handleSecrate = (e) => {
        e.preventDefault();
        if(secretValue.length===4) {
            setSecret(secretValue);
            dispatch(setUser())
        }
    }

    const handleCheck = (e) => {
        e.preventDefault();
        if(code.length===4) {
            const { bull, cow } = check(secret, code);
            setCode("");
            dispatch(setUser());
            dispatch(setCow(cow));
            dispatch(setBull(bull));

            if(bull!==null) {
                const score = `${code} : - ${bull} - : - ${cow} -`
                if(!user) {
                dispatch(setPlayerOneScore(score))
                }
                else {
                dispatch(setPlayerTwoScore(score))
                }
                console.warn(score);
            }
        }
    }

  return (
    <>
        {
            !secret ?
            <div className="input-field">
                <form onSubmit={handleSecrate}>
                    <label htmlFor="secret">Secret Code</label>
                    <input type="number" name='secret' placeholder={`Enter secret code for ${player}`} value={secretValue} onChange={(e)=>{if (/^\d{0,4}$/.test(e.target.value)) {setSecretValue(e.target.value)}}} disabled={isDisabled}/>
                    <button disabled={isDisabled}>Submit</button>
                </form>
            </div> 
        :
        <div className="input-field">
            <form onSubmit={handleCheck}>
                <label htmlFor="code">Guss Code</label>
                <input type="number" name='code' placeholder={`Enter guss code for ${player}`} value={code} onChange={(e)=>{if (/^\d{0,4}$/.test(e.target.value)) {setCode(e.target.value)}}} disabled={isDisabled}/>
                <button disabled={isDisabled}>Check</button>
            </form>
        </div>
}
    </>
  )
}
