// 파일: src/constants/languages.ts
export type LanguageOption = { value: string; label: string };

export const LANGUAGE_OPTIONS: LanguageOption[] = [
    // 동아시아
    { value: "ko", label: "한국어" },
    { value: "en", label: "English" },
    { value: "ja", label: "日本語" },
    { value: "zh", label: "中文 (Chinese)" },
    { value: "zh-CN", label: "简体中文 (Chinese Simplified)" },
    { value: "zh-TW", label: "繁體中文 (Chinese Traditional)" },

    // 동남아시아
    { value: "vi", label: "Tiếng Việt (Vietnamese)" },
    { value: "th", label: "ไทย (Thai)" },
    { value: "id", label: "Bahasa Indonesia" },
    { value: "ms", label: "Bahasa Melayu (Malay)" },
    { value: "fil", label: "Filipino (Tagalog)" },
    { value: "km", label: "ភាសាខ្មែរ (Khmer)" },
    { value: "lo", label: "ລາວ (Lao)" },
    { value: "my", label: "မြန်မာ (Burmese)" },

    // 남아시아
    { value: "hi", label: "हिन्दी (Hindi)" },
    { value: "bn", label: "বাংলা (Bengali)" },
    { value: "ur", label: "اردو (Urdu)" },
    { value: "ta", label: "தமிழ் (Tamil)" },
    { value: "te", label: "తెలుగు (Telugu)" },
    { value: "si", label: "සිංහල (Sinhala)" },
    { value: "ne", label: "नेपाली (Nepali)" },

    // 중앙아시아 / 동유럽
    { value: "ru", label: "Русский (Russian)" },
    { value: "uk", label: "Українська (Ukrainian)" },
    { value: "kk", label: "Қазақ тілі (Kazakh)" },
    { value: "uz", label: "Oʻzbek (Uzbek)" },
    { value: "mn", label: "Монгол (Mongolian)" },

    // 중동
    { value: "ar", label: "العربية (Arabic)" },
    { value: "fa", label: "فارسی (Persian)" },
    { value: "tr", label: "Türkçe (Turkish)" },
    { value: "he", label: "עברית (Hebrew)" },

    // 유럽
    { value: "es", label: "Español (Spanish)" },
    { value: "fr", label: "Français (French)" },
    { value: "de", label: "Deutsch (German)" },
    { value: "it", label: "Italiano (Italian)" },
    { value: "pt", label: "Português (Portuguese)" },
    { value: "pt-BR", label: "Português (Brasil)" },
    { value: "nl", label: "Nederlands (Dutch)" },
    { value: "pl", label: "Polski (Polish)" },
    { value: "sv", label: "Svenska (Swedish)" },
    { value: "no", label: "Norsk (Norwegian)" },
    { value: "da", label: "Dansk (Danish)" },
    { value: "fi", label: "Suomi (Finnish)" },
    { value: "el", label: "Ελληνικά (Greek)" },
    { value: "cs", label: "Čeština (Czech)" },
    { value: "sk", label: "Slovenčina (Slovak)" },
    { value: "hu", label: "Magyar (Hungarian)" },
    { value: "ro", label: "Română (Romanian)" },
    { value: "bg", label: "Български (Bulgarian)" },

    // 아프리카
    { value: "sw", label: "Kiswahili (Swahili)" },
    { value: "am", label: "አማርኛ (Amharic)" },
    { value: "ha", label: "Hausa" },
    { value: "yo", label: "Yorùbá" },
    { value: "ig", label: "Igbo" },
    { value: "zu", label: "Zulu" },

    // 기타
    { value: "pa", label: "ਪੰਜਾਬੀ (Punjabi)" },
    { value: "jw", label: "Jawa (Javanese)" },
];
