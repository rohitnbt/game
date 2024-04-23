import React from 'react'

export const Winner = () => {
  return (
   <div className="background" onClick={()=>window.location.reload()}>
     <div className='Winner'>
        <h1 style={{marginBottom: "0"}}>You Win!</h1>
    </div>
   </div>
  )
}
