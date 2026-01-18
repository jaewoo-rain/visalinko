import React from 'react';

interface SelectOption {
  value: string | number;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  id?: string;
}

const Select = ({ label, id, options, ...props }: SelectProps) => {
  const selectId = id || (label ? label.toLowerCase().replace(/\s/g, '-') : undefined);

  const selectStyle: React.CSSProperties = {
    padding: '12px 15px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    width: '100%',
    boxSizing: 'border-box',
    fontSize: '1rem',
    outline: 'none',
    backgroundColor: 'white',
    appearance: 'none', // Remove default arrow
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23666'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 15px center',
    backgroundSize: '1em',
    transition: 'border-color 0.2s ease',
  };

  return (
    <div className="form-group">
      {label && <label htmlFor={selectId}>{label}</label>}
      <select id={selectId} style={selectStyle} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;