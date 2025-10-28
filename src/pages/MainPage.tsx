import BlockchainAnalytics from "../components/shared/BlockchainAnalytics";
import CompaniesList from "../components/shared/CompaniesList";
import Criminalistics from "../components/shared/Criminalistics";
import FAQ from "../components/shared/FAQ";
import Header from "../components/shared/Header";
import HeroSection from "../components/shared/Hero";
import HowIsItWorking from "../components/shared/HowIsItWorking";
import InfrastructureAudit from "../components/shared/InfrastructureAudit";
import Problems from "../components/shared/Problems";
import RequestForm from "../components/shared/RequestForm";
import SecurityBot from "../components/shared/SecurityBot";
import ServiceCatalog from "../components/shared/ServiceCatalog";
import SituationCases from "../components/shared/SituationCases";
import WhyUs from "../components/shared/WhyUs";

function MainPage() {
  return (
    <>
      <Header />
      <div className={"p-5 px-[75px] max-sm:px-5 font-[Inter] space-y-40"}>
        <HeroSection />
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
    </>
  );
}

export default MainPage;
