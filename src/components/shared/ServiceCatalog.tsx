import React from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import {useTranslation} from "react-i18next";
import cn from "../../utils/classNames";
import {motion} from "motion/react";

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
    <Container id="services">
      <header className="sm:text-center text-4xl font-bold">
        {t("service_catalog.catalog")}{" "}
        <span className="text-[#2F7FAA]">{t("service_catalog.service")}</span>
      </header>

      <main className="sm:grid max-sm:flex max-sm:flex-col-reverse gap-10 sm:grid-cols-[1fr_1.25fr]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{ duration: 0.5 }}
          className="space-y-3 flex flex-col justify-between"
          key={selectedService?.id}
        >
          <div className={'space-y-3'}>
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
                {selectedService?.functions?.map((func, index) => (
                  <div
                    key={index}
                    className="flex gap-3 items-center text-black/60 w-full"
                  >
                    <span>
                      <img className={'max-w-[10px] max-h-[10px]'} src="/icons/square_dot.svg" alt="square dot" />
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
          </div>

          <div>
            <Button className="w-full">{t("buttons.getPersonalAudit")}</Button>
          </div>
        </motion.div>

        <div>
          <div className="flex flex-wrap gap-3">
            {services.map((service) => (
              <motion.button
                animate={{
                  transition: { delay: 2000 },
                }}
                whileHover={{ scale: 1.025 }}
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={cn(
                  selectedService?.id === service.id
                    ? "text-white font-semibold border-black bg-[#2F7FAA]"
                    : "border-black/30 bg-[#DAECF6] text-black/70",
                  "p-2 px-3 border rounded-full max-sm:w-full whitespace-nowrap text-ellipsis overflow-hidden"
                )}
              >
                {service.title}
              </motion.button>
            ))}
          </div>
        </div>
      </main>
    </Container>
  );
}

export default ServiceCatalog;
