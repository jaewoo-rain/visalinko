import React from 'react';
import { useOnboardingFlow } from '../../../hooks/useOnboardingFlow';
import OnboardingFooter from '../OnboardingFooter';
import Input from '../../ui/Input';
import Select from '../../ui/Select';

const WorkConditionsStep = () => {
  const { formData, setFormData } = useOnboardingFlow();

  const jobs = ['생산', '건설, 건축', '구매, 자재, 물류', '회계, 세무, 재무', '기획, 전략'];
  const days = ['월', '화', '수', '목', '금', '토', '일', '변동'];

  return (
    <div className="container">
      <div className="content-area">
        <div className="progress-header">
          <span className="step-label">● STEP 2</span>
          <h3 style={{ color: '#007bff' }}>근무 조건 입력</h3>
        </div>

        <div className="step-content">
          <div className="form-group">
            <label>담당 업무</label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {jobs.map(job => (
                <label key={job} style={{ fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <input type="checkbox" /> {job}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>근무 요일</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {days.map(day => (
                <label key={day} style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                  <input type="checkbox" /> {day}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>근무 시간</label>
            <div className="input-group">
              <Select options={[{value: '09:00', label: '업무 시작 시간'}]} />
              <Select options={[{value: '18:00', label: '업무 종료 시간'}]} />
            </div>
          </div>

          <Input label="급여 (월 급여 예상)" placeholder="0" suffix="원" />
        </div>
      </div>
      <OnboardingFooter />
    </div>
  );
};

export default WorkConditionsStep;