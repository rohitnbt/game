import React from 'react'
import { useState } from 'react'
import { check } from '../function/check';
import { useDispatch } from 'react-redux'
import { setUser } from '../store/playerSlice';

export const User = ({isDisabled, player}) => {
    const [secret, setSecret] = useState("");
    const [code, setCode] = useState("");
    const [secretValue, setSecretValue] = useState("");
    const dispatch = useDispatch()

    const handleSecrate = (e) => {
        e.preventDefault();
        if(secretValue) {
            setSecret(secretValue);
            dispatch(setUser())
        }
    }

    const handleCheck = (e) => {
        e.preventDefault();
        if(code) {
            check(secret, code);
            setCode("");
            dispatch(setUser());
        }
    }


  return (
    <>
        {
            !secret ?
            <div className="input-field">
                <form onSubmit={handleSecrate}>
                    <label htmlFor="secret">Secret Code</label>
                    <input type="number" name='secret' placeholder={`Enter secret code for ${player}`} value={secretValue} onChange={(e)=>setSecretValue(e.target.value)} disabled={isDisabled}/>
                    <button disabled={isDisabled}>Submit</button>
                </form>
            </div> 
        :
        <div className="input-field">
            <form onSubmit={handleCheck}>
                <label htmlFor="code">Guss Code</label>
                <input type="number" name='code' placeholder={`Enter guss code for ${player}`} value={code} onChange={(e)=>setCode(e.target.value)} disabled={isDisabled}/>
                <button disabled={isDisabled}>Check</button>
            </form>
        </div>
}
    </>
  )
}
