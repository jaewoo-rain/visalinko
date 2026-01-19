// 파일: src/components/feature/EmployerSteps/EmployerConditions.tsx
import { SectionTitle } from '../../ui/SectionTitle';
import { Checkbox } from '../../ui/Checkbox';
import { Input } from '../../ui/Input';
import { Select } from '../../ui/Select';
import { Button } from '../../ui/Button';
import { useOnboarding } from '../../../hooks/useOnboarding';
import Label from '../../ui/Label';
import WeekdaySelector from '../../ui/WeekdaySelector';
import { useState } from 'react';
import StepEployer from '../../ui/StepEmployer';

type Weekday = "월" | "화" | "수" | "목" | "금" | "토" | "일" | "변동";

export const EmployerConditions = () => {
  const { handleNext } = useOnboarding();
  const [workDays, setWorkDays] = useState<Weekday[]>([]);
  const handleSubmit = () => {
    console.log("선택된 요일:", workDays);
    // API payload로 그대로 보내면 됨
    // ex) { work_days: ["월", "수", "금"] }
  };

  return (
    <div>
      <StepEployer currentStep={2} />

      {/* <SectionTitle title="근무 조건 입력" /> */}

      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
        <div>
          <Label>담당 업무</Label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Checkbox label="생산" />
            <Checkbox label="건설, 건축" />
            <Checkbox label="구매, 자재, 물류" />
            <Checkbox label="회계, 세무, 재무" checked />
            <Checkbox label="기획, 전략" />
            <Checkbox label="마케팅" />
            {/* More checkboxes... */}
          </div>
        </div>

        <div>
          {/* <Label>근무 요일</Label>
          <div className="flex gap-2">
            {['월', '화', '수', '목', '금', '토', '일'].map(d => (
              <div key={d} className="flex-1 flex items-center justify-center h-10 border rounded">{d}</div>
            ))}
          </div> */}

          <WeekdaySelector
            value={workDays}
            onChange={setWorkDays} />
        </div>

        <div>
          <Label>근무 시간</Label>
          <div className="grid grid-cols-3 gap-2 items-center">
            <Select options={[]} placeholder="업무 시작 시간" />
            <Select options={[]} placeholder="업무 종료 시간" />
            <div className="text-center text-sm">0 시간</div>
          </div>
        </div>

        <div>
          <Label>근무 형태</Label>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
            <Checkbox label="정규직" />
            <Checkbox label="계약직" />
            <Checkbox label="인턴" />
            <Checkbox label="아르바이트" checked />
            <Checkbox label="파견직" />
            <Checkbox label="프리랜서" />
            {/* More checkboxes... */}
          </div>
        </div>

        <div>
          <Label>급여 (월 급여 예상)</Label>
          <div className="relative w-full">
            <input
              type="number"
              className=" w-full h-12 pl-4 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary "
              placeholder="0"
            />
            <span className=" absolute right-4 top-1/2 -translate-y-1/2 text-black text-sm pointer-events-none ">
              원
            </span>
          </div>

        </div>
        <Button onClick={handleNext} fullWidth className="bg-gray-400 mt-4">다음으로</Button>
      </div>
    </div>
  );
};