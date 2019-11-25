import React from "react";
import "./Dot.scss";


export const Dot = ({
  onClick
}) => {
  const clickHandler = event => {
    event.preventDefault();
    onClick();
  };
  return (
    <button onClick={clickHandler} className='dot'>
    </button>
  );
};
