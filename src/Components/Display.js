import React,{useContext} from 'react';
import {TodoContext} from './context'
function Display() {
  const value = useContext(TodoContext);
  return <div>{value}, I am learning react hooks.</div>;
}

export default Display;