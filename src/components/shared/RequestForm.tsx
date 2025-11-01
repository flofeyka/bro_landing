import {useTranslation} from "react-i18next";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Input from "../ui/Input";
import {RadioGroup, RadioItem} from "../ui/Radio";
import {Checkbox} from "../ui/Checkbox";

function RequestForm() {
  const { t } = useTranslation();
  return (
    <Container className="bg-[#2F7FAA] text-white py-10 px-5 grid sm:grid-cols-2 gap-10">
      <div id={'request'} className="space-y-10">
        <div>
          <div className="text-5xl font-semibold">Оставьте заявку</div>
        </div>

        <div className="flex flex-col gap-5">
          <Input variant="flat" required placeholder="Имя" />
          <Input variant="flat" required placeholder="E-mail" />
          <Input variant="flat" placeholder="Сообщение" />

          <div className="space-y-3">
            <div className="text-lg">Как с вами связаться:</div>
            <RadioGroup defaultValue="telegram">
              <RadioItem value="telegram" label="Telegram" />
              <RadioItem value="whatsapp" label="WhatsApp" />
            </RadioGroup>
            <Input variant="flat" placeholder="Иные каналы коммуникации" />
          </div>


          <Button variant="flat">{t("buttons.getPersonalAudit")}</Button>


          <Checkbox>
            Я согласен на обработку{" "}
            <a className="border-b border-white/80">Персональных данных</a>
          </Checkbox>
        </div>
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
