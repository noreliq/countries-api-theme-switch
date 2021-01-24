import "./FieldInput.scss";

function FieldInput({ className, iconClass, type, value, placeholder, onChange }) {
  const IconClass = iconClass;

  return (
    <div className={`FieldInput ${className}`}>
      <IconClass />
      <input type={type} value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

export default FieldInput;
