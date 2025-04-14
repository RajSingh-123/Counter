import React from 'react'
import { useState } from 'react'

const Counter = () => {
    let [count,setCount]=useState(10)

    const increaseValue=()=>{
        if (count<=20 ){
            count=count+1
            setCount(count)
            console.log(count)

        }
    }
    const decreaseValue=()=>{
        if(count>0){
            count=count-1
            setCount(count)
            console.log(count) 
        }
     }
  return (
    <>
        <h2>Counter Value:{count}</h2>
        <button onClick={increaseValue} disabled={count>=20}>Increase value</button>
        <button onClick={decreaseValue} disabled={count<=0}>Decrease value</button>
    </>
  )
}

export default Counter