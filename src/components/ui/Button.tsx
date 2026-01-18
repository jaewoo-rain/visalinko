import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  fullWidth?: boolean;
}

const Button = ({ children, variant = 'primary', fullWidth = false, ...props }: ButtonProps) => {
  const baseStyle: React.CSSProperties = {
    padding: '12px 20px',
    borderRadius: '8px',
    border: 'none',
    fontWeight: 'bold',
    cursor: props.disabled ? 'not-allowed' : 'pointer',
    width: fullWidth ? '100%' : 'auto',
    fontSize: '1rem',
    transition: 'background-color 0.2s ease, opacity 0.2s ease',
    opacity: props.disabled ? 0.6 : 1,
    whiteSpace: 'nowrap', // 텍스트 줄바꿈 방지
  };

  const variantStyles = {
    primary: {
      backgroundColor: '#007bff',
      color: 'white',
      '&:hover': {
        backgroundColor: '#0056b3',
      },
    },
    secondary: {
      backgroundColor: '#f0f2f5',
      color: '#333',
      border: '1px solid #ccc',
      '&:hover': {
        backgroundColor: '#e0e0e0',
      },
    },
    ghost: {
      backgroundColor: 'transparent',
      color: '#007bff',
      '&:hover': {
        backgroundColor: '#e6f2ff',
      },
    },
  };

  return (
    <button style={{ ...baseStyle, ...variantStyles[variant] }} {...props}>
      {children}
    </button>
  );
};

export default Button;