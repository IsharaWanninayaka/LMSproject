import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../../main-pages/Footer';
import holi1 from '../../../../images/Holi 1.png';
import holi2 from '../../../../images/Holi 2.png';
import lescontent1 from '../../../../images/Course Sinhala.png';

function Grade10lesson04() {

  const Feesstate = "Free";

  const Lessontitle1 ="What is Computer?";
  const Lessontitle2 = "What is Computer?";
  const Lessontitle3 = "What is Computer?";
  const Lessontitle4 = "What is Computer?";

  const Description1 = "A computer is a machine that can store and process information";
  const Description2 = "A computer is a machine that can store and process information";
  const Description3 = "A computer is a machine that can store and process information";
  const Description4 = "A computer is a machine that can store and process information";

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

    <div>
      <div class='flex flex-col gap-[1px] items-center'>
        <div className=" w-[266px] bg-[rgb(25,31,92)] h-[39px]  rounded-[39px]  mt-4 ">
            <div className='float-left w-[44px] h-[33px] bg-white text-[rgb(25,31,92)]  rounded-[39px]  m-[3px]'><p className='ml-[7px] mt-[-2px] text-[24px]'>04</p></div>
            <div className='text-white '><Link><p className='mt-[7px] text-[9px] ml-14'>Logic Gates with Boolean Functions - බූලියන් කාර්යයන් සහිත තාර්කික ද්වාර</p></Link></div>
        </div>
      </div>
    </div>

    
    <div>
      <div className='w-[238px] m-auto realtive pt-4 h-[976px]'>

        <div className='bg-[#191F5C] m-0  rounded-[15px] mb-5 w-[238px] h-[195px] items-center '>
          <Link to=''>
            <div className='mx-[3px]'><img src={lescontent1} alt='lescontent1' className='rounded-b-[24px] rounded-t-[13px] pt-[2px]'></img></div>
              <div className='flex flex-nowrap '>
                <div className='bg-white rounded-[50px] w-[47px] h-[47px] mt-2 ml-2 pr-4'>
                  <p className='pt-[0px] pl-[10px] text-[24px] font-bold text-[#191F5C]'>01</p>
                  <div className='text-[#191F5C] text-[11px] mt-[-10px] ml-[11px] font-semibold '>{Feesstate}</div>
                </div>
                
                  <div className='flex-wrap items-start pt-[5px] pl-2 pr-2'>
                    <p className='text-white font-montserat text-[10px] font-semibold '>{Lessontitle1}</p>
                    <p className='leading-3 font-montserat text-[10px] text-white font-normal pt-[1px]'>{Description1}</p>
                  </div>
              </div>
          </Link>
        </div>

        <div className='bg-[#191F5C] m-0  rounded-[15px] mb-5 w-[238px] h-[195px] items-center '>
          <Link to=''>
            <div className='mx-[3px]'><img src={lescontent1} alt='lescontent1' className='rounded-b-[24px] rounded-t-[13px] pt-[2px]'></img></div>
              <div className='flex flex-nowrap '>
                <div className='bg-white rounded-[50px] w-[47px] h-[47px] mt-2 ml-2 pr-4'>
                  <p className='pt-[0px] pl-[8px] text-[24px] font-bold text-[#191F5C]'>02</p>
                  <div className='text-[#191F5C] text-[11px] mt-[-10px] ml-[11px] font-semibold '>{Feesstate}</div>
                </div>
                
                  <div className='flex-wrap items-start pt-[5px] pl-2 pr-2'>
                    <p className='text-white font-montserat text-[10px] font-semibold '>{Lessontitle2}</p>
                    <p className='leading-3 font-montserat text-[10px] text-white font-normal pt-[1px]'>{Description2}</p>
                  </div>
              </div>
          </Link>
        </div>

        <div className='bg-[#191F5C] m-0  rounded-[15px] mb-5 w-[238px] h-[195px] items-center '>
          <Link to=''>
            <div className='mx-[3px]'><img src={lescontent1} alt='lescontent1' className='rounded-b-[24px] rounded-t-[13px] pt-[2px]'></img></div>
              <div className='flex flex-nowrap '>
                <div className='bg-white rounded-[50px] w-[47px] h-[47px] mt-2 ml-2 pr-4'>
                  <p className='pt-[0px] pl-[8px] text-[24px] font-bold text-[#191F5C]'>03</p>
                  <div className='text-[#191F5C] text-[11px] mt-[-10px] ml-[11px] font-semibold '>{Feesstate}</div>
                </div>
                
                  <div className='flex-wrap items-start pt-[5px] pl-2 pr-2'>
                    <p className='text-white font-montserat text-[10px] font-semibold '>{Lessontitle3}</p>
                    <p className='leading-3 font-montserat text-[10px] text-white font-normal pt-[1px]'>{Description3}</p>
                  </div>
              </div>
          </Link>
        </div>

        <div className='bg-[#191F5C] m-0  rounded-[15px] mb-5 w-[238px] h-[195px] items-center '>
          <Link to=''>
            <div className='mx-[3px]'><img src={lescontent1} alt='lescontent1' className='rounded-b-[24px] rounded-t-[13px] pt-[2px]'></img></div>
              <div className='flex flex-nowrap '>
                <div className='bg-white rounded-[50px] w-[47px] h-[47px] mt-2 ml-2 pr-4'>
                  <p className='pt-[0px] pl-[8px] text-[24px] font-bold text-[#191F5C]'>04</p>
                  <div className='text-[#191F5C] text-[11px] mt-[-10px] ml-[11px] font-semibold '>{Feesstate}</div>
                </div>
                
                  <div className='flex-wrap items-start pt-[5px] pl-2 pr-2'>
                    <p className='text-white font-montserat text-[10px] font-semibold '>{Lessontitle4}</p>
                    <p className='leading-3 font-montserat text-[10px] text-white font-normal pt-[1px]'>{Description4}</p>
                  </div>
              </div>
          </Link>
        </div>


      </div>
    </div>




    <div className='bottom-headder'>
        <Footer/>
    </div>

    </div>
   
  )
}

export default Grade10lesson04