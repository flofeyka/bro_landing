import React from "react";
import {useTranslation} from "react-i18next";
import Button from "../ui/Button";
import Container from "../ui/Container";

interface Feature {
  title: string;
  description: string;
  image: string;
}

function SecurityBot() {
  const { t } = useTranslation();

  const features = React.useMemo<Feature[]>(
    () => [
      {
        title: "Мультичейн-мониторинг",
        description: "Единая панель для кошельков в сетях EVM, Solana и Tron",
        image: "multichain_monitoring.png",
      },
      {
        title: "Кастомизируемые оповещения",
        description:
          "Настройте триггеры под свои нужды: крупные суммы (>$10k), подозрительные адреса, высокая частота транзакций (>2 tx/min)",
        image: "custom_decisions.png",
      },
      {
        title: "Мгновенные уведомления",
        description:
          "Получайте алерты в любимом мессенджере (Telegram, Slack) или по email",
        image: "fast_alerts.png",
      },
    ],
    []
  );

  return (
    <Container>
      <div className="grid sm:grid-cols-[2fr_1fr_1fr] justify-stretch gap-3">
        <span className="text-5xl max-sm:text-4xl font-semibold">
          <span className="text-[#2F7FAA]">SecurityBOT</span>
          <span> — {t("securityBot.meaning")}</span>
        </span>
        <span className="text-black/50 text-sm">
          {t("securityBot.features")}
        </span>
        <span className="flex gap-3 items-end justify-end">
          <button>
            <img src="/icons/arrow_left.svg" alt="arrow left" />
          </button>
          <button>
            <img src="/icons/arrow_right.svg" alt="arrow left" />
          </button>
        </span>
      </div>
      <div className="grid sm:grid-cols-[1.3fr_1fr_1fr]  gap-3">
        {features.map((feature, index: number) => (
          <div className="space-y-3" key={index}>
            <div>
              <img
                src={`/images/${feature.image}`}
                className="w-full h-auto object-cover aspect-square rounded-2xl"
                alt={feature.title}
              />
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-xl">{feature.title}</h3>
              <h5 className="text-black/50">{feature.description}</h5>
            </div>
          </div>
        ))}
      </div>

      <Button className="w-full">{t("buttons.getPersonalAudit")}</Button>
    </Container>
  );
}

export default SecurityBot;
