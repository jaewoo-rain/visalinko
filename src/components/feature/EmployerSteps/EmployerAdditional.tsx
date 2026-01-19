// 파일: src/components/feature/EmployerSteps/EmployerAdditional.tsx
import { SectionTitle } from '../../ui/SectionTitle';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';
import { useOnboarding } from '../../../hooks/useOnboarding';
import StepEmployer from '../../ui/StepEmployer';
import Label from '../../ui/Label';

export const EmployerAdditional = () => {
  const { handleNext } = useOnboarding();

  return (
    <div>
      <StepEmployer currentStep={3} />

      {/* <SectionTitle title="추가 사항 입력" /> */}

      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
        <div>
          <Label> 경력</Label>
          <div className="grid grid-cols-3 gap-2">
            <button className="h-10 border rounded text-sm">신입</button>
            <button className="h-10 border rounded text-sm">경력자</button>
            <button className="h-10 border rounded text-sm">신입/경력자</button>
          </div>
        </div>

        <div>
          <Label>복지 및 혜택</Label>
          <div className="grid grid-cols-3 gap-2">
            <button className="h-20 border rounded text-sm">기숙사 제공</button>
            <button className="h-20 border rounded text-sm">식사 제공</button>
            <button className="h-20 border rounded text-sm">통근 버스</button>
          </div>
        </div>

        <div>
          <Label>한국어 수준</Label>
          <div className="grid grid-cols-3 gap-2">
            <button className="h-20 border rounded text-sm">상</button>
            <button className="h-20 border rounded text-sm">중</button>
            <button className="h-20 border rounded text-sm">하</button>
          </div>
        </div>

        <div>
          <Label>우대조건</Label>
          <Input placeholder="우대조건을 입력해주세요" className="h-20" />
        </div>

        <Button onClick={handleNext} fullWidth className="bg-gray-400">채용 정보 입력 완료</Button>
      </div>
    </div>
  );
};