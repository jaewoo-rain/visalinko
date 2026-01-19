// 파일: src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/ui/Layout';

// Components
import { RoleSelection } from './components/feature/Shared/RoleSelection';
import { IntroSlide } from './components/feature/Shared/IntroSlide';
import { CompletionSlide } from './components/feature/Shared/CompletionSlide';

import { EmployerBasicInfo } from './components/feature/EmployerSteps/EmployerBasicInfo';
import { EmployerConditions } from './components/feature/EmployerSteps/EmployerConditions';
import { EmployerAdditional } from './components/feature/EmployerSteps/EmployerAdditional';

import { SeekerBasicInfo } from './components/feature/SeekerSteps/SeekerBasicInfo';
import { SeekerConsultation } from './components/feature/SeekerSteps/SeekerConsultation';

import { ROUTE_PATHS } from './constants/routes';
import { AdminPage } from './components/feature/Admin/adminPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* 1. 홈 (역할 선택) */}
          <Route path={ROUTE_PATHS.HOME} element={<RoleSelection />} />

          {/* 2. 구인자(Employer) 플로우 */}
          <Route path={ROUTE_PATHS.EMPLOYER.INTRO} element={<IntroSlide />} />
          <Route path={ROUTE_PATHS.EMPLOYER.BASIC_INFO} element={<EmployerBasicInfo />} />
          <Route path={ROUTE_PATHS.EMPLOYER.CONDITIONS} element={<EmployerConditions />} />
          <Route path={ROUTE_PATHS.EMPLOYER.ADDITIONAL} element={<EmployerAdditional />} />
          <Route path={ROUTE_PATHS.EMPLOYER.COMPLETE} element={<CompletionSlide />} />

          {/* 3. 구직자(Seeker) 플로우 */}
          <Route path={ROUTE_PATHS.SEEKER.INTRO} element={<IntroSlide />} />
          <Route path={ROUTE_PATHS.SEEKER.BASIC_INFO} element={<SeekerBasicInfo />} />
          <Route path={ROUTE_PATHS.SEEKER.CONSULTATION} element={<SeekerConsultation />} />
          <Route path={ROUTE_PATHS.SEEKER.COMPLETE} element={<CompletionSlide />} />

          {/* ADMIN페이지 */}
          <Route path={ROUTE_PATHS.ADMIN.MAIN} element={<AdminPage />} />

          {/* 4. 잘못된 경로 처리 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;