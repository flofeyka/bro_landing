import NavButton from "../ui/NavButton.tsx";
import {useTranslation} from "react-i18next";
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

const scrollToId = (id: string) => {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "center", // <--- ставим элемент по центру экрана
    });
  }
};

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = async (lang: string) => {
    await i18n.changeLanguage(lang);
  };

  const currentLanguage = React.useMemo(() => i18n.language, [i18n.language]);

  return (
    <header className={"flex justify-between items-center p-5"}>
      <span className={"flex gap-3 max-[768px]:justify-between max-[768px]:w-full"}>
        <img src={"/icons/bro.svg"} alt={"bro company"} />
        <span className={"flex gap-3 max-sm:text-xl"}>
          {languages.map((lang, index: number) => (
            <button key={index}
              className={currentLanguage === lang.key ? "text-[#2F7FAA]" : ""}
              onClick={() => changeLanguage(lang.key)}
            >
              {lang.title}
            </button>
          ))}
        </span>
      </span>

      <span className={"flex gap-2 max-[768px]:hidden"}>
        <button onClick={() => scrollToId("decisions")}>
          <NavButton>{t("header.decision")}</NavButton>
        </button>
        <button onClick={() => scrollToId("how_is_it_working")}>
          <NavButton>{t("header.howIsItWorking")}</NavButton>
        </button>
        <button onClick={() => scrollToId("services")}>
          <NavButton>{t("header.services")}</NavButton>
        </button>
        <button onClick={() => scrollToId("cases")}>
          <NavButton>{t("header.cases")}</NavButton>
        </button>
        <button onClick={() => scrollToId("faq")}>
          <NavButton>{t("header.faq")}</NavButton>
        </button>
      </span>
    </header>
  );
}

export default Header;
