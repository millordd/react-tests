import type { FC } from "react";
import { useTranslation } from "react-i18next";

export const Home:FC = () => {
	const { t, i18n } = useTranslation('translations');

	const onTranslateButtonClick = async (): Promise<void> => {
		if (i18n.resolvedLanguage === "en") {
			await i18n.changeLanguage("ru");
		} else {
			await i18n.changeLanguage("en");
		}
	};

	return (
		<div className="bg-blue-300  font-bold w-screen h-screen flex flex-col justify-center items-center">
			<p className="text-white text-6xl">{t("home.greeting")}</p>
			<button type="submit" onClick={onTranslateButtonClick}>
				{t('home.translate')}
			</button>
		</div>
	);
};
