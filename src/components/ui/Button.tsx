import React from 'react';

// 간단한 스타일 객체 정의
const styles = {
  base: {
    width: '100%',
    padding: '16px',
    borderRadius: '12px',
    border: 'none',
    fontSize: '16px',
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  primary: {
    backgroundColor: '#007bff',
    color: 'white',
  },
  secondary: {
    backgroundColor: '#f1f3f5',
    color: '#333',
  },
  disabled: {
    backgroundColor: '#d0e4ff',
    cursor: 'not-allowed',
  }
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

const Button = ({ children, variant = 'primary', style, disabled, ...props }: ButtonProps) => {
  // 스타일 합치기
  const buttonStyle = {
    ...styles.base,
    ...(variant === 'primary' ? styles.primary : styles.secondary),
    ...(disabled ? styles.disabled : {}),
    ...style, // 외부에서 주입된 스타일 덮어쓰기
  };

  return (
    <button style={buttonStyle as React.CSSProperties} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;