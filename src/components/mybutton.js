
import React,{ useContext } from 'react';
import {CountContext} from '../pages/home/index.js'
export default  function Counter() {
    const count = useContext(CountContext)
    return (
        <div>{count}</div>
    )
}