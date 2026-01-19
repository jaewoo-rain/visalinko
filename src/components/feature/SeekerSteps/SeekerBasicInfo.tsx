// 파일: src/components/feature/SeekerSteps/SeekerBasicInfo.tsx
import { SectionTitle } from '../../ui/SectionTitle';
import { Input } from '../../ui/Input';
import { Select } from '../../ui/Select';
import { Button } from '../../ui/Button';
import { useOnboarding } from '../../../hooks/useOnboarding';
import StepSeeker from '../../ui/StepSeeker';

export const SeekerBasicInfo = () => {
  const { handleNext } = useOnboarding();

  return (
    <div>
      <StepSeeker currentStep={1} />
      {/* <div className="flex gap-4 mb-4 text-sm font-medium">
        <span className="text-primary">● STEP 1<br/>지원자 정보 입력</span>
        <span className="text-gray-300">● STEP 2<br/>AI 상담 신청</span>
      </div> */}

      <SectionTitle title="이름" />
      <Input placeholder="이름을 입력해주세요" className="mb-6" />

      <SectionTitle title="생년월일" />
      <div className="grid grid-cols-3 gap-2 mb-6">
        <Select options={[]} placeholder="2000" />
        <Select options={[]} placeholder="12" />
        <Select options={[]} placeholder="31" />
      </div>

      <SectionTitle title="성별" />
      <div className="grid grid-cols-2 gap-2 mb-6">
        <button className="h-12 border border-primary text-primary rounded-lg bg-blue-50">남성</button>
        <button className="h-12 border border-gray-200 rounded-lg">여성</button>
      </div>

      <SectionTitle title="연락처" />
      <div className="grid grid-cols-3 gap-2 mb-8">
        <Input placeholder="010" />
        <Input placeholder="1234" />
        <Input placeholder="5678" />
      </div>

      <Button onClick={handleNext} fullWidth className="bg-gray-400">제출하기</Button>
    </div>
  );
};