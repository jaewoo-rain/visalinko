import React from 'react';
import { useOnboardingFlow } from '../../../hooks/useOnboardingFlow';
import OnboardingFooter from '../OnboardingFooter';
import RadioGroup from '../../ui/RadioGroup';
import Input from '../../ui/Input';

const AdditionalInfoStep = () => {
  const { setFormData, formData } = useOnboardingFlow();

  return (
    <div className="container">
      <div className="content-area">
        <div className="progress-header">
          <span className="step-label">● STEP 3</span>
          <h3 style={{ color: '#007bff' }}>추가 사항 입력</h3>
        </div>

        <div className="step-content">
          <RadioGroup 
            label="경력"
            name="exp"
            options={[
              { label: '신입', value: 'new' },
              { label: '경력자', value: 'pro' },
              { label: '신입/경력자', value: 'all' }
            ]}
            selectedValue={formData.exp || 'all'}
            onChange={(v) => setFormData('exp', v)}
          />

          <div className="form-group">
            <label>복지 및 혜택</label>
            <div className="flex-gap-10">
              <div className="radio-button">기숙사 제공</div>
              <div className="radio-button">식사 제공</div>
              <div className="radio-button">통근 버스 제공</div>
            </div>
          </div>

          <RadioGroup 
            label="한국어 수준"
            name="langLevel"
            options={[{ label: '상', value: 'h' }, { label: '중', value: 'm' }, { label: '하', value: 'l' }]}
            selectedValue={formData.langLevel || 'm'}
            onChange={(v) => setFormData('langLevel', v)}
          />

          <Input label="우대조건" placeholder="우대조건을 입력해주세요" />
        </div>
      </div>
      <OnboardingFooter />
    </div>
  );
};

export default AdditionalInfoStep;