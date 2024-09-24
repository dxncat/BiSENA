import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Unauthorize from "./pages/UnAuthorize";
import Login from "./pages/Login";
import DashBoard from "./pages/DashBoard";
import ListadoBicicletas from "./pages/ListadoBicicletas";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <NavBar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/unauthorize" element={<Unauthorize />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/listado-bicicletas" element={<ListadoBicicletas />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;