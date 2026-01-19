// 파일: src/components/feature/EmployerSteps/EmployerBasicInfo.tsx
import { Input } from "../../ui/Input";
import { Button } from "../../ui/Button";
import { useOnboarding } from "../../../hooks/useOnboarding";
import StepEmployer from "../../ui/StepEmployer";
import OpenDateInput from "../../ui/OpenDateInput";
import Label from "../../ui/Label";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  setCompanyName,
  setCeoName,
  setOpenDate,
  setBizRegNumber,
  setManagerName,
  setManagerEmailId,
  setManagerEmailDomain,
  setPhone1,
  setPhone2,
  setPhone3,
} from "../../../store/slices/employerOnboardingSlice";

export const EmployerBasicInfo = () => {
  const { handleNext } = useOnboarding();
  const dispatch = useAppDispatch();

  const basic = useAppSelector((s) => s.employerOnboarding.basicInfo);

  const handleSubmit = () => {
    const y = basic.openDate.year;
    const m = basic.openDate.month.padStart(2, "0");
    const d = basic.openDate.day.padStart(2, "0");
    // const dateString = `${y}-${m}-${d}`;
    // console.log("개업일:", dateString);
    // console.log("전체 basicInfo:", basic);
  };

  const onNext = () => {
    handleSubmit();
    handleNext();
  };

  return (
    <div>
      <StepEmployer currentStep={1} />

      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="회사명"
            placeholder="회사명"
            value={basic.companyName}
            onChange={(e) => dispatch(setCompanyName(e.target.value))}
          />
          <Input
            label="대표자명"
            placeholder="대표자명"
            value={basic.ceoName}
            onChange={(e) => dispatch(setCeoName(e.target.value))}
          />
        </div>

        <div>
          <Label>개업 연월일 입력</Label>
          <OpenDateInput
            value={basic.openDate}
            onChange={(v) => dispatch(setOpenDate(v))}
          />
        </div>

        <Input
          label="사업자 등록번호"
          placeholder="사업자 등록번호"
          value={basic.bizRegNumber}
          onChange={(e) => dispatch(setBizRegNumber(e.target.value))}
        />

        <div>
          <label className="block text-base font-bold text-gray-700 mb-1">
            담당자명 및 연락처
          </label>

          <div className="space-y-2">
            <Input
              placeholder="담당자명"
              value={basic.managerName}
              onChange={(e) => dispatch(setManagerName(e.target.value))}
            />

            <div className="flex items-center gap-2">
              <Input
                placeholder="담당자 이메일"
                className="text-center"
                value={basic.managerEmailId}
                onChange={(e) => dispatch(setManagerEmailId(e.target.value))}
              />
              <span>@</span>
              <Input
                placeholder="naver.com"
                className="text-center"
                value={basic.managerEmailDomain}
                onChange={(e) => dispatch(setManagerEmailDomain(e.target.value))}
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <Input
                placeholder="010"
                className="text-center"
                value={basic.phone1}
                onChange={(e) => dispatch(setPhone1(e.target.value))}
              />
              <Input
                placeholder="1234"
                className="text-center"
                value={basic.phone2}
                onChange={(e) => dispatch(setPhone2(e.target.value))}
              />
              <Input
                placeholder="5678"
                className="text-center"
                value={basic.phone3}
                onChange={(e) => dispatch(setPhone3(e.target.value))}
              />
            </div>
          </div>
        </div>

        <Button
          onClick={onNext}
          fullWidth
          className="bg-gray-400 hover:bg-gray-500 text-white mt-8"
        >
          다음으로
        </Button>
      </div>
    </div>
  );
};
