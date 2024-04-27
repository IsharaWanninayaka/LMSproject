import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../main-pages/Footer';
import holi1 from '../../../images/Holi 1.png';
import holi2 from '../../../images/Holi 2.png';



function pastpapermain() {
  return (
  
<div className="wrapper">
      <div className='w-full bg-[rgb(25,31,92)] h-[69px] flex flex-row'>
        <div className='float-left basis-1/5'>
            <img className='mt-4' src={holi1} alt=''/>
        </div>

        <div className='basis-3/5'>
          <p className='mt-[1px] text-center text-white text-[30px] font-bold font-montserat'>PAST PAPER </p>
          <p className='mt-[-5px] text-center text-white text-[20px] font-light '>SINHALA</p>
        </div>

        <div className=' basis-1/5'>
          <img className='float-right' src={holi2} alt=''/>
        </div>
      </div>


        <div className='all-box'>

            <div class='flex flex-col gap-[1px] items-center'>

              <div className=" w-[266px] bg-[rgb(25,31,92)] h-[39px]  rounded-[39px]  mt-4 ">
                <div className='float-left w-[44px] h-[32px] bg-white text-[rgb(25,31,92)]  rounded-[39px]  m-[3px]  '><p className='ml-[7px] mt-[-2px] text-[24px]'>01</p></div>
                <div className='text-white '><Link to='/course/P2017' className=''><p className='mt-[12px] text-[9px] ml-14'> 2017 Past Paper </p></Link></div>
               
              </div>
              <div className=" w-[266px] bg-[rgb(25,31,92)] h-[39px]  rounded-[39px]  mt-4 ">
                <div className='float-left w-[44px] h-[32px] bg-white text-[rgb(25,31,92)]  rounded-[39px]  m-[3px]  '><p className='ml-[7px] mt-[-2px] text-[24px]'>02</p></div>
                <div className='text-white '><Link to='/course/P2018' className=''><p className='mt-[12px] text-[9px] ml-14'> 2018 Past Paper </p></Link></div>
               
              </div>
              <div className=" w-[266px] bg-[rgb(25,31,92)] h-[39px]  rounded-[39px]  mt-4 ">
                <div className='float-left w-[44px] h-[32px] bg-white text-[rgb(25,31,92)]  rounded-[39px]  m-[3px]  '><p className='ml-[7px] mt-[-2px] text-[24px]'>03</p></div>
                <div className='text-white '><Link to='/course/P2019' className=''><p className='mt-[12px] text-[9px] ml-14 leading-3'> 2019 Past Paper </p></Link></div>
               
              </div>
              <div className=" w-[266px] bg-[rgb(25,31,92)] h-[39px]  rounded-[39px]  mt-4 ">
                <div className='float-left w-[44px] h-[32px] bg-white text-[rgb(25,31,92)]  rounded-[39px]  m-[3px]  '><p className='ml-[7px] mt-[-2px] text-[24px]'>04</p></div>
                <div className='text-white '><Link to='/course/P2020' className=''><p className='mt-[12px] text-[9px] ml-14'> 2020 Past Paper </p></Link></div>
               
              </div>
              <div className=" w-[266px] bg-[rgb(25,31,92)] h-[39px]  rounded-[39px]  mt-4 ">
                <div className='float-left w-[44px] h-[32px] bg-white text-[rgb(25,31,92)]  rounded-[39px]  m-[3px]  '><p className='ml-[7px] mt-[-2px] text-[24px]'>05</p></div>
                <div className='text-white '><Link to='/course/P2021' className=''><p className='mt-[12px] text-[9px] ml-14'> 2021 Past Paper </p></Link></div>
               
              </div>
              <div className=" w-[266px] bg-[rgb(25,31,92)] h-[39px]  rounded-[39px]  mt-4 ">
                <div className='float-left w-[44px] h-[32px] bg-white text-[rgb(25,31,92)]  rounded-[39px]  m-[3px]  '><p className='ml-[7px] mt-[-2px] text-[24px]'>06</p></div>
                <div className='text-white '><Link to='/course/P2022' className=''><p className='mt-[12px] text-[9px] ml-14'> 2022 Past Paper </p></Link></div>
               
              </div>
              <div className=" w-[266px] bg-[rgb(25,31,92)] h-[39px]  rounded-[39px]  mt-4 ">
                <div className='float-left w-[44px] h-[32px] bg-white text-[rgb(25,31,92)]  rounded-[39px]  m-[3px]  '><p className='ml-[7px] mt-[-2px] text-[24px]'>07</p></div>
                <div className='text-white '><Link to='/course/P2023' className=''><p className='mt-[12px] text-[9px] ml-14'> 2023 Past Paper </p></Link></div>
               
              </div>
             
             
      </div>
    </div>
          <div className='bottom-headder'>
          <Footer/>
          </div>
    

    
  </div>) 
}

export default pastpapermain