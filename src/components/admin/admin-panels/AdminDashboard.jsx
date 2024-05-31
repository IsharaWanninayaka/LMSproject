import React from 'react'
import HeaderBar from '../admin-components/navigateBar/HeaderBar';
import { Link } from 'react-router-dom';


function AdminDashboard() {
  return (
    <div>
         <HeaderBar/>

         <div>
          <Link to="/adminlogin/admindashboard/basicdetails">
            <div className=' w-[1060PX] h-[48px] rounded-[11px] bg-[rgb(25,31,92)] m-auto mt-10 '>
                <p className=' text-[32px] text-white text-center font-montserat font-bold hover:text-[#f8fc10]'>LOAD DATA</p>
            </div>
          </Link>
          

         </div>
         
    </div>
  )
}

export default AdminDashboard