import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
}

const Input = ({ label, id, ...props }: InputProps) => {
  const inputId = id || (label ? label.toLowerCase().replace(/\s/g, '-') : undefined);

  const inputStyle: React.CSSProperties = {
    padding: '12px 15px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    width: '100%',
    boxSizing: 'border-box',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  };

  const focusStyle: React.CSSProperties = {
    borderColor: '#007bff',
    boxShadow: '0 0 0 2px rgba(0, 123, 255, 0.25)',
  };

  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <div className="form-group">
      {label && <label htmlFor={inputId}>{label}</label>}
      <input
        id={inputId}
        style={{ ...inputStyle, ...(isFocused ? focusStyle : {}) }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
    </div>
  );
};

export default Input;