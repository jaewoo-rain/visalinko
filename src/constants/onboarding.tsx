export type UserFlow = 'employer' | 'seeker' | null;
export type SlideType = 'common' | 'employer' | 'seeker';

export interface Slide {
  id: number;
  title: string;
  subtitle: string; // 이미지 하단의 작은 설명 텍스트
  type: SlideType;
  component: string; // 렌더링할 React 컴포넌트의 키
  // UI 이미지에서 보인 아이콘/이미지 등은 각 컴포넌트 내에서 처리
}

export const ONBOARDING_SLIDES: Slide[] = [
  // 1. 공통 슬라이드 (사진 1)
  { id: 1, title: '원하시는 서비스를 선택해주세요', subtitle: '', type: 'common', component: 'FlowSelectStep' },

  // 2~5. 구인자 전용 (사진 6-9) - UI 분석 결과: Employer는 4단계
  { id: 2, title: '서비스는 이렇게 진행됩니다.', subtitle: '', type: 'employer', component: 'EmpProcessIntro' }, // 사진 6
  { id: 3, title: '업체 정보 입력', subtitle: '채용 정보를 입력해주세요', type: 'employer', component: 'CompanyInfoStep' }, // 사진 7
  { id: 4, title: '근무 조건 입력', subtitle: '근무 조건을 입력해주세요', type: 'employer', component: 'WorkConditionsStep' }, // 사진 8
  { id: 5, title: '추가 사항 입력', subtitle: '', type: 'employer', component: 'AdditionalInfoStep' }, // 사진 9
  { id: 6, title: '적합한 지원자를 찾아', subtitle: '담당자님의 연락처로 연락드릴게요', type: 'employer', component: 'EmpCompleteStep' }, // 사진 10

  // 6~10. 구직자 전용 (사진 2-5) - UI 분석 결과: Seeker는 4단계
  { id: 7, title: '서비스는 이렇게 진행됩니다.', subtitle: '', type: 'seeker', component: 'SeekProcessIntro' }, // 사진 2
  { id: 8, title: '지원자 정보 입력', subtitle: '지원자의 기본적인 정보를 입력해주세요', type: 'seeker', component: 'PersonalInfoStep' }, // 사진 3
  { id: 9, title: 'AI 상담 신청', subtitle: 'AI 상담을 신청해주세요', type: 'seeker', component: 'AIServiceSelectStep' }, // 사진 4
  { id: 10, title: '지금 바로 AI와 상담을 진행해보세요', subtitle: '', type: 'seeker', component: 'AIServiceConnectStep' }, // 사진 5
];