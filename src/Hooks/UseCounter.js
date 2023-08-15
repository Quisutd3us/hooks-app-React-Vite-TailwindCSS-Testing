import {useState} from "react";

export const UseCounter = (initialValue=11)=>{

  const [counter,setCounter] =useState(initialValue)

  const increment =(step=1)=>{
    if(counter === 100) return
    setCounter(counter + step)
  }
  const decrement =(step=1)=>{
    if(counter === initialValue) return
    setCounter(counter - step)
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