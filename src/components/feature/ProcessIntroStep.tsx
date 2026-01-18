import React from 'react';
import { useOnboardingFlow } from '../../hooks/useOnboardingFlow';
import OnboardingFooter from './OnboardingFooter';

const ProcessIntroStep = ({ type }: { type: 'seeker' | 'employer' }) => {
  const seekerSteps = [
    { num: '01', title: '지원자 정보 입력', desc: '지원자의 기본적인 정보를 입력해주세요' },
    { num: '02', title: 'AI 상담원 연결', desc: 'AI 상담원과 원하는 언어로 상담하세요' },
    { num: '03', title: 'AI 이력서 작성', desc: '상담된 내용을 기반으로 AI 이력서를 작성해드려요' },
    { num: '04', title: '채용 확정', desc: '채용을 희망하는 기업에서 연락이 올 거예요' },
  ];

  const employerSteps = [
    { num: '01', title: '채용 정보 입력', desc: '채용 정보를 입력해주세요' },
    { num: '02', title: 'AI 이력서 번역 및 검수', desc: '외국인 지원자의 이력서를 한국어로 번역하고 검수해요' },
    { num: '03', title: 'AI 채용 매칭', desc: '적합한 지원자의 이력서를 보내드려요' },
    { num: '04', title: '지원자 연결', desc: '업체와 적합한 인재를 확정하고 연결해요' },
  ];

  const steps = type === 'seeker' ? seekerSteps : employerSteps;

  return (
    <div className="container">
      <div className="content-area">
        <h2 style={{ marginBottom: '30px' }}>서비스는<br/>이렇게 진행됩니다.</h2>
        {steps.map(step => (
          <div key={step.num} style={{ marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
            <h4 style={{ color: '#007bff', margin: '0 0 5px 0' }}>{step.num} {step.title}</h4>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>{step.desc}</p>
          </div>
        ))}
      </div>
      <OnboardingFooter />
    </div>
  );
};

export default ProcessIntroStep;