import React from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { useTranslation } from "react-i18next";

interface Reason {
  title: string;
  description: string;
  image: string;
}

function WhyUs() {
  const { t } = useTranslation();

  const reasons = React.useMemo<Reason[]>(
    () => t("why_us.reasons", { returnObjects: true }) as Reason[],
    [t]
  );

  console.log(reasons);

  return (
    <Container className="flex flex-col items-center">
      <header>
        <span className="absolute left-1/4 text-sm text-black/50">
          {t("why_us.whyTheyChoose")}
        </span>
        <div className="text-center text-5xl font-bold">
          [ <span className="text-[#2F7FAA] italic">{t("why_us.whyUs")}</span> —{" "}
          <br /> {t("why_us.web3")} ]
        </div>
      </header>

      <main>
        <ul className="flex justify-center gap-2">
          {reasons.map((reason, index) => (
            <li key={index} className="flex flex-col">
              <div className="bg-[#DAECF6] flex justify-center rounded-xl">
                <img
                  src={`/images/WhyUs/${reason.image}`}
                  className="h-[100px] w-[100px]"
                  alt={reason.title}
                />
              </div>
              <div className="px-10 bg-[#2F7FAA] text-lg font-semibold rounded-full p-1 text-center text-white">
                {reason.title}
              </div>

              <div className="max-w-[200px] text-sm text-black/50">
                {reason.description}
              </div>
            </li>
          ))}
        </ul>
      </main>

      <footer>
        <Button className="w-[40vw]">{t("buttons.getPersonalAudit")}</Button>
      </footer>
    </Container>
  );
}

export default WhyUs;
