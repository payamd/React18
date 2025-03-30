import React from "react";

interface Props {
  message: string;
}  

const Alert = ({message}) => {
  return <div className="alert alert-primary">{message}</div>;
};

export default Alert;
