// 파일: src/components/feature/SeekerSteps/SeekerConsultation.tsx
import { useMemo } from "react";
import ReactSelect from "react-select";
import { useTranslation } from "react-i18next";

import { RadioGroup } from "../../ui/RadioGroup";
import { Button } from "../../ui/Button";
import { useOnboarding } from "../../../hooks/useOnboarding";
import StepSeeker from "../../ui/StepSeeker";

import { getCountryOptions } from "../../../constants/countries";
import { LANGUAGE_OPTIONS } from "../../../constants/languages";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setCountry, setLang, setChannel } from "../../../store/slices/seekerOnboardingSlice";

// import { submitConsultation } from "../../../api/consultation";

type ChannelValue = "kakao" | "line" | "whatsapp";

type ChannelOption = {
  label: string;
  value: ChannelValue;
  imgSrc: string;
  link: string;
};

const CHANNEL_OPTIONS: ChannelOption[] = [
  { label: "KAKAOTALK", value: "kakao", imgSrc: "/images/kakao.png", link: "https://example.com/kakao" },
  { label: "LINE", value: "line", imgSrc: "/images/line.png", link: "https://example.com/line" },
  { label: "WHATSAPP", value: "whatsapp", imgSrc: "/images/whatsapp.png", link: "https://example.com/whatsapp" },
];

export const SeekerConsultation = () => {
  const { handleNext } = useOnboarding();
  const { i18n } = useTranslation();
  const dispatch = useAppDispatch();

  const consultation = useAppSelector((s) => s.seekerOnboarding.consultation);
  const onboardingAll = useAppSelector((s) => s.seekerOnboarding);

  const countryOptions = useMemo(() => getCountryOptions(i18n.language), [i18n.language]);

  const selectStyles = useMemo(
    () => ({
      control: (base: any) => ({
        ...base,
        minHeight: 44,
        borderRadius: 12,
        borderColor: "#E5E7EB",
        boxShadow: "none",
      }),
      placeholder: (base: any) => ({ ...base, color: "#9CA3AF" }),
      singleValue: (base: any) => ({ ...base, color: "#111827" }),
      menu: (base: any) => ({ ...base, borderRadius: 12, overflow: "hidden" }),
    }),
    []
  );

  const handleChannelChange = (v: string) => {
    const selected = CHANNEL_OPTIONS.find((c) => c.value === v);
    if (!selected) return;

    dispatch(
      setChannel({
        channel: selected.value,
        channelLink: selected.link,
      })
    );
  };

  // const onSubmit = async () => {
  //   try {
  //     console.log("전송 데이터:", onboardingAll);

  //     await submitConsultation(onboardingAll);

  //     handleNext();
  //   } catch (e) {
  //     console.error("상담 신청 실패", e);
  //   }
  // };

  const onSubmit = () => {
    // ✅ 나중에 여기서 MongoDB 저장 붙이면 됨
    console.log("✅ 최종 온보딩 데이터:", onboardingAll);

    handleNext();
  };

  return (
    <div>
      <StepSeeker currentStep={2} />

      <div className="bg-white p-4 rounded-lg space-y-6">
        <div>
          <label className="font-bold block mb-2">출신 국적</label>
          <ReactSelect
            options={countryOptions}
            value={consultation.country}
            onChange={(v) => dispatch(setCountry(v as any))}
            placeholder="출신 국적을 검색/선택하세요"
            styles={selectStyles}
            isSearchable
          />
        </div>

        <div>
          <label className="font-bold block mb-2">원하는 상담 언어</label>
          <ReactSelect
            options={LANGUAGE_OPTIONS}
            value={consultation.lang}
            onChange={(v) => dispatch(setLang(v as any))}
            placeholder="원하는 상담 언어를 검색/선택하세요"
            styles={selectStyles}
            isSearchable
          />
        </div>

        <div>
          <label className="font-bold block mb-2">원하는 상담 채널</label>
          <RadioGroup
            value={consultation.channel}
            onChange={handleChannelChange}
            options={CHANNEL_OPTIONS.map((c) => ({
              label: c.label,
              value: c.value,
              icon: <img src={c.imgSrc} alt={c.label} className="w-6 h-6 object-contain" />,
            }))}
          />
        </div>

        <Button onClick={onSubmit} fullWidth className="bg-gray-400 mt-8">
          상담 신청
        </Button>
      </div>
    </div>
  );
};
