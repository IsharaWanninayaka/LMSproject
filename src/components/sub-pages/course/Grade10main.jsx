import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../main-pages/Footer';
import holi1 from '../../../images/Holi 1.png';
import holi2 from '../../../images/Holi 2.png';
import { AuthContext } from '../../login-pages/authcontext';
import axios from "axios";


export default function Grade10main() {
  const navigate = useNavigate();
  const { auth,set_erroredetails,set_coursedetails } = useContext(AuthContext);
  
  const get_lesson_details = async (token,lesson_id) => {
    try{
    const response = await axios.post("http://localhost:8081/user/grade10/lesson/access",{lesson_id}, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    return response.data;
  }catch (error){
    set_erroredetails(error);
    navigate('/error');
    throw error;
  }
  }
  
  const get_topics = async (token,lesson_id) => {
    try{
    const response = await axios.post("http://localhost:8081/user/grade10/lesson/topics",{lesson_id}, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    return response.data;
  }catch (error){
    set_erroredetails(error);
    navigate('/error');
    throw error;
  }
  };

  const get_lesson_id = async (lesson_id) => {
    try{
    const detail = await get_lesson_details(auth.token,lesson_id);
    if(detail.access === true){
      const topics =  await get_topics(auth.token,lesson_id);
        if(topics){
          set_coursedetails(topics);
          navigate(`/course/grade10/lesson${lesson_id}`);
        }
    }else{
      alert("request access from admin");
    }
  }catch(error){
    set_erroredetails(error);
  }
  };
 
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
                <div  className='text-white '><p className='mt-[7px] text-[9px] ml-14'>Information and Communication - තොරතුරු හා සන්නිවේදන තාක්ෂණය</p></div>
              </div>

              <div onClick = {()=>get_lesson_id(2)} className=" w-[266px] bg-[rgb(25,31,92)] h-[39px]  rounded-[39px]  mt-4 cursor-pointer">
                <div className='float-left w-[44px] h-[33px] bg-white text-[rgb(25,31,92)]  rounded-[39px]  m-[3px]  '><p className='ml-[7px] mt-[-2px] text-[24px]'>02</p></div>
                <div className='text-white '><p className='mt-[7px] text-[9px] ml-14'>Fundamentals of a computer system - පරිගණක පද්ධතියක මූලික කරුණු </p></div>    
              </div>

              <div onClick = {()=>get_lesson_id(3)} className=" w-[266px] bg-[rgb(25,31,92)] h-[39px]  rounded-[39px]  mt-4 cursor-pointer">
                <div className='float-left w-[44px] h-[33px] bg-white text-[rgb(25,31,92)]  rounded-[39px]  m-[3px]  '><p className='ml-[7px] mt-[-2px] text-[24px]'>03</p></div>
                <div className='text-white '><p className='mt-[4px] text-[9px] ml-14 leading-3'>Data Representation Methods in the Computer system - පරිගණක පද්ධතියේ දත්ත නියෝජන ක්‍රම</p></div>
              </div>

              <div onClick = {()=>get_lesson_id(4)} className=" w-[266px] bg-[rgb(25,31,92)] h-[39px]  rounded-[39px]  mt-4 cursor-pointer">
                <div className='float-left w-[44px] h-[33px] bg-white text-[rgb(25,31,92)]  rounded-[39px]  m-[3px]  '><p className='ml-[7px] mt-[-2px] text-[24px]'>04</p></div>
                <div className='text-white '><p className='mt-[7px] text-[9px] ml-14'>Logic Gates with Boolean Functions - බූලියන් කාර්යයන් සහිත තාර්කික ද්වාර</p></div>
              </div>

              <div onClick = {()=>get_lesson_id(5)} className=" w-[266px] bg-[rgb(25,31,92)] h-[39px]  rounded-[39px]  mt-4 cursor-pointer">
                <div className='float-left w-[44px] h-[33px] bg-white text-[rgb(25,31,92)]  rounded-[39px]  m-[3px]  '><p className='ml-[7px] mt-[-2px] text-[24px]'>05</p></div>
                <div className='text-white '><p className='mt-[11px] text-[9px] ml-14'>Operating Systems - මෙහෙයුම් පද්ධති</p></div>
              </div>

              <div onClick = {()=>get_lesson_id(6)} className=" w-[266px] bg-[rgb(25,31,92)] h-[39px]  rounded-[39px]  mt-4 cursor-pointer">
                <div className='float-left w-[44px] h-[33px] bg-white text-[rgb(25,31,92)]  rounded-[39px]  m-[3px]  '><p className='ml-[7px] mt-[-2px] text-[24px]'>06</p></div>
                <div className='text-white '><p className='mt-[11px] text-[9px] ml-14'>Word Processing - වචන සැකසීම</p></div>
             </div>

              <div onClick = {()=>get_lesson_id(7)} className=" w-[266px] bg-[rgb(25,31,92)] h-[39px]  rounded-[39px]  mt-4 cursor-pointer">
                <div className='float-left w-[44px] h-[33px] bg-white text-[rgb(25,31,92)]  rounded-[39px]  m-[3px]  '><p className='ml-[7px] mt-[-2px] text-[24px]'>07</p></div>
                <div className='text-white '><p className='mt-[7px] text-[9px] ml-14'>Electronic Spreadsheet - ඉලෙක්ට්‍රොනික පැතුරුම්පත්</p></div>
              </div>

              <div onClick = {()=>get_lesson_id(8)} className=" w-[266px] bg-[rgb(25,31,92)] h-[39px]  rounded-[39px]  mt-4 cursor-pointer">
                <div className='float-left w-[44px] h-[33px] bg-white text-[rgb(25,31,92)]  rounded-[39px]  m-[3px]  '><p className='ml-[7px] mt-[-2px] text-[24px]'>08</p></div>
                <div className='text-white '><p className='mt-[7px] text-[9px] ml-14'>Electronic Presentations - ඉලෙක්ට්‍රොනික පැතුරුම්පත්</p></div>
              </div>

              <div onClick = {()=>get_lesson_id(9)} className=" w-[266px] bg-[rgb(25,31,92)] h-[39px]  rounded-[39px]  mt-4 cursor-pointer">
                <div className='float-left w-[44px] h-[33px] bg-white text-[rgb(25,31,92)]  rounded-[39px]  m-[3px]  '><p className='ml-[7px] mt-[-2px] text-[24px]'>09</p></div>
                <div className='text-white '><p className='mt-[11px] text-[9px] ml-14'>Database - ඉලෙක්ට්‍රොනික ඉදිරිපත් කිරීම්</p></div>
              </div>

      </div>
    </div>
          <div className='bottom-headder'>
          <Footer/>
          </div>
    

    
  </div>
  ) 
}