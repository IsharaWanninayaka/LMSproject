import React from 'react';
import Footer from './Footer';
import holi1 from "../../images/Holi 1.png";
import holi2 from "../../images/Holi 2.png";
//react icons
//import { AiFillYoutube } from "react-icons/ai";
//import { CgFacebook } from "react-icons/cg";
//import { IoLogoWhatsapp } from "react-icons/io";
//import { MdAddCall } from "react-icons/md";

export default function Contact() {
  return (
    <div className="wrapper">
      <div className='w-full bg-[rgb(25,31,92)] h-[69px] flex flex-row'>
        <div className='float-left basis-1/5'>
            <img className='mt-4' src={holi1} alt=''/>
        </div>

        <div className='basis-3/5'>
          <p className='mt-[7.59px] text-center text-white text-[20px] font-bold font-montserat'>CONTACT US</p>
          <p className='mt-[1px] text-center text-white text-[14px] font-light '>GET IN TOUCH EASILY</p>
        </div>

        <div className=' basis-1/5'>
          <img className='float-right' src={holi2} alt=''/>
        </div>
      </div>




      <div>

      </div>
      
        {/*<div className=''>
            <MdAddCall size={30}/>
            <AiFillYoutube size={30}  className='icon-tag'/>
            <CgFacebook size={30}  className='icon-tag'/>
            <IoLogoWhatsapp size={30}  className='icon-tag'/>
          </div>*/}

       
        <div className='bottom-headder'><Footer/></div>
    </div>
  )
}
