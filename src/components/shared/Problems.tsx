import {useTranslation} from "react-i18next";
import Button from "../ui/Button.tsx";
import Container from "../ui/Container.tsx";

interface Problem {
  title: string;
  description: string;
}

function Problems() {
  const { t } = useTranslation();

  const problems = t("problems.list", { returnObjects: true }) as Problem[];

  return (
    <Container>
      <div
        className="grid min-[1500px]:grid-cols-[1fr_1fr] gap-4 items-stretch"
        id="decisions"
      >
        <div>
          <img
            className="rounded-3xl object-cover max-h-[600px] w-full"
            src="/images/problems.png"
            alt="problems"
          />
        </div>
        <div className="space-y-5 h-full">
          <div className="font-semibold text-[#2F7FAA] text-5xl">
            {t("problems.title")}
          </div>

          <div className="border-b-2 grid grid-rows-3 gap-3 w-full border-dashed border-[#2F7FAA]">
            {problems.map((problem: Problem, i: number) => (
              <div
                key={i}
                className="w-full h-full relative border-t-2 border-dashed border-[#2F7FAA] flex max-sm:flex-col gap-3 justify-stretch max-sm:px-0 p-2"
              >
                <span className="font-semibold w-full text-xl">
                  {problem.title}
                </span>
                <span className="w-full text-gray-500">
                  {problem.description}
                </span>
              </div>
            ))}
          </div>

          <div>
            <Button className="w-full">{t("buttons.getPersonalAudit")}</Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Problems;
