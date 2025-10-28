import React from "react";
import Container from "../ui/Container";
import cn from "../../utils/classNames";
import {useTranslation} from "react-i18next";

interface Block {
  image: string;
  title: string;
}

function HowIsItWorking() {
  const { t } = useTranslation();

  const blocks = React.useMemo(
    () => t("howIsItWorking.blocks", { returnObjects: true }) as Block[],
    [t]
  );

  return (
    <Container id="how_is_it_working">
      <header className="text-4xl text-center font-semibold">
        <span className="text-[#2F7FAA] italic">{t("howIsItWorking.how")}</span>{" "}
        <span>{t("howIsItWorking.isItWorking")}</span>
      </header>

      <main className="flex gap-2 sm:justify-center overflow-auto">
        {blocks.map((block, index) => (
          <div className="flex h-full" key={index}>
            <div
              className={cn(
                (index + 1) % 2 === 0 ? "mt-10" : "mb-10",
                "flex flex-col items-center gap-3"
              )}
            >
              <div
                className={cn(
                  (index + 1) % 2 === 0
                    ? "border-[#2F7FAA]"
                    : "border-[#58CAA4]",
                  "border-2 border-dashed p-0.5 rounded-full"
                )}
              >
                <div
                  className={cn(
                    (index + 1) % 2 === 0
                      ? "bg-[#2F7FAA] border-[#2F7FAA]"
                      : "bg-[#58CAA4] border-[#58CAA4]",
                    "border-dashed border-2 font-semibold rounded-full text-xl text-center w-[100px] h-[33px] flex items-center justify-center text-white p-2"
                  )}
                >
                  0{index + 1}
                </div>
              </div>

              <div className="w-[172px] space-y-3 text-center font-bold">
                <div
                  className={cn(
                    (index + 1) % 2 === 0 ? "bg-[#DAECF6]" : "bg-[#DCF1EB]",
                    "p-0.5 rounded-2xl flex justify-center px-10 h-[120px]"
                  )}
                >
                  <img
                    src={`/images/HowIsItWorking/${block.image}`}
                    alt={block.image}
                    className="object-contain"
                  />
                </div>

                <div>{block.title}</div>
              </div>
            </div>
            {index !== blocks.length - 1 && (
              <div className="mt-[100px]">
                <img
                  src={
                    (index + 1) % 2 === 0
                      ? "/icons/blue_arrow.svg"
                      : "/icons/green_arrow.svg"
                  }
                  alt="arrow"
                />
              </div>
            )}
          </div>
        ))}
      </main>
    </Container>
  );
}

export default HowIsItWorking;
