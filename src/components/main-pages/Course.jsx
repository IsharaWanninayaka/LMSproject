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
      <div className="title-box-1">
          <div className="holi-image1"> 
              <img src={Holi2} alt='Holi1'/> 
          </div>

          <div className="holi-image-2">
              <img src={Holi1} alt='Holi2'/> 
          </div>

          <div className='title-box-2'>
            <p className='title-name-1'>COURSES</p>
            <p className='title-name-2'>SINHALA</p>
          </div>   
      </div>

        
          
      <div className='content-box'>
          <div className=''><img src={content1} alt='content1' className='content-img'></img></div>
          <p className='content-name-1'>GRADE 10</p>
          <p className='content-name-2'>THEORY</p>
      </div>

      <div className='content-box'>
          <div className=''><img src={content1} alt='content1' className='content-img'></img></div>
          <p className='content-name-1'>GRADE 10</p>
          <p className='content-name-2'>THEORY</p>
      </div>

      <div className='content-box'>
          <div className=''><img src={content1} alt='content1' className='content-img'></img></div>
          <p className='content-name-1'>GRADE 10</p>
          <p className='content-name-2'>THEORY</p>
      </div>
      
      <div className='content-box'>
          <div className=''><img src={content1} alt='content1' className='content-img'></img></div>
          <p className='content-name-1'>GRADE 10</p>
          <p className='content-name-2'>THEORY</p>
      </div>
      
      
     

      
      <div className='bottom-headder'><Footer/></div>
    </div>
  );
  
}

