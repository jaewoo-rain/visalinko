import { useAppDispatch, useAppSelector } from './useAppRedux';
import { ONBOARDING_SLIDES, UserFlow } from '../constants/onboarding';
import { nextStep, prevStep, setUserFlow, resetOnboarding, updateFormData } from '../store/onboardingSlice';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const useOnboardingFlow = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { userFlow, currentStepIndex, formData } = useAppSelector((state) => state.onboarding);

  // 현재 유저 플로우에 맞는 슬라이드만 필터링 (common + 선택된 flow)
  const filteredSlides = ONBOARDING_SLIDES.filter(
    (s) => s.type === 'common' || s.type === userFlow
  );

  const currentSlide = filteredSlides[currentStepIndex];
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === filteredSlides.length - 1;

  // 플로우 선택 핸들러
  const handleSelectFlow = async (flow: UserFlow) => {
    dispatch(setUserFlow(flow));
    // 여기서 API 호출하여 사용자 플로우 저장 (선택 사항)
    // await api.saveFlowSelection(flow);
    // NOTE: setUserFlow 이후 currentStepIndex가 0으로 재설정되므로,
    // 다음 스텝으로 진행하는 것은 FlowSelectStep 컴포넌트에서 담당
  };

  const goToNextStep = () => {
    if (isLastStep) {
      navigate('/complete');
      dispatch(resetOnboarding()); // 완료 후 상태 초기화
    } else {
      dispatch(nextStep());
    }
  };

  const goToPrevStep = () => {
    if (!isFirstStep) {
      dispatch(prevStep());
    } else {
      // 첫 단계에서 뒤로 가기 시, 플로우 선택 페이지로 이동하거나 앱 시작점으로 복귀
      navigate('/');
      dispatch(resetOnboarding());
    }
  };

  const setFormData = (key: string, value: any) => {
    dispatch(updateFormData({ key, value }));
  };

  return {
    currentSlide,
    userFlow,
    currentStepIndex,
    totalSteps: filteredSlides.length,
    isFirstStep,
    isLastStep,
    formData,
    setFormData,
    handleSelectFlow,
    goToNextStep,
    goToPrevStep,
  };
};