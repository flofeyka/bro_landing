import React from "react";
import Container from "../ui/Container";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "motion/react";

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

  const handleSelectCase = React.useCallback((id: number) => {
    setSelectedCase((prev) => (prev !== id ? id : null));
  }, []);

  return (
    <Container id="cases">
      <header className={"text-3xl font-semibold"}>
        <span className="text-[#2F7FAA]">{t("situation_cases.case")}</span>-
        <span>{t("situation_cases.situation")}</span>
      </header>

      <main>
        <motion.ul className="border-b-2 border-dashed border-[#2F7FAA] py-2 w-full">
          {cases.map((item, index) => (
            <motion.li key={index} layout>
              <header
                onClick={() => handleSelectCase(item.id)}
                className="border-t-2 font-bold sm:text-xl gap-3 cursor-pointer border-[#2F7FAA] w-full flex justify-between border-dashed p-3"
              >
                <span>0{index + 1}</span>
                <span>{item.title}</span>

                {/* Плавное вращение стрелки */}
                <motion.button
                  animate={{ rotate: selectedCase === item.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    className="w-[25px] h-[25px]"
                    src="/icons/arrow_bottom.svg"
                    alt="arrow"
                  />
                </motion.button>
              </header>

              {/* Плавное открывание контента */}
              <AnimatePresence initial={false}>
                {selectedCase === item.id && (
                  <motion.div
                    key={item.id}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="grid sm:grid-cols-[1fr_3fr] gap-3 w-full pb-3">
                      <img
                        src={`/images/Cases/${item.image}`}
                        alt={item.title}
                        className="rounded-2xl object-cover max-sm:w-full"
                      />

                      <div>
                        <div className="grid sm:grid-cols-[1fr_2fr] max-sm:space-y-3 border-b-2 border-[#2F7FAA] border-dashed py-3">
                          <span className="text-[#2F7FAA] text-xl font-semibold">
                            {t("situation_cases.context")}
                          </span>
                          <ul>
                            {item.context.map((contextItem, index) => (
                              <li
                                className="flex items-center gap-2 w-full"
                                key={index}
                              >
                                <img
                                  src="/icons/square_dot.svg"
                                  className="max-w-[25px] max-h-[25px]"
                                  alt="square dot"
                                />
                                <span>{contextItem}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="grid sm:grid-cols-[1fr_2fr] max-sm:space-y-3 border-b-2 border-[#2F7FAA] border-dashed py-3">
                          <span className="text-[#2F7FAA] text-xl font-semibold">
                            {t("situation_cases.actions")}
                          </span>
                          <ul>
                            {item.processing.map((action, index) => (
                              <li
                                className="flex items-center gap-2"
                                key={index}
                              >
                                <img
                                  src="/icons/square_dot.svg"
                                  alt="square dot"
                                  className="max-w-[25px] max-h-[25px]"
                                />
                                <span>{action}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="grid sm:grid-cols-[1fr_2fr] max-sm:space-y-3 py-3">
                          <span className="text-[#2F7FAA] text-xl font-semibold">
                            {t("situation_cases.result")}
                          </span>
                          <ul>
                            {item.result.map((resultItem, index) => (
                              <li
                                className="flex items-center gap-2"
                                key={index}
                              >
                                <img
                                  src="/icons/square_dot.svg"
                                  alt="square dot"
                                  className="max-w-[25px] max-h-[25px]"
                                />
                                <span>{resultItem}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </motion.ul>
      </main>
    </Container>
  );
}

export default SituationCases;
