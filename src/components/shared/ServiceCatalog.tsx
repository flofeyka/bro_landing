import React from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { useTranslation } from "react-i18next";
import cn from "../../utils/classNames";

interface Service {
  id: number;
  title: string;
  decisionTitle: string;
  decision: string;
  functionsTitle: string;
  functions: string[];
  conclusionTitle: string;
  conclusion: string;
}

function ServiceCatalog() {
  const { t } = useTranslation();

  const [selectedService, setSelectedService] = React.useState<Service | null>(
    null
  );
  const services = t("service_catalog.services", {
    returnObjects: true,
  }) as Service[];

  React.useEffect(() => {
    setSelectedService(services[0]);
  }, []);

  return (
    <Container>
      <header className="text-center text-4xl font-bold">
        {t("service_catalog.catalog")}{" "}
        <span className="text-[#2F7FAA]">{t("service_catalog.service")}</span>
      </header>

      <main className="grid gap-10 grid-cols-[1fr_1.25fr]">
        <div className="space-y-3">
          <div>
            <h1>{selectedService?.title}</h1>
          </div>

          <div>
            <h2>{selectedService?.decisionTitle}:</h2>
            <div className="text-black/60">{selectedService?.decision}</div>
          </div>

          <div>
            <h2>{selectedService?.functionsTitle}:</h2>
            <div>
              {selectedService?.functions?.map((func) => (
                <div className="flex gap-3 items-center text-black/60">
                  <span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="8" height="8" fill="#58CAA4" />
                    </svg>
                  </span>{" "}
                  <span>{func}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2>{selectedService?.conclusionTitle}</h2>
            <div className="text-black/60">{selectedService?.conclusion}</div>
          </div>

          <div>
            <Button className="w-full">{t("buttons.getPersonalAudit")}</Button>
          </div>
        </div>

        <div>
          <div className="flex flex-wrap gap-3">
            {services.map((service) => (
              <button
                onClick={() => setSelectedService(service)}
                className={cn(
                  selectedService?.id === service.id
                    ? "text-white font-semibold border-black bg-[#2F7FAA]"
                    : "border-black/30 bg-[#DAECF6] text-black/70",
                  "p-2 px-3 border rounded-full"
                )}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </main>
    </Container>
  );
}

export default ServiceCatalog;
