import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import OnboardingPage from './pages/OnboardingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 접속 시 바로 온보딩 페이지로 이동 */}
        <Route path="/" element={<Navigate to="/onboarding" replace />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;