import { useNavigate } from "react-router-dom";

import "./Button.scss";

const Button = ({ children, className, path, clickFunction }) => {
  let navigate = useNavigate();

  const handleClick = (evt) => {
    evt.preventDefault();

    if (path) {
      return navigate(path);
    } else {
      return clickFunction;
    }
  };

  return (
    <button className={`button ${className}`} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
