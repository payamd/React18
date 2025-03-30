import React from "react";
interface ButtonProps {
  text: string; 
  type: string;
}

const Button = ({ text, type }: ButtonProps) => {
  return (
    <button type="button" className={`btn btn-${type}`}>
      {text}
    </button>
  );
};

export default Button;
