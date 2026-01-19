// 파일: src/constants/routes.ts

export const ROUTE_PATHS = {
  HOME: '/',
  // 구인자(Employer) 경로
  EMPLOYER: {
    INTRO: '/employer/intro',
    BASIC_INFO: '/employer/basic-info',
    CONDITIONS: '/employer/conditions',
    ADDITIONAL: '/employer/additional',
    COMPLETE: '/employer/complete',
  },
  // 구직자(Seeker) 경로
  SEEKER: {
    INTRO: '/seeker/intro',
    BASIC_INFO: '/seeker/basic-info',
    CONSULTATION: '/seeker/consultation',
    COMPLETE: '/seeker/complete',
  },
  ADMIN: {
    MAIN: '/admin/linkotovisa'
  }
} as const;

// 순서 정의 (다음 버튼 클릭 시 이동할 순서)
export const EMPLOYER_FLOW = [
  ROUTE_PATHS.EMPLOYER.INTRO,
  ROUTE_PATHS.EMPLOYER.BASIC_INFO,
  ROUTE_PATHS.EMPLOYER.CONDITIONS,
  ROUTE_PATHS.EMPLOYER.ADDITIONAL,
  ROUTE_PATHS.EMPLOYER.COMPLETE,
];

export const SEEKER_FLOW = [
  ROUTE_PATHS.SEEKER.INTRO,
  ROUTE_PATHS.SEEKER.BASIC_INFO,
  ROUTE_PATHS.SEEKER.CONSULTATION,
  ROUTE_PATHS.SEEKER.COMPLETE,
];
