import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { MyProducts, MyOrders, NewOrders, MyReviews, MyReturns, Profile } from "@/pages/SellerDashboard/dashboard";
import OrderDetails from '@/pages/SellerDashboard/dashboard/components/OrderDetails';
import ProductForm from '@/pages/SellerDashboard/dashboard/forms/ProductForm';

const Routing = () => {
  return (
    <>
    <Routes>
        <Route path='/my-products' element={<MyProducts />}></Route> 
        
        <Route path='/new-orders' element={<NewOrders />}>  </Route>

        <Route path='/my-orders' element={<MyOrders />}>  </Route>

        <Route path='/my-reviews' element={<MyReviews />}>  </Route>

        <Route path='/my-returns' element={<MyReturns />}>  </Route>

        <Route path='/add-products' element={<ProductForm/>}>  </Route>

        <Route path='my-orders/:orderReference' element={<OrderDetails/>}></Route>

        </Routes>
    </>
  )
}

export default Routing