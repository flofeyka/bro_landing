import Header from "./components/shared/Header.tsx";
import Hero from "./components/shared/Hero.tsx";
import CompaniesList from "./components/shared/CompaniesList.tsx";
import Problems from "./components/shared/Problems.tsx";
import BlockchainAnalytics from "./components/shared/BlockchainAnalytics.tsx";
import SecurityBot from "./components/shared/SecurityBot.tsx";
import Criminalistics from "./components/shared/Criminalistics.tsx";
import InfrastructureAudit from "./components/shared/InfrastructureAudit.tsx";
import HowIsItWorking from "./components/shared/HowIsItWorking.tsx";
import ServiceCatalog from "./components/shared/ServiceCatalog.tsx";
import SituationCases from "./components/shared/SituationCases.tsx";

function App() {
  return (
    <div className={"p-5 font-[Inter] space-y-10"}>
      <Header />
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
    </div>
  );
}

export default App;
