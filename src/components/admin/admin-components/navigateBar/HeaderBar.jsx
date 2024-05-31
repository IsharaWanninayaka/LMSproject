import React from 'react'
import '../../admin-style/headerbar.css';
import SearchBox from '../SearchBox';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";


const HeaderBar = () => {

  return (
    <div className=''>
    <div className=' w-full h-[68px] bg-[rgb(25,31,92)] m-0 flex flex-row'>

        <SearchBox/>
        <Link to="/adminlogin/admindashboard/basicdetails">
        <div className=' w-[142px] h-[37px] bg-[#ffffff] rounded-[50px]  mt-[14px] ml-4 hover:bg-[#f8fc10]'>
            <p className='m-auto text-[15px] font-montserat font-bold mt-[6px] ml-[12px] w-[142px] pt-[7px] '>BASIC DETAILS</p>
        </div>
        </Link>

        <Link to="/adminlogin/admindashboard/gradesdetails">
        <div className=' w-[142px] h-[37px] bg-[#ffffff] rounded-[50px]  mt-[14px] ml-4 hover:bg-[#f8fc10]'>
            <p className='m-auto text-[15px] font-montserat font-bold mt-[6px] ml-[22px] w-[142px]  pt-[7px]'>GRADE 10/11</p>
        </div>
        </Link>

        <Link to="/adminlogin/admindashboard/revisiondetails">
        <div className=' w-[142px] h-[37px] bg-[#ffffff] rounded-[50px] mt-[14px] ml-4 hover:bg-[#f8fc10]'>
            <p className='m-auto text-[15px] font-montserat font-bold mt-[6px] ml-[30px] w-[142px] pt-[7px]'>REVISION</p>
        </div>
        </Link>

        <div className=' w-[142px] h-[37px] bg-[#ffffff] rounded-[50px] mt-[14px] ml-4 hover:bg-[#f8fc10]'>
            <p className='m-auto text-[15px] font-montserat font-bold mt-[6px] ml-[38px] w-[142px]'>ACCESS</p>
        </div>
        <div className=' w-[142px] h-[37px] bg-[#ffffff] rounded-[50px] mt-[14px] ml-4 hover:bg-[#f8fc10]'>
            <p className='m-auto text-[15px] font-montserat font-bold mt-[6px] ml-[34px] w-[142px]'>PAYMENT</p>
        </div>
        <Link to="/adminlogin/admindashboard">
        <div className='bg-[#ffffff] mt-[8px] ml-6 rounded-[50px]  w-12 h-12 hover:bg-[#f8fc10]'>
            <div className='mt-[8px] ml-[8px] pt-2'><FaHome size={30} color='#191F5C'/></div>
        </div>
        </Link>
        

        

    </div>

</div>
  )
}

export default HeaderBar