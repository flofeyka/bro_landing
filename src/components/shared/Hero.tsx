import Input from "../ui/Input.tsx";
import Button from "../ui/Button.tsx";
import Lottie from "lottie-react";
import animationData from "../../utils/animations/hero.json";
import {useTranslation} from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();
  return (
    <main className="flex flex-col justify-center">
      <div className="grid sm:grid-cols-[1fr_1.11fr] max-sm:grid-rows-2 items-center w-full justify-center">
        <div>
          <span className="text-5xl max-sm:text-4xl whitespace-pre-line font-semibold text-end">
            {t("hero.crypto_operations")} <br />
            <span className="text-[#2F7FAA]">{t("hero.everydaySecure")}</span>
          </span>

          <div className="flex gap-10 w-full">
            <span className="flex flex-col">
              <div className="flex gap-2 max-w-[450px] items-center">
                <span className="text-[120px] h-[200px] font-light text-[#2F7FAA]">
                  [
                </span>
                <span className="text-black/50">{t("hero.monitoring")}</span>
                <span className="text-[120px] h-[200px] font-light text-[#2F7FAA]">
                  ]
                </span>
              </div>

              <div className="flex max-sm:flex-col gap-2">
                <Input className="w-[350px]" placeholder="Enter your email" />
                <Button>{t("buttons.getPersonalAudit")}</Button>
              </div>
            </span>
          </div>
        </div>
        <div>
          <Lottie
            animationData={animationData}
            loop
            autoplay
            rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
          />
        </div>
      </div>
    </main>
  );
}
