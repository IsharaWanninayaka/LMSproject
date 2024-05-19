import React from 'react'
import HeaderBar from '../admin-components/navigateBar/HeaderBar';

function AdminDashboard() {
  return (
    <div>
         <HeaderBar/>

         <div>
            <div className=' w-[1060PX] h-[48px] rounded-[11px] bg-[rgb(25,31,92)] m-auto mt-10'>
                <p className=' text-[32px] text-white text-center font-montserat font-bold'>LOAD DATA</p>
            </div>

         </div>
         
    </div>
  )
}

export default AdminDashboard