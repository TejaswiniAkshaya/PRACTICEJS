'use client'
/*import React, { useEffect } from 'react'

export default function Error({error,reset}:{
    error:Error,
    reset:()=>void
}) {
    useEffect(()=>{
     console.log(error);
    },[error])
  return (
    <div>
        <h2>something went Wrong!..</h2>
        <button onClick={()=>reset()}>
         Try Again
        </button>
    </div>
  )
}*/
import React from 'react'

export default function ErrorBoundary({error}:{error:Error}) {
  return (
    <div>ErrorBoundary {error.message}</div>
  )
}

