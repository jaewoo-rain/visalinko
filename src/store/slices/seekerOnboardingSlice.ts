import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Gender = "male" | "female" | null;
export type ChannelValue = "kakao" | "line" | "whatsapp" | null;
export type Option = { value: string; label: string } | null;

interface SeekerOnboardingState {
    basicInfo: {
        name: string;
        birth: { year: string; month: string; day: string };
        gender: Gender;
        phone: { p1: string; p2: string; p3: string };
    };
    consultation: {
        country: Option;
        lang: Option;
        channel: ChannelValue;
        channelLink: string | null;
    };
}

const initialState: SeekerOnboardingState = {
    basicInfo: {
        name: "",
        birth: { year: "", month: "", day: "" },
        gender: null,
        phone: { p1: "", p2: "", p3: "" },
    },
    consultation: {
        country: null,
        lang: null,
        channel: null,
        channelLink: null,
    },
};

const seekerOnboardingSlice = createSlice({
    name: "seekerOnboarding",
    initialState,
    reducers: {
        // Step 1
        setName(state, action: PayloadAction<string>) {
            state.basicInfo.name = action.payload;
        },
        setBirth(state, action: PayloadAction<SeekerOnboardingState["basicInfo"]["birth"]>) {
            state.basicInfo.birth = action.payload;
        },
        setGender(state, action: PayloadAction<Gender>) {
            state.basicInfo.gender = action.payload;
        },
        setPhone(state, action: PayloadAction<SeekerOnboardingState["basicInfo"]["phone"]>) {
            state.basicInfo.phone = action.payload;
        },

        // Step 2
        setCountry(state, action: PayloadAction<Option>) {
            state.consultation.country = action.payload;
        },
        setLang(state, action: PayloadAction<Option>) {
            state.consultation.lang = action.payload;
        },
        setChannel(
            state,
            action: PayloadAction<{ channel: ChannelValue; channelLink: string | null }>
        ) {
            state.consultation.channel = action.payload.channel;
            state.consultation.channelLink = action.payload.channelLink;
        },

        resetSeekerOnboarding() {
            return initialState;
        },
    },
});

export const {
    setName,
    setBirth,
    setGender,
    setPhone,
    setCountry,
    setLang,
    setChannel,
    resetSeekerOnboarding,
} = seekerOnboardingSlice.actions;

export default seekerOnboardingSlice.reducer;
