import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
// import Unauthorized from "./pages/UnAuthorized";
import Login from "./pages/Login";

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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;