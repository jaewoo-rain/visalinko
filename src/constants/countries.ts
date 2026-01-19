// 파일: src/constants/countries.ts
import countries from "i18n-iso-countries";

import en from "i18n-iso-countries/langs/en.json";
import ko from "i18n-iso-countries/langs/ko.json";
import ja from "i18n-iso-countries/langs/ja.json";
import zh from "i18n-iso-countries/langs/zh.json";
import fr from "i18n-iso-countries/langs/fr.json";
import de from "i18n-iso-countries/langs/de.json";
import es from "i18n-iso-countries/langs/es.json";
import it from "i18n-iso-countries/langs/it.json";
import pt from "i18n-iso-countries/langs/pt.json";
import ru from "i18n-iso-countries/langs/ru.json";
import ar from "i18n-iso-countries/langs/ar.json";

import vi from "i18n-iso-countries/langs/vi.json";
import th from "i18n-iso-countries/langs/th.json";
import id from "i18n-iso-countries/langs/id.json";
import tr from "i18n-iso-countries/langs/tr.json";

import nl from "i18n-iso-countries/langs/nl.json";
import pl from "i18n-iso-countries/langs/pl.json";
import uk from "i18n-iso-countries/langs/uk.json";

export type CountryOption = { value: string; label: string };

const SUPPORTED = new Set<string>();
let registered = false;

function ensureRegistered() {
    if (registered) return;

    const locales = [
        en, ko, ja, zh, fr, de, es, it, pt, ru, ar,
        vi, th, id, tr,
        nl, pl, uk,
    ];

    for (const localeJson of locales) {
        countries.registerLocale(localeJson);
        if (localeJson?.lang) SUPPORTED.add(String(localeJson.lang).toLowerCase());
    }

    SUPPORTED.add("en");
    registered = true;
}

function normalizeLocale(appLang: string) {
    const raw = (appLang || "en").toLowerCase();
    const base = raw.split("-")[0];

    if (base === "zh") return "zh";     // zh-CN/zh-TW -> zh
    if (base === "pt") return "pt";     // pt-BR -> pt
    return base || "en";
}

export function getCountryOptions(appLanguage: string): CountryOption[] {
    ensureRegistered();

    const locale = normalizeLocale(appLanguage);
    const effectiveLocale = SUPPORTED.has(locale) ? locale : "en";

    const names = countries.getNames(effectiveLocale) || {};
    const safeNames =
        Object.keys(names).length > 0 ? names : countries.getNames("en") || {};

    return Object.entries(safeNames)
        .map(([code, name]) => ({ value: code, label: String(name) }))
        .sort((a, b) => a.label.localeCompare(b.label, effectiveLocale));
}
