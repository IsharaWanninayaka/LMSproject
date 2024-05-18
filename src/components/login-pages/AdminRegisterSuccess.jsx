import React from 'react'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import loginlogo from '../../images/login.png';
import "../../css/style.scss";
//import loginlogo from '../../images/login.png';
import { Link } from 'react-router-dom';

function AdminRegisterSuccess() {
  return (
    <div>

    <form action=''>
      <div className='flex flex-col w-[346px] h-[380px] m-auto bg-[rgb(25,31,92)] mt-[130px] rounded-[28px]'>

        <div className=' w-[333px] h-[42px] bg-white rounded-[51px] flex flex-row mt-2 ml-[7px] '>
          <p className=' font-montserat text-[24px] m-auto font-bold text-[rgb(25,31,92)]'>ADMIN REGISTER</p>
        </div>

        <div className=' w-[275.31px] h-[49.33 flex flex-row ml-[30px] mt-[25px]'>
          <div className=' w-[57.29px] h-[49.33px] bg-white rounded-l-[38px] float-left '>
            <div className='ml-[10px] mt-[5px] '><FaUserCircle size={40} color="#191F5C"/></div>
            <span className=" text-[8px] absolute pb-[20px] ml-[-132px] mt-5 text-red-500"></span>
          </div>
          <div className=''>
            <input type='email' name='admin-email' placeholder='Full Name' className='w-[211.66px] h-[49.33px] ml-2 rounded-r-[38px] placeholder-[rgb(25,31,92)]'></input>
          </div>
        </div>

        <div className=' w-[275.31px] h-[49.33 flex flex-row ml-[30px] mt-[10px]'>
          <div className=' w-[57.29px] h-[49.33px] bg-white rounded-l-[38px] float-left '>
            <div className='ml-[10px] mt-[5px] '><MdPhoneIphone size={40} color="#191F5C"/></div>
            <span className=" text-[8px] absolute pb-[20px] ml-[-132px] mt-5 text-red-500"></span>
          </div>
          <div className=''>
            <input type='email' name='admin-email' placeholder='Phone Number' className='w-[211.66px] h-[49.33px] ml-2 rounded-r-[38px] placeholder-[rgb(25,31,92)]'></input>
          </div>
        </div>

        <div className=' w-[275.31px] h-[49.33 flex flex-row ml-[30px] mt-[10px]'>
          <div className=' w-[57.29px] h-[49.33px] bg-white rounded-l-[38px] float-left '>
            <div className='ml-[10px] mt-[5px] '><MdEmail size={40} color="#191F5C"/></div>
            <span className=" text-[8px] absolute pb-[20px] ml-[-132px] mt-5 text-red-500"></span>
          </div>
          <div className=''>
            <input type='email' name='admin-email' placeholder='Enter Your Email Address' className='w-[211.66px] h-[49.33px] ml-2 rounded-r-[38px] placeholder-[rgb(25,31,92)]'></input>
          </div>
        </div>

        <div className=' w-[275.31px] h-[49.33 flex flex-row ml-[30px] mt-[10px]'>
          <div className=' w-[57.29px] h-[49.33px] bg-white rounded-l-[38px] float-left '>
            <div className='ml-[10px] mt-[5px] '><RiLockPasswordFill size={40} color="#191F5C"/></div>
            <span className=" text-[8px] absolute pb-[20px] ml-[-132px] mt-5 text-red-500"></span>
          </div>
          <div className=''>
            <input type='password' name='admin-email' placeholder='Enter Your Password' className='w-[211.66px] h-[49.33px] ml-2 rounded-r-[38px] placeholder-[rgb(25,31,92)]'></input>
          </div>
        </div>

        <div>
            <div className=' w-[233px] h-[29px] bg-[#00CE21] m-auto mt-6 rounded-[79px]'>
                <p className='font-semibold text-center font-montserat text-[#191F5C] pt-[2px]'>Successfull</p>
            </div>
        </div>


        <Link to='/adminlogin'>
          <div className="m-auto w-[128px] h-[45.18px]  ml-[90px]">
              <button  type="submit" name="submit" className=" w-[164px] h-[48px] bg-[rgb(25,31,92)] mt-20 rounded-full flex ">
                  <img src={loginlogo} alt="" className="w-[44px] h-[44px] mt-[2px] ml-[2px]"/>
                  <p className="text-white font-montserat text-[20px] font-bold mt-[9.4px] ml-0.5">REGISTER</p>
              </button>
          </div>
          </Link>
    

      </div>
    </form>

  </div>
   
  )
}

export default AdminRegisterSuccess