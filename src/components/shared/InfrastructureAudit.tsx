import {useTranslation} from "react-i18next";
import Container from "../ui/Container";
import Button from "../ui/Button";

function InfrastructureAudit() {
  const { t } = useTranslation();

  return (
    <Container>
      <header className="grid sm:grid-cols-[2.5fr_1.5fr_1fr]">
        <span className="text-5xl max-sm:text-3xl font-semibold">
          <div className="bg-gradient-to-r sm:h-[50px] from-[#2F7FAA] to-[#58CAA4] bg-clip-text text-transparent">
            {t("infrastructure_audit.title")}
          </div>
          <div>{t("infrastructure_audit.subtitle")}</div>
        </span>
        <span className="text-black/60 sm:text-sm">
          {t("infrastructure_audit.description")}
        </span>
      </header>

      <main className="grid sm:grid-cols-4 gap-3 auto-rows-min">
        <div className="bg-[#2F7FAA] h-[222px] rounded-2xl p-3 font-semibold text-white sm:col-start-1 sm:row-start-1">
          <div className="text-xl font-bold">
            {t("infrastructure_audit.blocks.01.title")}
          </div>
          <div className="h-full flex flex-col justify-center gap-3">
            {(
              t("infrastructure_audit.blocks.01.lines", {
                returnObjects: true,
              }) as string[]
            ).map((line, idx) => (
              <div key={idx}>{line}</div>
            ))}
          </div>
        </div>

        <div className="bg-[#2F7FAA] h-[222px] rounded-2xl p-3 font-semibold text-white sm:col-start-4 sm:row-start-1">
          <div className="text-xl font-bold">
            {t("infrastructure_audit.blocks.02.title")}
          </div>
          <div className="h-full flex flex-col justify-center gap-3">
            {(
              t("infrastructure_audit.blocks.02.lines", {
                returnObjects: true,
              }) as string[]
            ).map((line, idx) => (
              <div key={idx}>{line}</div>
            ))}
          </div>
        </div>

        {/* Блок 03 */}
        <div className="bg-[#2F7FAA] h-[222px] rounded-2xl p-3 font-semibold text-white sm:col-start-2 sm:row-start-2">
          <div className="text-xl font-bold">
            {t("infrastructure_audit.blocks.03.title")}
          </div>
          <div className="h-full flex flex-col justify-center gap-3">
            {(
              t("infrastructure_audit.blocks.03.lines", {
                returnObjects: true,
              }) as string[]
            ).map((line, idx) => (
              <div key={idx}>{line}</div>
            ))}
          </div>
        </div>

        {/* Блок 04 */}
        <div className="bg-[#2F7FAA] h-[222px] rounded-2xl p-3 font-semibold text-white sm:col-start-3 sm:row-start-2">
          <div className="text-xl font-bold">
            {t("infrastructure_audit.blocks.04.title")}
          </div>
          <div className="h-full flex flex-col justify-center gap-3">
            {(
              t("infrastructure_audit.blocks.04.lines", {
                returnObjects: true,
              }) as string[]
            ).map((line, idx) => (
              <div key={idx}>{line}</div>
            ))}
          </div>
        </div>

        {/* Блок Результат */}
        <div className="bg-[#FCFBFC] h-[222px] flex flex-col justify-between border border-black rounded-2xl p-3 text-xl font-bold text-black sm:col-start-4 sm:row-start-2">
          <div>{t("infrastructure_audit.blocks.result.title")}</div>
          <div>{t("infrastructure_audit.blocks.result.text")}</div>
        </div>
      </main>

      <footer>
        <Button className="w-full">{t("buttons.getPersonalAudit")}</Button>
      </footer>
    </Container>
  );
}

export default InfrastructureAudit;
