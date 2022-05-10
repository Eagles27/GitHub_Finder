import React from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <BsFillInfoCircleFill />
        {alert.msg}
      </div>
    )
  );
};

export default Alert;
