import { useOnboarding } from "../../../hooks/useOnboarding";
import { Button } from "../../ui/Button";
import { INTRO_DATA } from "../../../constants/slides";
import type { UserFlow } from "../../../constants/slides";

type IntroKey = Exclude<UserFlow, null>;
type Step = { id: string; title: string; desc: string };

export const IntroSlide = () => {
  const { userFlow, handleNext } = useOnboarding();

  // userFlow가 null이면 기본값 employer
  const flow: IntroKey = (userFlow ?? "employer") as IntroKey;

  // INTRO_DATA는 employer/seeker만 인덱싱 가능하도록 캐스팅
  const data = (INTRO_DATA as Record<IntroKey, { title: string; steps: Step[] }>)[flow];

  return (
    <div className="flex flex-col h-full">
      <h1 className="text-3xl font-bold mb-10 whitespace-pre-line leading-tight">
        {data.title}
      </h1>

      <div className="flex-1 space-y-8">
        {data.steps.map((step: Step) => (
          <div key={step.id} className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-primary text-xl font-bold mb-2">
              {step.id} <span className="text-gray-900 ml-2">{step.title}</span>
            </h3>
            <p className="text-gray-500">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Button onClick={handleNext} fullWidth>
          정보 입력하기
        </Button>
      </div>
    </div>
  );
};
