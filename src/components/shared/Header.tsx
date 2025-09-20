import NavButton from "../ui/NavButton.tsx";
import { useTranslation } from "react-i18next";
import * as React from "react";

const languages = [
  {
    title: "RU",
    key: "ru",
  },
  {
    title: "EN",
    key: "en",
  },
];

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = async (lang: string) => {
    await i18n.changeLanguage(lang);
  };

  const currentLanguage = React.useMemo(() => i18n.language, [i18n.language]);

  return (
    <header className={"flex justify-between items-center"}>
      <span className={"flex gap-3"}>
        <img src={"/icons/bro.svg"} alt={"bro company"} />
        <span className={"flex gap-3"}>
          {languages.map((lang) => (
            <button
              className={currentLanguage === lang.key ? "text-[#2F7FAA]" : ""}
              onClick={() => changeLanguage(lang.key)}
            >
              {lang.title}
            </button>
          ))}
        </span>
      </span>

      <span className={"flex gap-2"}>
        <NavButton>{t("header.decision")}</NavButton>
        <NavButton>{t("header.howIsItWorking")}</NavButton>
        <NavButton>{t("header.services")}</NavButton>
        <NavButton>{t("header.cases")}</NavButton>
        <NavButton>{t("header.faq")}</NavButton>
      </span>
    </header>
  );
}

export default Header;
