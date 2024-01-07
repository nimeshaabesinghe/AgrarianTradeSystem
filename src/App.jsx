import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import LandingPage from "./user/LandingPage";
import AddProductForm from "./pages/SellerDashboard/dashboard/tabs/MyProduct/AddProductForm";
import BuyerDashboard from "./buyer/layout/BuyerDashboard";


function App() {
  return (
    <>
     <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      {/* <Route path="*" element={<Navigate to="/dashboard/home" replace />} /> */}
    </Routes> 

    <Routes>
      <Route path="/" element={<LandingPage />} />
       
       <Route path="buyers" element={<BuyerDashboard/>}/>
    </Routes>
    
    

    
    </>
  );
}

export default App;
