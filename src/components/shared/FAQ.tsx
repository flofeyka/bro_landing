import React from "react";
import Container from "../ui/Container";
import { useTranslation } from "react-i18next";

interface Question {
  id: number;
  title: string;
  answer: string;
}

function FAQ() {
  const { t } = useTranslation();

  const [selectedQuestion, setSelectedQuestion] = React.useState<number | null>(
    null
  );
  const questions = React.useMemo<Question[]>(
    () => t("faq.questions", { returnObjects: true }) as Question[],
    [t]
  );

  const handleSelectQuestion = React.useCallback((id: number) => {
    setSelectedQuestion((prev) => (prev !== id ? id : null));
  }, []);

  return (
    <Container className="mx-auto w-[60vw]">
      <header className="space-y-5">
        <div className="text-6xl font-semibold">
          FAQ &{" "}
          <span className="italic text-[#2F7FAA]">{t("faq.garancy")}</span>
        </div>

        <div className="text-black/50">«{t("faq.last_questions")}»</div>
      </header>

      <main>
        <ul className="border-b-2 border-[#2F7FAA] border-dashed">
          {questions.map((item, index) => (
            <li key={index}>
              <header
                onClick={() => handleSelectQuestion(item.id)}
                className="border-t-2 font-bold text-xl cursor-pointer border-[#2F7FAA] flex justify-between border-dashed py-2"
              >
                <span>{item.title}</span>
                <button>
                  {selectedQuestion === item.id ? (
                    <img src="/icons/arrow_up.svg" alt="arrow" />
                  ) : (
                    <img src="/icons/arrow_bottom.svg" alt="arrow" />
                  )}
                </button>
              </header>

              {item.id === selectedQuestion && (
                <main className="text-black/50">{item.answer}</main>
              )}
            </li>
          ))}
        </ul>
      </main>
    </Container>
  );
}

export default FAQ;
