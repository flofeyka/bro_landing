import {Navigate, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";
import Sidebar from "./components/shared/Admin/Sidebar.tsx";
import TextManagement from "./pages/Admin/TextManagement.tsx";
import ServiceCatalogManagement from "./pages/Admin/ServiceCatalogManagement.tsx";

function App() {
    return (<Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/admin" element={<Sidebar/>}>
            <Route path="/admin/text" element={<TextManagement/>}/>
            <Route path="/admin/service" element={<ServiceCatalogManagement/>}/>
            <Route path="/admin" element={<Navigate to={'/admin/text'}/>}/>
            <Route path="/admin/*" element={<Navigate to={'/admin/text'}/>}/>
        </Route>
    </Routes>);
}

export default App;
