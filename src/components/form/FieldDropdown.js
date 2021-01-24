import React, { useState } from "react";
import "./FieldDropdown.scss";

import IosArrowDown from "react-ionicons/lib/IosArrowDown";

function FieldDropdown({ className, iconClass, options, selectedOption, placeholder, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOptionClick(opt) {
    onChange(opt);
    setIsOpen(false);
  }

  function handleHeaderClick() {
    setIsOpen((oldValue) => !oldValue);
  }

  const valueComp = <span className="FieldDropdown__Value">{selectedOption.label}</span>;
  const placeholderComp = <span className="FieldDropdown__Placeholder">{placeholder}</span>;

  const optionsComp = (
    <ul className="FieldDropdown__Options">
      {options.map((opt) => (
        <li key={opt.value} tabIndex="0" className={selectedOption === opt ? "selected" : ""} onClick={() => handleOptionClick(opt)}>
          {opt.label}
        </li>
      ))}
    </ul>
  );

  const IconClass = iconClass;

  return (
    <div tabIndex="0" className={`FieldDropdown ${className} ${isOpen ? "open" : ""}`}>
      <div className="FieldDropdown__Header" onClick={handleHeaderClick}>
        <IconClass />
        {selectedOption && selectedOption.value ? valueComp : placeholderComp}
        <IosArrowDown fontSize="16px" className="FieldDropdown__Arrow" />
      </div>
      {optionsComp}
    </div>
  );
}

export default FieldDropdown;
