import React from 'react';
import Footer from '../main-pages/Footer';
import '../../css/course.css';
//images
import Holi1 from '../../images/Holi 1.png';
import Holi2 from '../../images/Holi 2.png';
import content1 from '../../images/final 1.jpg';
//import { Link } from 'react-router-dom'

export default function Course() {
  return (
    <div className=''>
      <div className='w-full bg-[rgb(25,31,92)] h-[69px] flex flex-row fixed '>
        <div className='float-left basis-1/5'>
            <img className='mt-4' src={Holi1} alt=''/>
        </div>

        <div className='basis-3/5'>
          <p className='mt-[7.59px] text-center text-white text-[20px] font-bold font-montserat' >COURSES</p>
          <p className='mt-[1px] text-center text-white text-[14px] font-light '>SINHALA</p>
        </div>

        <div className=' basis-1/5'>
          <img className='float-right' src={Holi2} alt=''/>
        </div>
      </div>

        
      <div className='w-[238px] m-auto realtive pt-20 h-[976px]'>  
        <div className='content-box'>
            <div className=''><img src={content1} alt='content1' className='content-img'></img></div>
            <p className='content-name-1 font-montserat'>GRADE 10</p>
            <p className='content-name-2 font-montserat'>THEORY</p>
        </div>

        <div className='content-box'>
            <div className=''><img src={content1} alt='content1' className='content-img'></img></div>
            <p className='content-name-1 font-montserat'>GRADE 10</p>
            <p className='content-name-2 font-montserat'>THEORY</p>
        </div>

        <div className='content-box'>
            <div className=''><img src={content1} alt='content1' className='content-img'></img></div>
            <p className='content-name-1 font-montserat'>GRADE 10</p>
            <p className='content-name-2 font-montserat'>THEORY</p>
        </div>

        <div className='content-box'>
            <div className=''><img src={content1} alt='content1' className='content-img'></img></div>
            <p className='content-name-1 font-montserat'>GRADE 10</p>
            <p className='content-name-2 font-montserat'>THEORY</p>
        </div>
      </div> 
      
     

      
      <div className='bottom-headder'><Footer/></div>
    </div>
  );
  
}

