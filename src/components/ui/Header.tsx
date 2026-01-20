// 파일: src/components/ui/Header.tsx
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';

export const Header = () => {
  const navigate = useNavigate()
  return (
    <header className="w-full h-16 bg-white border-b border-gray-100 fixed top-0 z-50"
    >
      <div className="max-w-[800px] w-full h-full mx-auto flex items-center justify-between px-4 md:px-6">
        <div
          onClick={() => navigate("/")}
          className="text-primary font-bold text-2xl cursor-pointer">
          LINKOTOVISA
        </div>

        <div className="flex gap-3 pr-3  cursor-pointer">
          <img
            src="/images/icon-translation.png"
            alt="번역"
            className="cursor-pointer"
            onClick={() => {
              const url = window.location.href;
              window.open(
                `https://translate.google.com/translate?sl=auto&tl=en&u=${encodeURIComponent(url)}`,
                "_blank"
              );
            }}
          />


          <Button variant="outline" className="text-xs h-8 px-3 hidden md:block"
          >
            문의하기
          </Button>
          <Button variant="primary" className="text-xs h-8 px-3 hidden md:block"
            onClick={() => { navigate("/init") }}>
            무료로 시작하기
          </Button>
        </div>
      </div>
    </header>
  );
};
