import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../main-pages/Footer';
import holi1 from '../../../images/Holi 1.png';
import holi2 from '../../../images/Holi 2.png';



function grade10main() {
  return (
  
<div className="wrapper">
      <div className='w-full bg-[rgb(25,31,92)] h-[69px] flex flex-row'>
        <div className='float-left basis-1/5'>
            <img className='mt-4' src={holi1} alt=''/>
        </div>

        <div className='basis-3/5'>
          <p className='mt-[1px] text-center text-white text-[30px] font-bold font-montserat'> GRADE 11</p>
          <p className='mt-[-5px] text-center text-white text-[20px] font-light '>LESSONS</p>
        </div>

        <div className=' basis-1/5'>
          <img className='float-right' src={holi2} alt=''/>
        </div>
      </div>


        <div className='all-box'>

            <div class='flex flex-col gap-[1px] items-center'>

              <div className=" w-[266px] bg-[rgb(25,31,92)] h-[39px]  rounded-[39px]  mt-4 ">
                <div className='float-left w-[44px] h-[33.5px] bg-white text-[rgb(25,31,92)]  rounded-[39px]  m-[3px]  '><p className='ml-[7px] mt-[-2px] text-[24px]'>01</p></div>
                <div className='text-white '><Link to='/grade10lesson1' className=''><p className='mt-[12px] text-[9px] ml-13'>Programming - ක්‍රමලේඛනය </p></Link></div>
               
              </div>
              <div className=" w-[266px] bg-[rgb(25,31,92)] h-[39px]  rounded-[39px]  mt-4 ">
                <div className='float-left w-[44px] h-[33.5px] bg-white text-[rgb(25,31,92)]  rounded-[39px]  m-[3px]  '><p className='ml-[7px] mt-[-2px] text-[24px]'>02</p></div>
                <div className='text-white '><Link to='/grade10lesson2' className=''><p className='mt-[7px] text-[9px] ml-13'>System Development Life - පද්ධති සංවර්ධන ජීවන චක්‍රය </p></Link></div>
               
              </div>
              <div className=" w-[266px] bg-[rgb(25,31,92)] h-[39px]  rounded-[39px]  mt-4 ">
                <div className='float-left w-[44px] h-[33.5px] bg-white text-[rgb(25,31,92)]  rounded-[39px]  m-[3px]  '><p className='ml-[7px] mt-[-2px] text-[24px]'>03</p></div>
                <div className='text-white '><Link to='/grade10lesson3' className=''><p className='mt-[7px] text-[9px] ml-13'>The Internet and the Electronic - අන්තර්ජාලය සහ ඉලෙක්ට්‍රොනික තැපෑල </p></Link></div>
               
              </div>
              <div className=" w-[266px] bg-[rgb(25,31,92)] h-[39px]  rounded-[39px]  mt-4 ">
                <div className='float-left w-[44px] h-[33.5px] bg-white text-[rgb(25,31,92)]  rounded-[39px]  m-[3px]  '><p className='ml-[7px] mt-[-2px] text-[24px]'>04</p></div>
                <div className='text-white '><Link to='/grade10lesson4' className=''><p className='mt-[12px] text-[9px] ml-13'>Use of Multimedia - බහුමාධ්‍ය භාවිතය</p></Link></div>
               
              </div>
              <div className=" w-[266px] bg-[rgb(25,31,92)] h-[39px]  rounded-[39px]  mt-4 ">
                <div className='float-left w-[44px] h-[33.5px] bg-white text-[rgb(25,31,92)]  rounded-[39px]  m-[3px]  '><p className='ml-[7px] mt-[-2px] text-[24px]'>05</p></div>
                <div className='text-white '><Link to='/grade10lesson5' className=''><p className='mt-[7px] text-[9px] ml-13'>Web Designing Using Multimedia - බහුමාධ්‍ය භාවිතයෙන් වෙබ් නිර්මාණකරණය </p></Link></div>
               
              </div>
              <div className=" w-[266px] bg-[rgb(25,31,92)] h-[39px]  rounded-[39px]  mt-4 ">
                <div className='float-left w-[44px] h-[33.5px] bg-white text-[rgb(25,31,92)]  rounded-[39px]  m-[3px]  '><p className='ml-[7px] mt-[-2px] text-[24px]'>06</p></div>
                <div className='text-white '><Link to='/grade10lesson6' className=''><p className='mt-[2px] text-[9px] ml-13 leading-3'>Information and Communication Technology and Society - තොරතුරු සහ සන්නිවේදන තාක්ෂණය සහ සමාජය</p></Link></div>
              </div>
            
             
      </div>
    </div>
          <div className='bottom-headder'>
          <Footer/>
          </div>
    

    
  </div>) 
}

export default grade10main