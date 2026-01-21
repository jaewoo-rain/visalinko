// 파일: src/components/feature/Shared/RoleSelection.tsx
import { useOnboarding } from '../../../hooks/useOnboarding';
import { Card } from '../../ui/Card';
export const RoleSelection = () => {
  const { handleSelectRole } = useOnboarding();

  return (
    <div className="
      flex items-center justify-center
      min-h-[90dvh]
      w-full
      px-6
    ">
      <div className="flex flex-col items-center w-full max-w-4xl">
        <h1 className="text-2xl sm:text-4xl font-bold mb-10 text-center">
          원하시는 서비스를 선택해주세요
        </h1>

        {/* 카드 영역 */}
        <div className="w-full flex flex-col md:flex-row items-stretch gap-6">
          {/* 카드 1 */}
          <div className="flex-1">
            <Card
              iconSrc="/images/icon-search-job.png"
              iconAlt="일자리 찾기"
              title="일자리 찾기"
              description={"간단한 정보를 입력하고\n5분 이내에 일자리를 찾아보세요"}
              onClick={() => handleSelectRole("seeker")}
            />
          </div>

          {/* 세로선 */}
          <div className="hidden md:flex items-stretch px-6">
            <div className="w-px bg-gray-200" />
          </div>

          {/* 카드 2 */}
          <div className="flex-1">
            <Card
              iconSrc="/images/icon-search-employer.png"
              iconAlt="근로자 찾기"
              title="근로자 찾기"
              description={"기업 정보를 입력하고\n5분 이내에 이력서를 받아보세요"}
              onClick={() => handleSelectRole("employer")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
