import { Link } from "react-router-dom";
import "./Button.scss";

function Button({ label, to, iconClass, className, onClick }) {
  const IconClass = iconClass;

  const innerComp = (
    <>
      {IconClass && <IconClass fontSize="32px" />}
      {label}
    </>
  );

  const buttonComp = <button className={`Button ${className}`}>{innerComp}</button>;

  const linkComp = (
    <Link to={to} className={`Button ${className}`} onClick={onClick}>
      {innerComp}
    </Link>
  );

  return to ? linkComp : buttonComp;
}

export default Button;
