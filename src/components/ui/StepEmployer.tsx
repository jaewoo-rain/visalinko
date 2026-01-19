type StepIndicatorProps = {
    currentStep: 1 | 2 | 3;
    className?: string;
};

const STEPS = [
    { step: 1, label: "업체 정보 입력" },
    { step: 2, label: "근무 조건 입력" },
    { step: 3, label: "추가 사항 입력" },
] as const;

export default function StepEmployer({
    currentStep,
    className = "",
}: StepIndicatorProps) {
    return (
        <div
            className={`hidden sm:flex justify-center gap-10 mb-4 font-medium text-gray-400 ${className}`}
        >
            {STEPS.map(({ step, label }) => {
                const isActive = currentStep === step;

                return (
                    <span
                        key={step}
                        className={`${isActive ? "text-primary" : ""}`}
                    >
                        ● STEP {step}
                        <br />
                        <strong className="text-[25px]">{label}</strong>
                    </span>
                );
            })}
        </div>
    );
}
