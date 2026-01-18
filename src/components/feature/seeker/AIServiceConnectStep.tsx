import React from 'react';
import Button from '../../ui/Button';
import { useOnboardingFlow } from '../../../hooks/useOnboardingFlow';

const AIServiceConnectStep = () => {
  const { goToNextStep } = useOnboardingFlow();

  return (
    <div className="container text-center" style={{ justifyContent: 'center' }}>
      <h2 style={{ marginBottom: '40px' }}>지금 바로 AI와 상담을 진행해보세요</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <Button onClick={() => window.open('https://pf.kakao.com/...')} fullWidth>
          상담 채널 입장하기
        </Button>
        <Button variant="secondary" onClick={goToNextStep} fullWidth>
          홈으로
        </Button>
      </div>
    </div>
  );
};

export default AIServiceConnectStep;