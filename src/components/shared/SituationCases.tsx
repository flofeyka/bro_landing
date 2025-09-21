import React from "react";
import Container from "../ui/Container";
import { useTranslation } from "react-i18next";

interface Case {
  id: number;
  title: string;
  image: string;
  context: string[];
  processing: string[];
  result: string[];
}

function SituationCases() {
  const { t } = useTranslation();
  const [selectedCase, setSelectedCase] = React.useState<number | null>(null);

  const cases = React.useMemo<Case[]>(
    () => t("situation_cases.cases", { returnObjects: true }) as Case[],
    [t]
  );

  const handleSelectCase = React.useCallback(
    (id: number) => {
      setSelectedCase((prev) => (prev !== id ? id : null));
    },
    [selectedCase, cases]
  );

  return (
    <Container>
      <header>
        <h1>
          <span className="text-[#2F7FAA]">{t("situation_cases.case")}</span>-
          <span>{t("situation_cases.situation")}</span>
        </h1>
      </header>

      <main>
        {cases.map((item, index) => (
          <div>
            <header
              onClick={() => handleSelectCase(item.id)}
              className="border-t-2 font-bold text-xl cursor-pointer border-[#2F7FAA] flex justify-between border-dashed p-3"
            >
              <span>0{index + 1}</span>
              <span>{item.title}</span>
              <button>
                {selectedCase && selectedCase === item.id ? (
                  <img src="/icons/arrow_up.svg" alt="arrow" />
                ) : (
                  <img src="/icons/arrow_bottom.svg" alt="arrow" />
                )}
              </button>
            </header>

            {selectedCase && selectedCase === item.id && (
              <div className="grid grid-cols-[1fr_3fr] gap-3 w-full">
                <img
                  src={`/images/Cases/${item.image}`}
                  alt={item.title}
                  className="rounded-2xl object-cover"
                />

                <div>
                  <div className="grid grid-cols-[1fr_2fr] border-b-2 border-[#2F7FAA] border-dashed py-3">
                    <span className="text-[#2F7FAA] text-xl font-semibold">
                      {t("situation_cases.context")}
                    </span>
                    <ul>
                      {item.context.map((contextItem, index) => (
                        <li className="flex items-center gap-2" key={index}>
                          <span>
                            <img src="/icons/square_dot.svg" alt="square dot" />
                          </span>
                          <span>{contextItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-[1fr_2fr]  border-b-2 border-[#2F7FAA] border-dashed py-3">
                    <span className="text-[#2F7FAA] text-xl font-semibold">
                      {t("situation_cases.actions")}
                    </span>
                    <ul>
                      {item.processing.map((action, index) => (
                        <li className="flex items-center gap-2" key={index}>
                          <span>
                            <img src="/icons/square_dot.svg" alt="square dot" />
                          </span>
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-[1fr_2fr] py-3">
                    <span className="text-[#2F7FAA] text-xl font-semibold">
                      {t("situation_cases.result")}
                    </span>
                    <ul>
                      {item.result.map((resultItem, index) => (
                        <li className="flex items-center gap-2" key={index}>
                          <span>
                            <img src="/icons/square_dot.svg" alt="square dot" />
                          </span>
                          <span>{resultItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </main>
    </Container>
  );
}

export default SituationCases;
