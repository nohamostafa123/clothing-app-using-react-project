import React, { useState } from 'react'
import { CounterContext } from './CounterContext'

export default function CounterProvider(props) {
    let[count,setCount]=useState(0);
    let increase=()=>{
        setCount(count+1);
    };
    let myValue={
        count,
        increase,
    };
  return<CounterContext.Provider value={myValue}>
  {props.children}
  </CounterContext.Provider>
}