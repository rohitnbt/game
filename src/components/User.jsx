import React from 'react'
import { useState } from 'react'
import { check } from '../function/check';
import { useDispatch } from 'react-redux'
import { setUser } from '../store/playerSlice';

export const User = ({isDisabled}) => {
    const [secret, setSecret] = useState("");
    const [code, setCode] = useState("");
    const [secretValue, setSecretValue] = useState("");
    const dispatch = useDispatch()

    const handleSecrate = (e) => {
        e.preventDefault();
        setSecret(secretValue);
        dispatch(setUser());
    }

    const handleCheck = (e) => {
        e.preventDefault();
        check(secret, code);
        setCode("");
        dispatch(setUser());
    }


  return (
    <div>
        {
            !secret ?
            <div className="input-field">
                <form onSubmit={handleSecrate}>
                    <label htmlFor="secret">Secret Code</label>
                    <input type="number" name='secret' value={secretValue} onChange={(e)=>setSecretValue(e.target.value)} disabled={isDisabled}/>
                    <button disabled={isDisabled}>Submit</button>
                </form>
            </div> 
        :
        <div className="input-field">
            <form onSubmit={handleCheck}>
                <label htmlFor="code">User Code</label>
                <input type="number" name='code' value={code} onChange={(e)=>setCode(e.target.value)} disabled={isDisabled}/>
                <button disabled={isDisabled}>Check</button>
            </form>
        </div>
}
    </div>
  )
}
