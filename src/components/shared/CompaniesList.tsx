import Marquee from "../ui/Marquee/Marquee.tsx";
import * as React from "react";

function CompaniesList() {
  const companies = React.useMemo<string[]>(
    () => [
      "adgm.png",
      "fireblocks.png",
      "bny.png",
      "bbva.png",
      "tether.png",
      "kraken.png",
      "cryptodotcom.png",
      "coinbase.png",
    ],
    []
  );

  return (
    <Marquee>
      <div className={"p-5 flex gap-3"}>
        {companies.map((companyImage: string, i: number) => (
          <span
            key={i}
            className={
              "rounded-xl shadow-md w-[300px] h-[144px] flex flex-col items-center gap-3"
            }
          >
            <div className={"absolute"}>({i + 1})</div>
            <div className={"h-full flex items-center"}>
              <img src={`/images/${companyImage}`} alt={"adgm"} />
            </div>
          </span>
        ))}
      </div>
    </Marquee>
  );
}

export default CompaniesList;
