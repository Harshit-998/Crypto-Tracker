import React from 'react';
import './styles.css';

// here i'm passing props
const Button = ({text, onClick, outlined}) => {
  return (
    <div className= {outlined ? "outlined-btn" : "btn" } 
     onClick={() => onClick()}>
      {text}
    </div>
  )
}

export default Button;
