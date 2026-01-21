import React from "react";

interface CardProps {
  iconSrc: string;
  iconAlt?: string;
  title: string;
  description: string;
  onClick: () => void;
}

export const Card: React.FC<CardProps> = ({
  iconSrc,
  iconAlt = "",
  title,
  description,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        w-full text-left
        bg-white rounded-2xl border border-gray-100 shadow-sm
        hover:shadow-md hover:border-blue-100 transition-all
        overflow-hidden
        group  {/* ✅ hover 효과 등을 위해 group 추가 */}
      "
    >
      {/* ✅ 수정 포인트 1: 상단 이미지 영역 높이
         기본 h-44 유지, 데스크탑(md)에서는 h-72 등으로 대폭 확대
      */}
      <div className="bg-gray-100/70 h-44 md:h-72 flex items-center justify-center transition-all duration-300">
        <img
          src={iconSrc}
          alt={iconAlt}
          // ✅ 수정 포인트 2: 아이콘 크기 확대
          // 기본 w-28 h-28 유지, 데스크탑에서는 w-48 h-48 등으로 확대
          className="w-28 h-28 md:w-48 md:h-48 object-contain transition-all duration-300 group-hover:scale-105"
          draggable={false}
        />
      </div>

      {/* ✅ 수정 포인트 3: 하단 패딩 확대 
         기본 p-6 유지, 데스크탑에서는 p-10
      */}
      <div className="p-6 md:p-10">
        {/* ✅ 수정 포인트 4: 폰트 크기 확대 */}
        <h3 className="text-lg md:text-3xl font-bold text-gray-900 transition-all">
          {title}
        </h3>
        <p className="mt-2 text-sm md:text-lg text-gray-500 whitespace-pre-line leading-relaxed transition-all">
          {description}
        </p>
      </div>
    </button>
  );
};