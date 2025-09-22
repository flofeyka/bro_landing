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
        <a href="#decisions">
          <NavButton>{t("header.decision")}</NavButton>
        </a>
        <a href="#how_is_it_working">
          <NavButton>{t("header.howIsItWorking")}</NavButton>
        </a>
        <a href="#services">
          <NavButton>{t("header.services")}</NavButton>
        </a>
        <a href="#cases">
          <NavButton>{t("header.cases")}</NavButton>
        </a>
        <a href="#faq">
          <NavButton>{t("header.faq")}</NavButton>
        </a>
      </span>
    </header>
  );
}

export default Header;
