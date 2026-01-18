import React from 'react';

interface StepIndicatorProps {
  total: number;
  current: number; // 0-indexed current step
}

const StepIndicator = ({ total, current }: StepIndicatorProps) => {
  return (
    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '20px' }}>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: i === current ? '#007bff' : '#ddd',
            transition: 'background-color 0.2s ease',
          }}
        />
      ))}
    </div>
  );
};

export default StepIndicator;