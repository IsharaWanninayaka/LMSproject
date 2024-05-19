import React from 'react'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import loginlogo from '../../../images/login.png';
import "../../../css/style.scss";
import { Link } from 'react-router-dom';


function AdminLogin() {



  return (
    <div>

      <form action=''>
        <div className='flex flex-col w-[346px] h-[271px] m-auto bg-[rgb(25,31,92)] mt-[170px] rounded-[28px]'>

          <div className=' w-[333px] h-[42px] bg-white rounded-[51px] flex flex-row mt-2 ml-[7px] '>
            <p className=' font-montserat text-[24px] m-auto font-bold text-[rgb(25,31,92)]'>ADMIN LOGIN</p>
          </div>

          <div className=' w-[275.31px] h-[49.33 flex flex-row ml-[30px] mt-[43px]'>
            <div className=' w-[57.29px] h-[49.33px] bg-white rounded-l-[38px] float-left '>
              <div className='ml-[10px] mt-[5px] '><MdEmail size={40} color="#191F5C"/></div>
              <span className=" text-[8px] absolute pb-[20px] ml-[-132px] mt-5 text-red-500"></span>
            </div>
            <div className=''>
              <input type='email' name='admin-email' placeholder='Enter Your Email Address' className='w-[211.66px] h-[49.33px] ml-2 rounded-r-[38px] placeholder-[rgb(25,31,92)]'></input>
            </div>
          </div>

          <div className=' w-[275.31px] h-[49.33 flex flex-row ml-[30px] mt-[30px]'>
            <div className=' w-[57.29px] h-[49.33px] bg-white rounded-l-[38px] float-left '>
              <div className='ml-[10px] mt-[5px] '><RiLockPasswordFill size={40} color="#191F5C"/></div>
              <span className=" text-[8px] absolute pb-[20px] ml-[-132px] mt-5 text-red-500"></span>
            </div>
            <div className=''>
              <input type='password' name='admin-email' placeholder='Enter Your Password' className='w-[211.66px] h-[49.33px] ml-2 rounded-r-[38px] placeholder-[rgb(25,31,92)]'></input>
            </div>
          </div>
          
          <Link to='/admindashboard'>
          <div className="m-auto w-[128px] h-[45.18px] ">
              <button  type="submit" name="submit" className=" w-[128px] h-[45.18px] bg-[rgb(25,31,92)] mt-20 rounded-full flex ">
                  <img src={loginlogo} alt="" className="w-[42px] h-[42px] mt-[1px] ml-[2px]"/>
                  <p className="text-white font-montserat text-[16px] font-bold mt-[10.5px] ml-1">LOGIN</p>
              </button>
          </div>
          </Link>

        </div>
      </form>

    </div>
  )
}

export default AdminLogin