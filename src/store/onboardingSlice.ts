import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserFlow } from '../constants/onboarding';

interface OnboardingState {
  userFlow: UserFlow; // 'employer' | 'seeker' | null
  currentStepIndex: number; // 현재 필터링된 슬라이드 배열 내의 인덱스
  formData: any; // 각 단계별로 입력된 데이터를 저장할 임시 공간
}

const initialState: OnboardingState = {
  userFlow: null,
  currentStepIndex: 0,
  formData: {},
};

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setUserFlow: (state, action: PayloadAction<UserFlow>) => {
      state.userFlow = action.payload;
      state.currentStepIndex = 0; // 플로우 선택 시 초기화
      state.formData = {}; // 플로우 변경 시 폼 데이터도 초기화
    },
    nextStep: (state) => {
      state.currentStepIndex += 1;
    },
    prevStep: (state) => {
      state.currentStepIndex -= 1;
    },
    updateFormData: (state, action: PayloadAction<{ key: string; value: any }>) => {
      state.formData[action.payload.key] = action.payload.value;
    },
    resetOnboarding: (state) => {
      state.userFlow = null;
      state.currentStepIndex = 0;
      state.formData = {};
    },
  },
});

export const { setUserFlow, nextStep, prevStep, updateFormData, resetOnboarding } = onboardingSlice.actions;
export default onboardingSlice.reducer;