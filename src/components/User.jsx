import React from "react";
import { useState, useEffect } from "react";
import { check } from "../function/check";
import { useDispatch, useSelector } from "react-redux";
import {
  setUser,
  setBull,
  setCow,
  setPlayerOneScore,
  setPlayerTwoScore,
} from "../store/playerSlice";
export const User = ({ isDisabled, player }) => {
  const [secret, setSecret] = useState("");
  const [error, setError] = useState("")
  const [enteredDigits, setEnteredDigits] = useState(new Set());

  const [code, setCode] = useState("");
  const [secretValue, setSecretValue] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.player.value);
  const isSinglePlayer = useSelector((state) => state.player.isSinglePlayer);
  const handleSecrate = (e) => {
    e.preventDefault();
    if (secretValue.length === 4) {
      setSecret(secretValue);
      setEnteredDigits(new Set());
      if (isSinglePlayer === false) {
        dispatch(setUser());
      }
    }
    else setError("Enter 4 Numbers");
  };

  const handleCheck = (e) => {
    e.preventDefault();
    if (code.length === 4) {
      const { bull, cow } = check(secret, code);
      setCode("");
      dispatch(setCow(cow));
      dispatch(setBull(bull));
      setEnteredDigits(new Set());
      if (isSinglePlayer === false) {
        dispatch(setUser());
      }

      if (bull !== null) {
        const score = `${code} - : - ${bull} - : - ${cow} -`;
        if (!user) {
          dispatch(setPlayerOneScore(score));
        } else {
          dispatch(setPlayerTwoScore(score));
        }
        console.warn(score);
      }
    }
    else setError("Enter 4 Numbers");
  };

  return (
    <>
      {!secret ? (
        <div className="input-field">
          <form onSubmit={handleSecrate}>
            <label htmlFor="secret">Secret Code</label>
            <input
              type="number"
              name="secret"
              placeholder={`Enter secret code for ${player}`}
              value={secretValue}
              autocomplete="off"
              onChange={(e) => {
                const newDigit = e.target.value.slice(-1);
                if (
                  /^\d$/.test(newDigit) &&
                  secretValue.length < 4 &&
                  !enteredDigits.has(newDigit)
                ) {
                  setEnteredDigits(new Set([...enteredDigits, newDigit]));
                  setSecretValue(
                    (prevSecretValue) => prevSecretValue + newDigit
                  );
                  setError("");
                }
                else setError("Enter Unique Number");
              }}
              disabled={isDisabled}
              maxLength={4}
            />
            <button disabled={isDisabled}>Submit</button>
          </form>
        </div>
      ) : (
        <div className="input-field">
          <form onSubmit={handleCheck}>
            <label htmlFor="code">Guess Code</label>
            <input
              type="number"
              name="code"
              placeholder={`Enter guess code for ${player}`}
              value={code}
              autocomplete="off"
              onChange={(e) => {
                const newDigit = e.target.value.slice(-1);
                if (
                  /^\d$/.test(newDigit) &&
                  code.length < 4 &&
                  !enteredDigits.has(newDigit)
                ) {
                  setEnteredDigits(new Set([...enteredDigits, newDigit]));
                  setCode((prevCode) => prevCode + newDigit);
                  setError("");
                }
                else setError("Enter Unique Number");
              }}
              disabled={isDisabled}
            />
            <button disabled={isDisabled}>Check</button>
          </form>
        </div>
      )}
      
    {
       error && <span className="error">{error}</span>
    }
    </>
  );
};
