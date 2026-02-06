import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Slidebar from "./Components/Navbar";
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Welcome from './Pages/Welcome';
import CropRate from './Pages/CropRate';
import { NormalUser } from './Pages/CropAdvice';
import SellCrop from './Pages/SellCrop';
import SignUp from './Pages/SignUp';
import MandiBhav from './Pages/CropRate';
import CropDetail from './Pages/CropDetailPage';
import FarmerMarketplace from './Pages/FarmerMarketplace';
import Schemes from './Pages/scheme';
import SchemeDetail from './Pages/SchemeDetail';
import FarmerLayout from './farmer-pages/Dashboard';
import Navbar from './Pages/navbar';
import StudentDashboard from './student/Dashboard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        {/* <Slidebar /> */}
        <Navbar />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/user/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/crop-rate" element={<CropRate />} />
            <Route path="/advice" element={<NormalUser />} />
            <Route path="/sell-crop" element={<SellCrop />} />
            <Route path="/sign-up" element={<SignUp />} />
             <Route path="/crop-rate" element={<MandiBhav />} />
              <Route path="/farmer-product" element={< FarmerMarketplace />} />
        <Route path="/crop/:id" element={<CropDetail />} />
        <Route path="/schemes" element={<Schemes />} />
<Route path="/scheme/:id" element={<SchemeDetail />} />
 <Route path="/farmer/dashboard" element={<FarmerLayout />} />
 <Route path="/student/dashboard" element={<StudentDashboard  />} />

          </Routes>
          <Footer />
    </BrowserRouter>
  )
}

export default App;
