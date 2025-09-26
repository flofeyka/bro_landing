import BlockchainAnalytics from "./components/shared/BlockchainAnalytics.tsx";
import CompaniesList from "./components/shared/CompaniesList.tsx";
import Criminalistics from "./components/shared/Criminalistics.tsx";
import FAQ from "./components/shared/FAQ.tsx";
import Header from "./components/shared/Header.tsx";
import Hero from "./components/shared/Hero.tsx";
import HowIsItWorking from "./components/shared/HowIsItWorking.tsx";
import InfrastructureAudit from "./components/shared/InfrastructureAudit.tsx";
import Problems from "./components/shared/Problems.tsx";
import RequestForm from "./components/shared/RequestForm.tsx";
import SecurityBot from "./components/shared/SecurityBot.tsx";
import ServiceCatalog from "./components/shared/ServiceCatalog.tsx";
import SituationCases from "./components/shared/SituationCases.tsx";
import WhyUs from "./components/shared/WhyUs.tsx";

function App() {
  return (
    <div>
      <Header />
      <div className={"p-5 px-[75px] font-[Inter] space-y-40"}>
        <Hero />
        <CompaniesList />
        <Problems />
        <BlockchainAnalytics />
        <SecurityBot />
        <Criminalistics />
        <CompaniesList />
        <InfrastructureAudit />
        <HowIsItWorking />
        <ServiceCatalog />
        <SituationCases />
        <WhyUs />
        <FAQ />
      </div>
      <RequestForm />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
