import React from 'react';
import { useOnboardingFlow } from '../hooks/useOnboardingFlow';
import OnboardingHeader from '../components/feature/OnboardingHeader';
import FlowSelectStep from '../components/feature/FlowSelectStep';
import PersonalInfoStep from '../components/feature/seeker/PersonalInfoStep';
import AIServiceSelectStep from '../components/feature/seeker/AIServiceSelectStep';
import AIServiceConnectStep from '../components/feature/seeker/AIServiceConnectStep';
import CompanyInfoStep from '../components/feature/employer/CompanyInfoStep';
import WorkConditionsStep from '../components/feature/employer/WorkConditionsStep';
import AdditionalInfoStep from '../components/feature/employer/AdditionalInfoStep';

const OnboardingPage = () => {
  const { currentSlide } = useOnboardingFlow();

  // 매핑 테이블: constants/onboarding.ts의 component 키와 실제 컴포넌트 연결
  const stepComponents: Record<string, React.ReactNode> = {
    'FlowSelectStep': <FlowSelectStep />,
    'PersonalInfoStep': <PersonalInfoStep />,
    'AIServiceSelectStep': <AIServiceSelectStep />,
    'AIServiceConnectStep': <AIServiceConnectStep />,
    'CompanyInfoStep': <CompanyInfoStep />,
    'WorkConditionsStep': <WorkConditionsStep />,
    'AdditionalInfoStep': <AdditionalInfoStep />,
    // ... 나머지 이미지 컴포넌트들 추가
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <OnboardingHeader />
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {stepComponents[currentSlide.component] || <div>컴포넌트를 찾을 수 없습니다.</div>}
      </div>
    </div>
  );
};

export default OnboardingPage;