import React from 'react';
import Button from '../ui/Button';
import { useOnboardingFlow } from '../../hooks/useOnboardingFlow';

interface OnboardingFooterProps {
  isNextDisabled?: boolean; // 다음 버튼 활성화 여부를 외부에서 제어
  onNextClick?: () => void; // 다음 버튼 클릭 시 추가 동작
}

const OnboardingFooter = ({ isNextDisabled = false, onNextClick }: OnboardingFooterProps) => {
  const { isFirstStep, goToNextStep, goToPrevStep, isLastStep, currentSlide } = useOnboardingFlow();

  const handleNext = () => {
    if (onNextClick) {
      onNextClick();
    } else {
      goToNextStep();
    }
  };

  return (
    <div className="footer-buttons">
      {!isFirstStep && <Button variant="secondary" onClick={goToPrevStep}>이전</Button>}
      <Button 
        fullWidth={isFirstStep} // 첫 스텝일 때는 다음 버튼만 존재하므로 꽉 채움
        onClick={handleNext} 
        disabled={isNextDisabled}
      >
        {isLastStep ? '완료' : '다음'}
      </Button>
    </div>
  );
};

export default OnboardingFooter;