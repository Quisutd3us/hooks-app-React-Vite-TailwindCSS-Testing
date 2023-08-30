import {useState} from "react";

export const UseCounter = (initialValue=1)=>{

  const [counter,setCounter] =useState(initialValue)

  const increment =(step=1)=>{
    if(counter === 100) return
    setCounter((current) =>current + step)
  }
  const decrement =(step=1)=>{
    if(counter === 0) return
    setCounter((current)=>current - step)
  }

  const reset =()=>{
    setCounter(initialValue)
  }

  return{
    counter,
    increment,
    decrement,
    reset
  }
}