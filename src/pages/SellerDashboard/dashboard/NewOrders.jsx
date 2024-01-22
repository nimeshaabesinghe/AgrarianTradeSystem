import React from 'react'
import NewOrdersTab from './components/NewOrdersTab';


export function NewOrders() {
  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
      </div>
      <NewOrdersTab/>
    </div>
  );
}

export default NewOrders;