import React from 'react';
import Footer from './Footer';
import holi1 from "../../images/Holi 1.png";
import holi2 from "../../images/Holi 2.png";
import { MdAccountCircle } from "react-icons/md";


export default function Account() {

  const userName = "Devinda wanasingha";
  const contactNo = "071 53 89 697";
  const email = "isharawanninayaka@gmail.com";


  return (
    <div className="wrapper">
      <div className='w-full bg-[rgb(25,31,92)] h-[69px] flex flex-row'>
        <div className='float-left basis-1/5'>
          <img className='mt-4' src={holi1} alt='' />
        </div>

        <div className='basis-3/5'>
          <p className='mt-[7.59px] text-center text-white text-[20px] font-bold font-montserat'>YOUR ACCOUNT</p>
          <p className='mt-[1px] text-center text-white text-[14px] font-light font-montserat'>EFFORTLESS MANAGEMENT</p>
        </div>

        <div className=' basis-1/5'>
          <img className='float-right' src={holi2} alt='' />
        </div>
      </div>




      <div className='w-[266px] m-auto flex flex-raw pt-8'>
        <div className='w-[73px] h-auto'>
          <MdAccountCircle size={73} color='#191F5C'  />
        </div>
        <div className='pt-3 w-[153px] h-auto '>
          <p className='text-[14px]'>{userName}</p>
          <p className='text-[14px]'>{email}</p>
          <p className=' text-[14px]'>{contactNo}</p>
        </div>
      </div>
      <div className='w-[266px] bg-[rgb(25,31,92)] h-[41px] m-auto mt-8 flex flex-row rounded-full'>
        <div className=' h-[24px] text-white font- Montserrat font-bold  text-[20px] pt-2 pl-[48px]'>
          <p>YOUR COURSES</p>
        </div>
        
      </div>

      <div className='bottom-headder'><Footer/></div>

    </div>
  )
}
