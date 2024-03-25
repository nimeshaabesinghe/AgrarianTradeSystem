import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import LandingPage from "./user/LandingPage";
import BuyerDashboard from "./buyer/layout/BuyerDashboard";
import CourierDashboard from "./courier/layout/CourierDashboard";
import ProductList from "./user/pages/ProductList";
import Login from "./user/auth/Login";
import CreateAccount from "./user/auth/CreateAccount";
import FarmerCreateAccount from "./user/auth/FarmerCreateAccount";
import CourierCreateAccount from "./user/auth/CourierCreateAccount";
import ProductDetails from "./user/pages/ProductDetails";
import PageNotFound from "./user/pages/PageNotFound";
import ShoppingCart from "./user/pages/ShoppingCart";

function App() {
  return (
    <>
     <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      
    </Routes> 

    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<PageNotFound/>} />
      <Route path="/buyers/*" element={<BuyerDashboard/>}/>
      <Route path="/couriers/*" element={<CourierDashboard/>}/>
      <Route path="/products" element={<ProductList/>}/>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/create" element={<CreateAccount/>}/>
      <Route path="/farmercreate" element={<FarmerCreateAccount/>}/>
      <Route path="/couriercreate" element={<CourierCreateAccount/>}/>
      <Route path='/product-details/:id' element={<ProductDetails/>}></Route>
      <Route path="/cart" element={<ShoppingCart/>}/>
    </Routes>
    
    

    
    </>
  );
}

export default App;
