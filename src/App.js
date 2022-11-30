import logo from "./logo.svg";
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'

import Bet from "./pages/bet/Bet";
import TotalIn from "./pages/Report/TotalIn";
import Navigation from "./components/navigation/Navigation";
import Setting from "./pages/Setting/Setting";
import Report from "./pages/reports/Report";
import SarMal from "./pages/sarmalyawmal/SarMal";


function App() {

  const routes = <Routes>
    <Route path="/*" element={<Navigate to="/game" replace />} />
    <Route path="/game" element={<Bet />} />
    <Route path="/lager" element={<TotalIn />} />
    <Route path="/setting" element={<Setting />} />
    <Route path="/report" element={<Report />} />
    <Route path="/sarmal_yawmal" element={<SarMal />} />
  </Routes>

  return (
    <BrowserRouter>
    <div className="bg-white">
      <Navigation />
      <div className="h-screen p-2">
        
       {routes}
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
