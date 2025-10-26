import {Navigate, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";
import Sidebar from "./components/shared/Sidebar.tsx";
import TextManagement from "./pages/TextManagement.tsx";

function App() {
    return (<Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/admin" element={<Sidebar/>}>
            <Route path="/admin/text" element={<TextManagement/>}/>
            <Route path="*" element={<Navigate to={'/admin/text'}/>}/>
        </Route>
    </Routes>);
}

export default App;
