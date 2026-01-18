import React from 'react';
import { useOnboardingFlow } from '../../../hooks/useOnboardingFlow';
import OnboardingFooter from '../OnboardingFooter';
import Input from '../../ui/Input';
import Select from '../../ui/Select';

const CompanyInfoStep = () => {
  const { formData, setFormData } = useOnboardingFlow();

  return (
    <div className="container">
      <div className="content-area">
        <div className="progress-header">
          <span className="step-label">● STEP 1</span>
          <h3 style={{ color: '#007bff' }}>업체 정보 입력</h3>
        </div>

        <div className="step-content">
          <div className="grid-2-col">
            <Input label="회사명" placeholder="회사명" />
            <Input label="대표자명" placeholder="대표자명" />
          </div>

          <div className="form-group">
            <label>개업 연월일 입력</label>
            <div className="input-group">
              <Select options={[{value: '2000', label: '2000'}]} />
              <Select options={[{value: '01', label: '01'}]} />
              <Select options={[{value: '01', label: '01'}]} />
            </div>
          </div>

          <Input label="사업자 등록번호" placeholder="사업자 등록번호" />

          <div className="form-group">
            <label>담당자명 및 연락처</label>
            <Input placeholder="담당자명" />
            <div className="input-group" style={{ marginTop: '10px' }}>
              <Input placeholder="email" />
              <span style={{ alignSelf: 'center' }}>@</span>
              <Select options={[{value: 'naver.com', label: 'naver.com'}]} />
            </div>
            <div className="input-group" style={{ marginTop: '10px' }}>
              <Input placeholder="010" />
              <Input placeholder="1234" />
              <Input placeholder="5678" />
            </div>
          </div>
        </div>
      </div>
      <OnboardingFooter />
    </div>
  );
};

export default CompanyInfoStep;