import React from 'react';
import { useOnboardingFlow } from '../../hooks/useOnboardingFlow';
import OnboardingFooter from './OnboardingFooter';
import styles from './FlowSelectStep.module.css'; // ★ CSS 모듈 임포트

const FlowSelectStep = () => {
  const { userFlow, handleSelectFlow, goToNextStep } = useOnboardingFlow();

  return (
    <div className="container">
      <div className="content-area">
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <h2>원하시는 서비스를<br />선택해주세요</h2>
        </div>
        
        {/* styles.클래스명 형태로 사용 */}
        <div className={styles.cardContainer}>
          <div 
            className={`${styles.cardOption} ${userFlow === 'seeker' ? styles.selected : ''}`}
            onClick={() => handleSelectFlow('seeker')}
          >
            <span className={styles.cardIcon}>💼</span>
            <span className={styles.cardTitle}>구직</span>
            <span className={styles.cardDesc}>일자리 찾기</span>
          </div>

          <div 
            className={`${styles.cardOption} ${userFlow === 'employer' ? styles.selected : ''}`}
            onClick={() => handleSelectFlow('employer')}
          >
            <span className={styles.cardIcon}>🏢</span>
            <span className={styles.cardTitle}>구인</span>
            <span className={styles.cardDesc}>근로자 찾기</span>
          </div>
        </div>

        {userFlow && (
           <div className={styles.infoBox}>
             <p className={styles.infoText}>
               {userFlow === 'seeker' 
                 ? "간단한 정보를 입력하고 5분 이내에 일자리를 찾아보세요."
                 : "기업 정보를 입력하고 5분 이내에 이력서를 받아보세요."}
             </p>
           </div>
        )}
      </div>
      
      <OnboardingFooter 
        isNextDisabled={!userFlow} 
        onNextClick={goToNextStep}
      />
    </div>
  );
};

export default FlowSelectStep;