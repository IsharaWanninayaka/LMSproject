import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../main-pages/Footer';
import holi1 from '../../../images/Holi 1.png';
import holi2 from '../../../images/Holi 2.png';
import axios from "axios";


export default function Grade10main() {
  const navigate = useNavigate();
  
 const get_lesson_id=()=>{

 }


  return (
  
<div className="wrapper">
      <div className='w-full bg-[rgb(25,31,92)] h-[69px] flex flex-row'>
        <div className='float-left basis-1/5'>
            <img className='mt-4' src={holi1} alt=''/>
        </div>

        <div className='basis-3/5'>
          <p className='mt-[1px] text-center text-white text-[30px] font-bold font-montserat'> GRADE 10</p>
          <p className='mt-[-5px] text-center text-white text-[20px] font-light '>THEORY</p>
        </div>

        <div className=' basis-1/5'>
          <img className='float-right' src={holi2} alt=''/>
        </div>
      </div>


        <div className='all-box'>

            <div class='flex flex-col gap-[1px] items-center'>

              <div onClick = {()=>get_lesson_id(1)}  className=" w-[266px] bg-[rgb(25,31,92)] h-[39px]  rounded-[39px]  mt-4 cursor-pointer">
                <div className='float-left w-[44px] h-[33px] bg-white text-[rgb(25,31,92)]  rounded-[39px]  m-[3px]  '><p className='ml-[7px] mt-[-2px] text-[24px]'>01</p></div>
                <div  className='text-white '><p className='mt-[7px] text-[9px] ml-14 cursor-pointer'>Information and Communication - තොරතුරු හා සන්නිවේදන තාක්ෂණය</p></div>
              </div>

              <div onClick = {()=>get_lesson_id(2)} className=" w-[266px] bg-[rgb(25,31,92)] h-[39px]  rounded-[39px]  mt-4 cursor-pointer">
                <div className='float-left w-[44px] h-[33px] bg-white text-[rgb(25,31,92)]  rounded-[39px]  m-[3px]  '><p className='ml-[7px] mt-[-2px] text-[24px]'>02</p></div>
                <div className='text-white '><p className='mt-[7px] text-[9px] ml-14 cursor-pointer'>Fundamentals of a computer system - පරිගණක පද්ධතියක මූලික කරුණු </p></div>    
              </div>

              <div onClick = {()=>get_lesson_id(3)} className=" w-[266px] bg-[rgb(25,31,92)] h-[39px]  rounded-[39px]  mt-4 cursor-pointer">
                <div className='float-left w-[44px] h-[33px] bg-white text-[rgb(25,31,92)]  rounded-[39px]  m-[3px]  '><p className='ml-[7px] mt-[-2px] text-[24px]'>03</p></div>
                <div className='text-white '><p className='mt-[4px] text-[9px] ml-14 leading-3 cursor-pointer'>Data Representation Methods in the Computer system - පරිගණක පද්ධතියේ දත්ත නියෝජන ක්‍රම</p></div>
              </div>

              <div onClick = {()=>get_lesson_id(4)} className=" w-[266px] bg-[rgb(25,31,92)] h-[39px]  rounded-[39px]  mt-4 cursor-pointer">
                <div className='float-left w-[44px] h-[33px] bg-white text-[rgb(25,31,92)]  rounded-[39px]  m-[3px]  '><p className='ml-[7px] mt-[-2px] text-[24px]'>04</p></div>
                <div className='text-white '><p className='mt-[7px] text-[9px] ml-14 cursor-pointer'>Logic Gates with Boolean Functions - බූලියන් කාර්යයන් සහිත තාර්කික ද්වාර</p></div>
              </div>

              <div onClick = {()=>get_lesson_id(5)} className=" w-[266px] bg-[rgb(25,31,92)] h-[39px]  rounded-[39px]  mt-4 cursor-pointer">
                <div className='float-left w-[44px] h-[33px] bg-white text-[rgb(25,31,92)]  rounded-[39px]  m-[3px]  '><p className='ml-[7px] mt-[-2px] text-[24px]'>05</p></div>
                <div className='text-white '><p className='mt-[11px] text-[9px] ml-14 cursor-pointer'>Operating Systems - මෙහෙයුම් පද්ධති</p></div>
              </div>

              <div onClick = {()=>get_lesson_id(6)} className=" w-[266px] bg-[rgb(25,31,92)] h-[39px]  rounded-[39px]  mt-4 cursor-pointer">
                <div className='float-left w-[44px] h-[33px] bg-white text-[rgb(25,31,92)]  rounded-[39px]  m-[3px]  '><p className='ml-[7px] mt-[-2px] text-[24px]'>06</p></div>
                <div className='text-white '><p className='mt-[11px] text-[9px] ml-14 cursor-pointer'>Word Processing - වචන සැකසීම</p></div>
             </div>

              <div onClick = {()=>get_lesson_id(7)} className=" w-[266px] bg-[rgb(25,31,92)] h-[39px]  rounded-[39px]  mt-4 cursor-pointer">
                <div className='float-left w-[44px] h-[33px] bg-white text-[rgb(25,31,92)]  rounded-[39px]  m-[3px]  '><p className='ml-[7px] mt-[-2px] text-[24px]'>07</p></div>
                <div className='text-white '><p className='mt-[7px] text-[9px] ml-14 cursor-pointer'>Electronic Spreadsheet - ඉලෙක්ට්‍රොනික පැතුරුම්පත්</p></div>
              </div>

              <div onClick = {()=>get_lesson_id(8)} className=" w-[266px] bg-[rgb(25,31,92)] h-[39px]  rounded-[39px]  mt-4 cursor-pointer">
                <div className='float-left w-[44px] h-[33px] bg-white text-[rgb(25,31,92)]  rounded-[39px]  m-[3px]  '><p className='ml-[7px] mt-[-2px] text-[24px]'>08</p></div>
                <div className='text-white '><p className='mt-[7px] text-[9px] ml-14 cursor-pointer'>Electronic Presentations - ඉලෙක්ට්‍රොනික පැතුරුම්පත්</p></div>
              </div>

              <div onClick = {()=>get_lesson_id(9)} className=" w-[266px] bg-[rgb(25,31,92)] h-[39px]  rounded-[39px]  mt-4 cursor-pointer">
                <div className='float-left w-[44px] h-[33px] bg-white text-[rgb(25,31,92)]  rounded-[39px]  m-[3px]  '><p className='ml-[7px] mt-[-2px] text-[24px]'>09</p></div>
                <div className='text-white '><p className='mt-[11px] text-[9px] ml-14 cursor-pointer'>Database - ඉලෙක්ට්‍රොනික ඉදිරිපත් කිරීම්</p></div>
              </div>

      </div>
    </div>
          <div className='bottom-headder'>
          <Footer/>
          </div>
    

    
  </div>
  ) 
}