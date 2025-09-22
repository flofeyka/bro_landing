import { useTranslation } from "react-i18next";
import Container from "../ui/Container";
import React from "react";
import Button from "../ui/Button";

interface Plan {
  title: string;
  subtitle: string;
}

function Criminalistics() {
  const { t } = useTranslation();

  const plans = React.useMemo(
    () => t("criminalistics.plans", { returnObjects: true }) as Plan[],
    [t]
  );

  return (
    <Container>
      <header className="space-y-3 flex flex-col items-center">
        <div className="text-7xl font-semibold text-center">
          {"[ "}
          <span className="text-[#2F7FAA]">
            {t("criminalistics.crypto_title")}
            <br />
          </span>
          <span className="whitespace-pre-line">
            {t("criminalistics.crypto_subtitle")} ]
          </span>
        </div>

        <div className="text-sm text-black/50 w-[40%]">
          {t("criminalistics.description")}
        </div>
      </header>

      <main className="grid grid-cols-[1fr_2.5fr_1fr] gap-3 justify-center">
        <div className="space-y-2">
          {plans.slice(0, 3).map((plan) => (
            <div className="space-y-1" key={plan.title}>
              <h3 className="text-[#2F7FAA] font-semibold">{plan.title}</h3>
              <h5 className="text-black/50">{plan.subtitle}</h5>
            </div>
          ))}
        </div>

        <img
          src="/images/criminalistics_help_image.png"
          alt="criminalistics"
          className="h-full w-full object-cover rounded-2xl"
        />

        <div className="space-y-2">
          {plans.slice(3, 6).map((plan) => (
            <div className="space-y-1" key={plan.title}>
              <h3 className="text-[#2F7FAA] font-semibold">{plan.title}</h3>
              <h5 className="text-sm text-black/50">{plan.subtitle}</h5>
            </div>
          ))}
        </div>
      </main>

      <footer className="flex flex-col justify-center items-center space-y-5">
        <div className="space-y-1 w-[350px]">
          <h3 className="text-[#2F7FAA] font-semibold text-xl">
            {t("criminalistics.result.title")}
          </h3>
          <h5 className="text-sm text-black/50">
            {t("criminalistics.result.description")}
          </h5>
        </div>
        <Button className="w-[60vw]">{t("buttons.getPersonalAudit")}</Button>
      </footer>
    </Container>
  );
}

export default Criminalistics;
