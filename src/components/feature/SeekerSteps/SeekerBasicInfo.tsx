// 파일: src/components/feature/SeekerSteps/SeekerBasicInfo.tsx
import { Input } from "../../ui/Input";
import { Button } from "../../ui/Button";
import { useOnboarding } from "../../../hooks/useOnboarding";
import StepSeeker from "../../ui/StepSeeker";
import Label from "../../ui/Label";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  setName,
  setBirth,
  setGender,
  setPhone,
} from "../../../store/slices/seekerOnboardingSlice";

export const SeekerBasicInfo = () => {
  const { handleNext } = useOnboarding();
  const dispatch = useAppDispatch();

  const { name, birth, gender, phone } = useAppSelector(
    (s) => s.seekerOnboarding.basicInfo
  );

  const onlyDigits = (v: string) => v.replace(/\D/g, "");

  const onSubmit = () => {
    console.log("Step1:", { name, birth, gender, phone });
    handleNext();
  };

  const genderBtnClass = (selected: boolean) =>
    `h-[72px] rounded-lg border transition-all duration-200
     ${selected
      ? "border-[#0066FF] text-[#0066FF] bg-blue-50"
      : "border-gray-200 text-gray-700 hover:bg-gray-50"
    }`;

  return (
    <div>
      <StepSeeker currentStep={1} />

      <Label>이름</Label>
      <Input
        placeholder="이름을 입력해주세요"
        className="mb-6"
        value={name}
        onChange={(e) => dispatch(setName(e.target.value))}
      />

      <Label>생년월일</Label>
      <div className="grid grid-cols-3 gap-2 mb-6">
        <Input
          placeholder="2000"
          inputMode="numeric"
          className="text-center"
          value={birth.year}
          onChange={(e) =>
            dispatch(
              setBirth({
                ...birth,
                year: onlyDigits(e.target.value).slice(0, 4),
              })
            )
          }
        />
        <Input
          placeholder="12"
          inputMode="numeric"
          className="text-center"
          value={birth.month}
          onChange={(e) =>
            dispatch(
              setBirth({
                ...birth,
                month: onlyDigits(e.target.value).slice(0, 2),
              })
            )
          }
        />
        <Input
          placeholder="31"
          inputMode="numeric"
          className="text-center"
          value={birth.day}
          onChange={(e) =>
            dispatch(
              setBirth({
                ...birth,
                day: onlyDigits(e.target.value).slice(0, 2),
              })
            )
          }
        />
      </div>

      <Label>성별</Label>
      <div className="grid grid-cols-2 gap-2 mb-6">
        <button
          type="button"
          className={genderBtnClass(gender === "male")}
          onClick={() => dispatch(setGender("male"))}
        >
          남성
        </button>
        <button
          type="button"
          className={genderBtnClass(gender === "female")}
          onClick={() => dispatch(setGender("female"))}
        >
          여성
        </button>
      </div>

      <Label>연락처</Label>
      <div className="grid grid-cols-3 gap-2 mb-8">
        <Input
          placeholder="010"
          inputMode="numeric"
          className="text-center"
          value={phone.p1}
          onChange={(e) =>
            dispatch(
              setPhone({
                ...phone,
                p1: onlyDigits(e.target.value).slice(0, 3),
              })
            )
          }
        />
        <Input
          placeholder="1234"
          inputMode="numeric"
          className="text-center"
          value={phone.p2}
          onChange={(e) =>
            dispatch(
              setPhone({
                ...phone,
                p2: onlyDigits(e.target.value).slice(0, 4),
              })
            )
          }
        />
        <Input
          placeholder="5678"
          inputMode="numeric"
          className="text-center"
          value={phone.p3}
          onChange={(e) =>
            dispatch(
              setPhone({
                ...phone,
                p3: onlyDigits(e.target.value).slice(0, 4),
              })
            )
          }
        />
      </div>

      <Button onClick={onSubmit} fullWidth className="bg-gray-400">
        제출하기
      </Button>
    </div>
  );
};
