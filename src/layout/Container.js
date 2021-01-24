import "./Container.scss";

function Container({ className, children }) {
  return <div className={`Container ${className}`}>{children}</div>;
}

export default Container;
