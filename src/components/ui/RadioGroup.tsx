import React from 'react';

interface RadioOption<T extends string | number> {
  label: string;
  value: T;
  icon?: React.ReactNode; // 아이콘 추가 가능성
}

interface RadioGroupProps<T extends string | number> {
  options: RadioOption<T>[];
  selectedValue: T | null;
  onChange: (value: T) => void;
  name: string;
  label?: string;
  layout?: 'row' | 'column'; // 배치 방향
  optionStyle?: 'button' | 'card'; // 버튼 형태 또는 카드 형태
}

const RadioGroup = <T extends string | number>({
  options,
  selectedValue,
  onChange,
  name,
  label,
  layout = 'row',
  optionStyle = 'button',
}: RadioGroupProps<T>) => {
  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      <div
        className="radio-group-container"
        style={{ flexDirection: layout === 'column' ? 'column' : 'row' }}
      >
        {options.map((option) => (
          <div
            key={option.value}
            className={`${optionStyle === 'button' ? 'radio-button' : 'card-option'} ${selectedValue === option.value ? 'selected' : ''}`}
            onClick={() => onChange(option.value)}
          >
            {optionStyle === 'card' ? (
              <>
                {option.icon && <div className="icon">{option.icon}</div>}
                <h3>{option.label}</h3>
                {/* <p>추가 설명</p> */}
              </>
            ) : (
              option.label
            )}
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => onChange(option.value)}
              style={{ display: 'none' }} // 실제 라디오 버튼 숨김
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;