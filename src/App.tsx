import Header from "./components/shared/Header.tsx";
import Hero from "./components/shared/Hero.tsx";
import CompaniesList from "./components/shared/CompaniesList.tsx";
import Problems from "./components/shared/Problems.tsx";

function App() {
    return <div className={'p-5 font-[Inter] space-y-10'}>
        <Header/>
        <Hero/>
        <CompaniesList/>
        <Problems/>
    </div>;
}


export default App
