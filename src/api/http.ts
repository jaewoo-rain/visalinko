import axios from 'axios';

const http = axios.create({
  baseURL: 'https://api.example.com', // 실제 엔드포인트로 변경 필요
  timeout: 5000,
});

// 예시 API 호출 함수들 (실제 구현 필요)
export const api = {
  saveFlowSelection: async (flow: UserFlow) => {
    console.log('API: Saving user flow', flow);
    // return http.post('/onboarding/flow', { flow });
    return Promise.resolve({ success: true, flow });
  },
  submitPersonalInfo: async (data: any) => {
    console.log('API: Submitting personal info', data);
    // return http.post('/onboarding/personal', data);
    return Promise.resolve({ success: true, data });
  },
  submitCompanyInfo: async (data: any) => {
    console.log('API: Submitting company info', data);
    // return http.post('/onboarding/company', data);
    return Promise.resolve({ success: true, data });
  },
  submitWorkConditions: async (data: any) => {
    console.log('API: Submitting work conditions', data);
    // return http.post('/onboarding/work-conditions', data);
    return Promise.resolve({ success: true, data });
  },
};

export default http;