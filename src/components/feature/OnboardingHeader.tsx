import React from 'react';
import Button from '../ui/Button';

const OnboardingHeader = () => {
  return (
    <header className="header" style={{ padding: '15px 20px', borderBottom: '1px solid #eee' }}>
      <div className="logo">VISALINKO</div>
      <div className="action-buttons">
        <Button variant="ghost">로그인</Button>
        <Button>회원가입</Button>
      </div>
    </header>
  );
};

export default OnboardingHeader;