import React from 'react';
import { useOnboardingFlow } from '../../hooks/useOnboardingFlow';
import OnboardingFooter from './OnboardingFooter';

const FlowSelectStep = () => {
  const { userFlow, handleSelectFlow, goToNextStep } = useOnboardingFlow();

  return (
    <div className="container">
      <div className="content-area text-center">
        <h2 style={{ fontSize: '1.8rem', marginBottom: '40px' }}>원하시는 서비스를 선택해주세요</h2>
        
        <div className="onboarding-flow-selector">
          <div 
            className={`card-option ${userFlow === 'seeker' ? 'selected' : ''}`}
            onClick={() => handleSelectFlow('seeker')}
            style={{ padding: '30px' }}
          >
            <div className="icon">🔍</div>
            <h3>구직</h3>
            <p>일자리 찾기</p>
            <p style={{ fontSize: '0.8rem', color: '#888' }}>간단한 정보를 입력하고<br/>5분 이내에 일자리를 찾아보세요</p>
          </div>

          <div 
            className={`card-option ${userFlow === 'employer' ? 'selected' : ''}`}
            onClick={() => handleSelectFlow('employer')}
            style={{ padding: '30px' }}
          >
            <div className="icon">🤝</div>
            <h3>구인</h3>
            <p>근로자 찾기</p>
            <p style={{ fontSize: '0.8rem', color: '#888' }}>기업 정보를 입력하고<br/>5분 이내에 이력서를 받아보세요</p>
          </div>
        </div>
      </div>
      <OnboardingFooter 
        isNextDisabled={!userFlow} 
        onNextClick={goToNextStep}
      />
    </div>
  );
};

export default FlowSelectStep;