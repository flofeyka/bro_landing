import Input from "../ui/Input.tsx";
import Button from "../ui/Button.tsx";
import Lottie from "lottie-react";
import animationData from "../../utils/animations/hero.json";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();
  return (
    <main className="flex flex-col justify-center">
      <div className="grid min-[1200px]:grid-cols-[1fr_1.11fr] max-[768px]:grid-rows-2 items-center w-full justify-center">
        <div>
          <span className="text-5xl max-sm:text-4xl min-[2000px]:text-6xl min-[2500px]:text-7xl whitespace-pre-line font-semibold text-end">
            {t("hero.crypto_operations")} <br />
            <span className="text-[#2F7FAA]">{t("hero.everydaySecure")}</span>
          </span>

          <div className="flex gap-10 w-full">
            <span className="flex flex-col">
              <div className="flex gap-2 max-w-[450px] items-center">
                <span className="text-[120px] h-[200px] font-light text-[#2F7FAA]">
                  [
                </span>
                <span className="text-black/50 min-[2000px]:text-lg min-[2500px]:text-xl">
                  {t("hero.monitoring")}
                </span>
                <span className="text-[120px] h-[200px] font-light text-[#2F7FAA]">
                  ]
                </span>
              </div>

              <div className="flex max-[1200px]:flex-col gap-2">
                <Input
                  className="min-w-[1200px]:w-[350px] w-full min-[2000px]:text-xl min-[2500px]:text-2xl"
                  placeholder="Enter your email"
                />
                <a href={"request"} className={"max-sm:w-full"}>
                  <Button className="text-xs min-[1267px]:text-sm min-[1500px]:text-base min-[2000px]:text-2xl min-[2500px]:text-3xl max-sm:w-full">
                    {t("buttons.getPersonalAudit")}
                  </Button>
                </a>
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
