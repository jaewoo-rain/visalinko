import React from 'react';
import { useOnboardingFlow } from '../../../hooks/useOnboardingFlow';
import OnboardingFooter from '../OnboardingFooter';
import Select from '../../ui/Select';

const AIServiceSelectStep = () => {
  const { formData, setFormData } = useOnboardingFlow();

  const countries = [{ value: 'vn', label: '베트남' }, { value: 'uz', label: '우즈베키스탄' }];
  const languages = [{ value: 'ko', label: '한국어' }, { value: 'vn', label: '베트남어' }];

  return (
    <div className="container">
      <div className="content-area">
        <div className="progress-header">
          <span className="step-label">● STEP 2</span>
          <h3 style={{ color: '#007bff' }}>AI 상담 신청</h3>
        </div>

        <div className="step-content">
          <Select 
            label="출신 국적" 
            options={countries} 
            placeholder="출신 국적을 선택하세요"
            onChange={(e) => setFormData('nationality', e.target.value)}
          />

          <Select 
            label="원하는 상담 언어" 
            options={languages} 
            placeholder="원하는 상담 언어를 선택하세요"
            onChange={(e) => setFormData('lang', e.target.value)}
          />

          <div className="form-group">
            <label>원하는 상담 채널</label>
            <div className="card-option" onClick={() => setFormData('channel', 'kakao')}>
              <span style={{ marginRight: '10px' }}>🟡</span> KAKAOTALK
            </div>
            <div className="card-option" onClick={() => setFormData('channel', 'line')}>
              <span style={{ marginRight: '10px' }}>🟢</span> LINE
            </div>
            <div className="card-option" onClick={() => setFormData('channel', 'whatsapp')}>
              <span style={{ marginRight: '10px' }}>🟢</span> WHATSAPP
            </div>
          </div>
        </div>
      </div>
      <OnboardingFooter isNextDisabled={!formData.channel} />
    </div>
  );
};

export default AIServiceSelectStep;