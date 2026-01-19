// 파일: src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import onboardingReducer from './slices/onboardingSlice';
import seekerOnboardingReducer from "./slices/seekerOnboardingSlice";

export const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
    seekerOnboarding: seekerOnboardingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;