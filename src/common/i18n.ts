import i18n, { type InitOptions } from "i18next";
import Backend, { type HttpBackendOptions } from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import translationEN from "../assets/locales/en/translations.json";
import translationRu from "../assets/locales/ru/translations.json";
import testEn from "../assets/locales/en/test.json";
import testRu from "../assets/locales/ru/test.json";
import { isProduction } from "./utils";

export const defaultNS = "translations";
export const resources = {
	en: { translations: translationEN , test: testEn },
	ru: { translations: translationRu, test: testRu },
} as const;
const translationFiles = Array.from(
	new Set(Object.values(resources).flatMap(Object.keys))
  );
  
const i18nOptions: InitOptions<HttpBackendOptions> = {
	defaultNS,
	ns: [...translationFiles],
	debug: !isProduction,
	fallbackLng: "en",
	interpolation: {
		escapeValue: false,
	},
	backend: {
		loadPath: isProduction
		? "locales/{{lng}}/{{ns}}.json"
		: "src/assets/locales/{{lng}}/{{ns}}.json",
	},
};

void i18n
	.use(initReactI18next)
	.use({type: "languageDetector", detect: () => "ru",})
	.use(Backend)
	.init<HttpBackendOptions>(i18nOptions);
