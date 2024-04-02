import React from 'react'
import { Routes,Route } from 'react-router-dom'
import MyOrders from '../pages/MyOrders'
import NewOrders from '../pages/NewOrders'
import OrderHistory from '../pages/OrderHistory'
import Profile from '../pages/auth/Profile'
import CourierOrderDetails from '../components/CourierOrderDetails'
import OrderDetail from '../components/OrderDetail'
const Routing = () => {
  return (
    <>
     <Routes>
         <Route path='/new-orders' element={<NewOrders />}/>
         <Route path='/my-orders' element={<MyOrders/>}/>
         <Route path='/order-history' element={<OrderHistory/>} />
         <Route path='/profile' element={<Profile/>} />
         <Route path='my-orders/:orderReference' element={<CourierOrderDetails/>}></Route>
         <Route path='new-orders/:id' element={<OrderDetail/>}></Route>
     </Routes>
    </>
  )
}

export default Routing