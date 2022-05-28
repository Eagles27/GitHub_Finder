import { useContext } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import AlertContext from "../../context/alert/alertContext";

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;

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
