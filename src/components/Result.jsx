import React from 'react'
import { IconCow } from '../icons/IconCow';
import { IconBull } from '../icons/IconBull';

export const Result = ({cow, bull, setShow}) => {
    const cows = [];
    const bulls = [];
    for (let i = 1; i <= cow; i++) {
        cows.push(<IconCow key={i} />);
    }

    for (let i = 1; i <= bull; i++) {
        bulls.push(<IconBull key={i} />);
    }
  return (
    <div className='background' onClick={()=>setShow(false)}>
    <div className='result'>
        <h1 style={{textAlign:"center"}}>Result</h1>
        <div className="animal-outer">
            <h2>Bull</h2>
            {
                bull===0 ? <div className='animals'>0</div> : <div className='animals'>{bulls}</div>
            }
        </div>
        <div className="animal-outer">
            <h2>Cow</h2>
            {
                cow===0 ? <div className='animals'>0</div> : <div className='animals'>{cows}</div>
            }
        </div>
    </div>
    </div>
  )
}
