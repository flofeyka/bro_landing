import { useTranslation } from "react-i18next";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Input from "../ui/Input";
import { RadioGroup, RadioItem } from "../ui/Radio";
import { Checkbox } from "../ui/Checkbox";
import { useSendRequestMutation } from "../../lib/api/appApi";
import { useForm } from "react-hook-form";
import React from "react";
import { toast } from "react-toastify";

interface Form {
  fullName: string;
  email: string;
  message: string;
  communicationValue: string;
}

function RequestForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();
  const [communicationWay, setCommunicationWay] = React.useState<
    "WHATSAPP" | "TELEGRAM"
  >("TELEGRAM");
  const [checked, setChecked] = React.useState<boolean>(false);

  const [sendRequest, { isLoading }] = useSendRequestMutation();

  const onSubmit = React.useCallback(
    async (data: Form) => {
      try {
        if (!communicationWay) {
          toast('Поле "Как с вами связаться" является обязательным', {
            type: "error",
          });
          return;
        }

        await sendRequest({ ...data, communicationWay }).unwrap();
        toast(
          "Спасибо, ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.",
          { type: "success" }
        );
      } catch (e) {
        const message = (e as { message: string }).message;
        toast(message, { type: "error" });
      }
    },
    [communicationWay]
  );

  React.useEffect(() => {
    if (errors.email) {
      toast(errors.email.message, { type: "error" });
    }
    if (errors.fullName) {
      toast(errors.fullName.message, { type: "error" });
    }
  }, [errors]);

  const { t } = useTranslation();

  return (
    <Container className="bg-[#2F7FAA] text-white py-10 px-5 grid sm:grid-cols-2 gap-10">
      <div id={"request"} className="space-y-10">
        <div>
          <div className="text-5xl font-semibold">{t("request.title")}</div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <Input
            {...register("fullName", {
              required: `${t("request.fullName")} ${t(
                "request.isRequiredField"
              )}`,
            })}
            variant="flat"
            required
            placeholder={t("request.fullName")}
          />
          <Input
            {...register("email", {
              required: `E-mail ${t("request.isRequiredField")}`,
            })}
            type="email"
            variant="flat"
            required
            placeholder="E-mail"
          />
          <Input
            {...register("message")}
            variant="flat"
            placeholder={t("request.message")}
          />

          <div className="space-y-3">
            <div className="text-lg">{t("request.communicationWay")}</div>
            <RadioGroup
              onChange={(val) =>
                setCommunicationWay(val as "TELEGRAM" | "WHATSAPP")
              }
              defaultValue={communicationWay}
            >
              <RadioItem value="TELEGRAM" label="Telegram" />
              <RadioItem value="WHATSAPP" label="WhatsApp" />
            </RadioGroup>
            <Input
              {...register("communicationValue")}
              variant="flat"
              placeholder={t("request.communicationValue")}
            />
          </div>

          <Button type="submit" variant="flat" disabled={isLoading || !checked}>
            {isLoading ? "Загрузка..." : t("buttons.getPersonalAudit")}
          </Button>

          <Checkbox checked={checked} onChange={setChecked}>
            {t("request.iAgree")}{" "}
            <a className="border-b border-white/80">
              {t("request.personalData")}
            </a>
          </Checkbox>
        </form>
      </div>
      <div className="space-y-5">
        <img
          src="/images/Request/request-image.jpg"
          className="rounded-xl"
          alt="request"
        />
        <div className="flex justify-between">
          <img src="/icons/facebook.svg" alt="facebook" />
          <img src="/icons/instagram.svg" alt="facebook" />
          <img src="/icons/telegram.svg" alt="facebook" />
          <img src="/icons/discord.svg" alt="facebook" />
        </div>
      </div>
    </Container>
  );
}

export default RequestForm;
