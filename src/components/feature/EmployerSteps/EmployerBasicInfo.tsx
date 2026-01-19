// 파일: src/components/feature/EmployerSteps/EmployerBasicInfo.tsx
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';
import { useOnboarding } from '../../../hooks/useOnboarding';
import StepEmployer from '../../ui/StepEmployer';
import { useState } from 'react';
import OpenDateInput, { OpenDateValue } from '../../ui/OpenDateInput';
import Label from '../../ui/Label';

export const EmployerBasicInfo = () => {
  const { handleNext } = useOnboarding();
  const [openDate, setOpenDate] = useState<OpenDateValue>({
    year: "",
    month: "",
    day: "",
  })

  const handleSubmit = () => {
    console.log(openDate); // ✅ 여기서 year/month/day 다 꺼낼 수 있음
    // 예: YYYY-MM-DD 만들기
    const y = openDate.year;
    const m = openDate.month.padStart(2, "0");
    const d = openDate.day.padStart(2, "0");
    const dateString = `${y}-${m}-${d}`;
    console.log(dateString);
  };

  const onNext = () => {
    handleSubmit(); // 데이터 처리
    handleNext();   // 다음 스텝 이동
  };

  return (
    <div className=''>
      <StepEmployer currentStep={1} />
      {/* <SectionTitle title="업체 정보 입력" /> */}

      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <Input label="회사명" placeholder="회사명" />
          <Input label="대표자명" placeholder="대표자명" />
        </div>

        <div>
          <Label>개업 연월일 입력</Label>
          <OpenDateInput value={openDate} onChange={setOpenDate} />
        </div>



        <Input label="사업자 등록번호" placeholder="사업자 등록번호" />

        <div>
          <label className="block text-base font-bold text-gray-700 mb-1">담당자명 및 연락처</label>
          <div className="space-y-2">
            <Input placeholder="담당자명" />
            <div className="flex items-center gap-2">
              <Input placeholder="담당자 이메일 주소" className='text-center' />
              <span>@</span>
              <Input placeholder="naver.com" className='text-center' />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <Input placeholder="010" className='text-center' />
              <Input placeholder="1234" className='text-center' />
              <Input placeholder="5678" className='text-center' />
            </div>
          </div>
        </div>

        <Button onClick={onNext} fullWidth className="bg-gray-400 hover:bg-gray-500 text-white mt-8">다음으로</Button>
      </div>
    </div >
  );
};