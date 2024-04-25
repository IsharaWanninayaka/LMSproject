import React from 'react';
import Footer from './Footer';
import holi1 from "../../images/Holi 1.png";
import holi2 from "../../images/Holi 2.png";
import genzeictlogo from '../../images/genZictclass LOGO.png';
//react icons
import { AiFillYoutube } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdAddCall } from "react-icons/md";

export default function Contact() {
  return (
    <div className="wrapper">
      <div className='w-full bg-[rgb(25,31,92)] h-[69px] flex flex-row'>
        <div className='float-left basis-1/5'>
            <img className='mt-4' src={holi1} alt=''/>
        </div>

        <div className='basis-3/5'>
          <p className='mt-[7.59px] text-center text-white text-[20px] font-bold font-montserat'>CONTACT US</p>
          <p className='mt-[1px] text-center text-white text-[14px] font-light font-montserat'>GET IN TOUCH EASILY</p>
        </div>

        <div className=' basis-1/5'>
          <img className='float-right' src={holi2} alt=''/>
        </div>
      </div>

    <div className='w-[265px] h-[43px] bg-[rgb(25,31,92)] flex flex-row m-auto rounded-full mt-[29px]'>
      <div className='w-[37px] h-[37px]  bg-white rounded-full m-[3px]'>
          <div className='w-[24px] h-[24px]  mx-[5px] my-[7px]'><MdAddCall size={24} color='rgb(25,31,92'/></div>
      </div>
      <div className='w-[213px] h-[37px]'>
          <p className='text-white font-bold text-[30px]'>074 030 76 71</p>
      </div>
    </div>

    <div className='w-[257px] h-[48px] bg-[rgb(25,31,92)] flex flex-row m-auto rounded-[40px] mt-[15px] justify-between '>
      <div className='w-[42px] h-[42px]  bg-white rounded-full ml-[47px] mt-[3px]'>
        <div className='w-[33.72px] h-[33.72px]  mx-[5px] my-[7px]'><AiFillYoutube size={30} color='rgb(25,31,92' className='icon-tag'/></div>
      </div>
      <div className='w-[42px] h-[42px]  bg-white rounded-full mt-[3px]'>
        <div className='w-[33.72px] h-[33.72px]  mx-[5px] my-[7px] '><CgFacebook size={30} color='rgb(25,31,92' className='icon-tag'/></div>
      </div>
      <div className='w-[42px] h-[42px]  bg-white rounded-full mr-[47px] mt-[3px]'>
        <div className='w-[33.72px] h-[33.72px]  mx-[5px] my-[7px]'><IoLogoWhatsapp size={30} color='rgb(25,31,92' className='icon-tag'/></div>
      </div>
    </div>

    <div className='m-auto w-[216px] h-[216px] mt-[26px]'>
      <img src={genzeictlogo} alt='genzeictlogo' />
    </div>
      

        <div className='bottom-headder'><Footer/></div>
    </div>
  )
}
