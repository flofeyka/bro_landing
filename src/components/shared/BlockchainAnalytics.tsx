import React from "react";
import Marquee from "../ui/Marquee/Marquee";
import {useTranslation} from "react-i18next";
import Container from "../ui/Container";

interface Item {
    src: string;
    title: string;
}

function BlockchainAnalytics() {
    const { t } = useTranslation();

    const features = React.useMemo<Item[]>(() => [
        { src: "bridge.svg", title: "Bridge" },
        { src: "dollar.svg", title: "Stolen Funds" },
        { src: "nft.svg", title: "NFT Platform" },
        { src: "market.svg", title: "Darknet Market" },
        { src: "greenery.svg", title: "ICO" },
        { src: "privacy.svg", title: "Protocol Privacy" },
    ], []);

    const problems = React.useMemo<Item[]>(() => [
        { src: "game.svg", title: "Gambling" },
        { src: "market.svg", title: "Fraud" },
        { src: "pharmacy.svg", title: "Online Pharmacy" },
        { src: "money_refuse.svg", title: "Lending" },
        { src: "judge.svg", title: "Sanctions" },
        { src: "fraud.svg", title: "Seizer Funds" },
    ], []);

    const ways = React.useMemo<Item[]>(() => [
        { src: "wallet.svg", title: "Hosted Wallet" },
        { src: "size.svg", title: "Decentralized Exchange" },
        { src: "employee.svg", title: "P2P Exchange" },
        { src: "creditcard.svg", title: "Merchant Services" },
        { src: "cloud.svg", title: "Infrastructure As A Service" },
    ], []);

    return (
        <Container>
            <header className="flex flex-col items-center text-center space-y-5">
                {/* Заголовок страницы */}
                <div className="text-6xl max-sm:text-3xl font-semibold min-[2000px]:text-7xl min-[2500px]:text-8xl">
                    <div className="bg-gradient-to-r from-[#2F7FAA] to-[#58CAA4] bg-clip-text text-transparent">
                        {t("analytics.achieve")}
                    </div>
                    <div>{t("analytics.byAnalytics")}</div>
                </div>

                <h5 className="text-black/50 min-[2000px]:text-lg min-[2500px]:text-xl">
                    {t("analytics.description")}
                </h5>
            </header>

            <main>
                <div>
                    {[features, problems, ways].map((item: Item[], index: number) => (
                        <Marquee key={index} direction={(index + 1) % 2 === 0 ? "right" : "left"}>
                            <div className="flex gap-[10px] p-3">
                                {item.map((feature, i) => (
                                    <div
                                        key={i}
                                        className="px-10 whitespace-nowrap w-full shadow-lg rounded-xl py-4 flex items-center justify-center gap-2"
                                    >
                                        <img
                                            className="h-[30px] w-[30px]"
                                            src={`/icons/${feature.src}`}
                                            alt={feature.title}
                                        />
                                        <span className="min-[2000px]:text-lg min-[2500px]:text-xl">{feature.title}</span>
                                    </div>
                                ))}
                            </div>
                        </Marquee>
                    ))}
                </div>
            </main>
        </Container>
    );
}

export default BlockchainAnalytics;
