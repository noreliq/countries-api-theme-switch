import "./AspectRatio.scss";

function AspectRatio({ className, ratio, children }) {
  return (
    <div className={`AspectRatio ${className}`} style={{ "--ratio": ratio }}>
      {children}
    </div>
  );
}

export default AspectRatio;
