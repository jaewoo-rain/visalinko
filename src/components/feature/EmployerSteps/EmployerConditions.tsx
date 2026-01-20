// 파일: src/components/feature/EmployerSteps/EmployerConditions.tsx
import { Checkbox } from "../../ui/Checkbox";
import { Select } from "../../ui/Select";
import { Button } from "../../ui/Button";
import { useOnboarding } from "../../../hooks/useOnboarding";
import Label from "../../ui/Label";
import WeekdaySelector from "../../ui/WeekdaySelector";
import { useMemo } from "react";
import StepEployer from "../../ui/StepEmployer";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  setTask,
  setWorkDays,
  setStartTime,
  setEndTime,
  setJobTypes,
  setSalaryRaw,
} from "../../../store/slices/employerOnboardingSlice";

const TASK_OPTIONS = ["생산", "건설, 건축", "구매, 자재, 물류", "회계, 세무, 재무", "기획, 전략", "마케팅, 홍보, 조사", "인사, 노무, HRD", "총무, 법무, 사무", "디자인", "IT 개발, 데이터", "영업, 판매, 무역", "고객 상담, TM", "운전, 운송, 배송", "서비스", "의료", "연구, R&D", "교육", "금융, 보험", "공공, 복지", "기타"];
const JOB_TYPE_OPTIONS = ["정규직", "계약직", "인턴", "아르바이트", "파견직", "프리랜서"];

function pad2(n: number) {
  return String(n).padStart(2, "0");
}
function timeToMinutes(t: string) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}
function minutesToText(mins: number) {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  if (m === 0) return `${h}시간`;
  return `${h}시간 ${m}분`;
}
const formatNumber = (value: string) => {
  if (!value) return "";
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const EmployerConditions = () => {
  const { handleNext } = useOnboarding();
  const dispatch = useAppDispatch();

  const conditions = useAppSelector((s) => s.employerOnboarding.conditions);

  const timeOptions = useMemo(() => {
    const arr: { value: string; label: string }[] = [];
    for (let h = 0; h < 24; h++) {
      for (let m = 0; m < 60; m += 10) {
        const t = `${pad2(h)}:${pad2(m)}`;
        arr.push({ value: t, label: t });
      }
    }
    return arr;
  }, []);

  const totalMinutes = useMemo(() => {
    if (!conditions.startTime || !conditions.endTime) return 0;

    const s = timeToMinutes(conditions.startTime);
    const e = timeToMinutes(conditions.endTime);
    if (e >= s) return e - s;
    return 24 * 60 - s + e;
  }, [conditions.startTime, conditions.endTime]);

  const totalText = useMemo(() => minutesToText(totalMinutes), [totalMinutes]);

  const toggleJobType = (label: string, nextChecked: boolean) => {
    const prev = conditions.jobTypes;
    const next = nextChecked
      ? Array.from(new Set([...prev, label]))
      : prev.filter((x) => x !== label);
    dispatch(setJobTypes(next));
  };

  return (
    <div>
      <StepEployer currentStep={2} />

      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
        <div>
          <Label>담당 업무 (1개 선택)</Label>
          <div className="flex flex-wrap gap-5">
            {TASK_OPTIONS.map((t) => (
              <Checkbox
                key={t}
                label={t}
                variant="single"
                checked={conditions.task === t}
                onChange={() => dispatch(setTask(t))}
              />
            ))}
          </div>
        </div>

        <div>
          <Label>근무 요일</Label>
          <WeekdaySelector
            value={conditions.workDays}
            onChange={(days) => dispatch(setWorkDays(days))}
          />
        </div>

        <div>

          <Label>근무 시간</Label>

          <div className="grid grid-cols-3 gap-2 items-center pb-3">
            <Select
              placeholder="업무 시작 시간"
              options={timeOptions}
              value={conditions.startTime}
              onChange={(e) => dispatch(setStartTime(e.target.value))}
            />
            <Select
              placeholder="업무 종료 시간"
              options={timeOptions}
              value={conditions.endTime}
              onChange={(e) => dispatch(setEndTime(e.target.value))}
            />
            <div className="flex items-center justify-center h-12 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-700">
              {totalText}
            </div>
          </div>



          {timeToMinutes(conditions.endTime) < timeToMinutes(conditions.startTime) && (
            <p className="text-xs mt-2 text-red-500">
              종료 시간이 시작 시간보다 빠르면 다음날 근무로 계산돼요.
            </p>
          )}
        </div>

        <div>
          <Label>근무 형태 (복수 선택 가능)</Label>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {JOB_TYPE_OPTIONS.map((j) => (
              <Checkbox
                key={j}
                label={j}
                checked={conditions.jobTypes.includes(j)}
                onChange={(checked) => toggleJobType(j, checked)}
                variant="multi"
              />
            ))}
          </div>
        </div>

        <div>
          <Label>급여 (월 급여 예상)</Label>
          <div className="relative w-full">
            <input
              type="text"
              inputMode="numeric"
              value={formatNumber(conditions.salaryRaw)}
              onChange={(e) => {
                const raw = e.target.value.replace(/,/g, "");
                if (!/^\d*$/.test(raw)) return;
                dispatch(setSalaryRaw(raw));
              }}
              placeholder="0"
              className="w-full h-12 pl-4 pr-12 border border-gray-200 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-black text-sm pointer-events-none">
              원
            </span>
          </div>
        </div>

        <Button onClick={handleNext} fullWidth className="bg-gray-400 mt-4">
          다음으로
        </Button>
      </div>
    </div>
  );
};
