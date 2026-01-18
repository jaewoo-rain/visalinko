import React from 'react';
import { useOnboardingFlow } from '../../../hooks/useOnboardingFlow';
import OnboardingFooter from '../OnboardingFooter';
import styles from './WorkConditionsStep.module.css'; // ★ CSS 모듈 임포트

const WorkConditionsStep = () => {
  const { formData, setFormData } = useOnboardingFlow();

  const jobs = ['생산', '건설, 건축', '구매, 자재, 물류', '회계, 세무, 재무', '기획, 전략', '마케팅, 홍보', '인사, 노무', '총무, 법무', '디자인'];
  const days = ['월', '화', '수', '목', '금', '토', '일', '변동'];

  const toggleSelection = (key: string, item: string) => {
    const list = (formData[key] as string[]) || [];
    const next = list.includes(item) ? list.filter(i => i !== item) : [...list, item];
    setFormData(key, next);
  };

  return (
    <div className="container">
      <div className={styles.header}>
        {/* Step Indicator는 공통 컴포넌트라 여기선 생략하거나 별도 사용 */}
      </div>

      <div className="content-area">
        <h3 className={styles.stepLabel}>STEP 2</h3>
        <h2>근무 조건 입력</h2>
        
        <div style={{ marginTop: '30px' }}>
          <label className={styles.formLabel}>담당 업무</label>
          <div className={styles.tagContainer}>
            {jobs.map(job => (
              <div 
                key={job} 
                className={`${styles.selectableTag} ${(formData.jobs || []).includes(job) ? styles.active : ''}`}
                onClick={() => toggleSelection('jobs', job)}
              >
                {job}
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className={styles.formLabel}>근무 요일</label>
          <div className={styles.tagContainer}>
            {days.map(day => (
              <div 
                key={day} 
                className={`${styles.selectableTag} ${(formData.days || []).includes(day) ? styles.active : ''}`}
                onClick={() => toggleSelection('days', day)}
              >
                {day}
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className={styles.formLabel}>근무 시간</label>
          <div className="grid-2">
            <select className={styles.inputField}>
              <option>09:00</option>
            </select>
            <select className={styles.inputField}>
              <option>18:00</option>
            </select>
          </div>
        </div>

        <div>
          <label className={styles.formLabel}>급여 (월 예상)</label>
          <input type="text" className={styles.inputField} placeholder="0원" style={{ textAlign: 'right' }} />
        </div>
      </div>
      <OnboardingFooter />
    </div>
  );
};

export default WorkConditionsStep;