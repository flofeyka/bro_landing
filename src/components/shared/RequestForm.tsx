import Container from "../ui/Container";

function RequestForm() {
  return (
    <Container className="bg-[#2F7FAA] py-10 px-5">
      <div>
        <div className="text-white text-5xl font-semibold">Оставьте заявку</div>
      </div>

      <div className="flex flex-col gap-3">
        <input
          className="border-0 border-b outline-0 placeholder:text-white text-white"
          placeholder="* Имя"
        />
        <input
          className="border-0 border-b outline-0 placeholder:text-white text-white"
          placeholder="* Имя"
        />
        <input
          className="border-0 border-b outline-0 placeholder:text-white text-white"
          placeholder="* Имя"
        />

        <div>Как с вами связаться</div>
      </div>
    </Container>
  );
}

export default RequestForm;
