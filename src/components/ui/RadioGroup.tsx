// 파일: src/components/ui/RadioGroup.tsx
import React from "react";

interface RadioOption {
  label: string;
  value: string;
  icon?: React.ReactNode; // 이미지/아이콘 뭐든 가능
}

interface RadioGroupProps {
  options: RadioOption[];
  value: string | null;
  onChange: (value: string) => void;
}

export const RadioGroup = ({ options, value, onChange }: RadioGroupProps) => {
  return (
    <div className="flex flex-col gap-3">
      {options.map((opt) => {
        const isSelected = value === opt.value;

        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`
              flex items-center gap-3 p-4 rounded-lg border
              transition-all duration-200 
              ${isSelected
                ? "border-[#0066FF] text-[#0066FF] bg-blue-50"
                : "border-gray-200 text-gray-700 hover:bg-gray-50"
              }
            `}
          >
            <div
              className={`
                w-10 h-10 rounded-full flex items-center justify-center overflow-hidden
                ${isSelected ? "bg-blue-100" : "bg-gray-100"}
              `}
            >
              {opt.icon}
            </div>

            <span className="font-medium skiptranslate">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
};
