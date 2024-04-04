import React from 'react'
import { useState } from 'react'
import { check } from '../function/check';

export const User = () => {
    const [secret, setSecret] = useState("");
    const [code, setCode] = useState("");
    const [secretValue, setSecretValue] = useState("");

    const handleSecrate = (e) => {
        e.preventDefault();
        setSecret(secretValue);
    }

    const handleCheck = (e) => {
        e.preventDefault();
        check(secret, code);
        setCode("");
    }


  return (
    <div>
        {
            !secret ?
            <div className="input-field">
                <form onSubmit={handleSecrate} style={{display:"flex", flexDirection:"column", gap:"20px", alignItems:"start"}}>
                    <label htmlFor="secret">Secret Code</label>
                    <input type="text" name='secret' value={secretValue} onChange={(e)=>setSecretValue(e.target.value)}/>
                    <button>Submit</button>
                </form>
            </div> 
        :
        <div className="input-field">
            <form onSubmit={handleCheck} style={{display:"flex", flexDirection:"column", gap:"20px", alignItems:"start"}}>
                <label htmlFor="code">User Code</label>
                <input type="text" name='code' value={code} onChange={(e)=>setCode(e.target.value)}/>
                <button>Check</button>
            </form>
        </div>
}
    </div>
  )
}
