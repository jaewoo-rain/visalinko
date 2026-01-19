// 파일: src/components/ui/Header.tsx
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';

export const Header = () => {
  const navigate = useNavigate()
  return (
    <header className="w-full h-16 bg-white border-b border-gray-100 fixed top-0 z-50 cursor-pointer"
      onClick={() => navigate("/")}
    >
      <div className="max-w-[800px] w-full h-full mx-auto flex items-center justify-between px-4 md:px-6">
        <div className="text-primary font-bold text-xl md:text-2xl">
          LINKOTOVISA
        </div>

        <div className="flex gap-2">
          <Button variant="outline" className="text-xs h-8 px-3">
            문의하기
          </Button>
          <Button variant="primary" className="text-xs h-8 px-3">
            무료로 시작하기
          </Button>
        </div>
      </div>
    </header>
  );
};
