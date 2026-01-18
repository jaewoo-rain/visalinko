import React from 'react';
import Input from '../../ui/Input';
import Select from '../../ui/Select';
import RadioGroup from '../../ui/RadioGroup';
import { useOnboardingFlow } from '../../../hooks/useOnboardingFlow';
import OnboardingFooter from '../OnboardingFooter';

const PersonalInfoStep = () => {
  const { formData, setFormData } = useOnboardingFlow();

  return (
    <div className="container">
      <div className="content-area">
        <div className="progress-header">
          <span className="step-label">● STEP 1</span>
          <h3 style={{ color: '#007bff' }}>지원자 정보 입력</h3>
        </div>

        <div className="step-content">
          <Input 
            label="이름" 
            placeholder="이름을 입력해주세요." 
            value={formData.name || ''}
            onChange={(e) => setFormData('name', e.target.value)}
          />

          <div className="form-group">
            <label>생년월일</label>
            <div className="input-group">
              <Select options={[{value: '2000', label: '2000'}]} defaultValue="2000" />
              <Select options={[{value: '12', label: '12'}]} defaultValue="12" />
              <Select options={[{value: '31', label: '31'}]} defaultValue="31" />
            </div>
          </div>

          <RadioGroup 
            label="성별"
            name="gender"
            options={[
              { label: '남성', value: 'male' },
              { label: '여성', value: 'female' }
            ]}
            selectedValue={formData.gender || 'male'}
            onChange={(val) => setFormData('gender', val)}
          />

          <div className="form-group">
            <label>연락처</label>
            <div className="input-group">
              <Input placeholder="010" />
              <Input placeholder="1234" />
              <Input placeholder="5678" />
            </div>
          </div>
        </div>
      </div>
      <OnboardingFooter isNextDisabled={!formData.name} />
    </div>
  );
};

export default PersonalInfoStep;