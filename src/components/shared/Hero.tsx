import { useTranslation } from "react-i18next";
import Input from "../ui/Input.tsx";
import Button from "../ui/Button.tsx";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <main className="p-10 flex flex-col justify-center">
      <div className="flex items-center gap-10 w-full justify-end">
        <span className="text-6xl whitespace-pre-line font-semibold  text-end">
          {t("hero.crypto_operations")} <br />
          <span className="text-[#2F7FAA]">{t("hero.everydaySecure")}</span>
        </span>

        <span>
          <img
            src="/images/lock.jpg"
            className="w-[325px] rounded-2xl"
            alt="lock"
          />
        </span>
      </div>

      <div className="flex items-center gap-10 w-full">
        <span>
          <img
            src="/images/safe_bitcoin.jpg"
            className="w-[325px] rounded-2xl"
            alt="safe bitcoin"
          />
        </span>

        <span className="flex flex-col items-end">
          <div className="flex gap-2 max-w-[450px] items-center">
            <span className="text-[120px] h-[200px] font-light text-[#2F7FAA]">
              [
            </span>
            <span className="text-black/50">{t("hero.monitoring")}</span>
            <span className="text-[120px] h-[200px] font-light text-[#2F7FAA]">
              ]
            </span>
          </div>

          <div className="flex">
            <Input className="w-[350px]" placeholder="Enter your email" />
            <Button>{t("buttons.getPersonalAudit")}</Button>
          </div>
        </span>
      </div>
    </main>
  );
}
