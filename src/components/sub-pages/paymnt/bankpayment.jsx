import React from 'react'
//import { Link } from 'react-router-dom';
import Footer from '../../main-pages/Footer';
import holi1 from '../../../images/Holi 1.png';
import holi2 from '../../../images/Holi 2.png';

function bankpayment() {
  return (

    <div className="">

    <div className='w-full bg-[rgb(25,31,92)] h-[69px] flex flex-row'>
      <div className='float-left basis-1/5'>
          <img className='mt-4' src={holi1} alt=''/>
      </div>

      <div className='basis-3/5'>
        <p className='mt-[1px] text-center text-white text-[30px] font-bold font-montserat'> PAYMENT </p>
        <p className='mt-[-5px] text-center text-white text-[20px] font-light '>OPTION </p>
      </div>

      <div className=' basis-1/5'>
        <img className='float-right' src={holi2} alt=''/>
      </div>
    </div>


    <div className='h-[450px]'>
        
        <div className='pt-6 '>
            
            <div className='bg-[#191F5C] w-[167px] h-[20px] m-auto  rounded-[60px] '>
                <p className='text-white text-[16px] text-center mt-[-3px] absolute ml-4'> Step 01 - පියවර 01</p>
            </div>

            <div className='m-auto item-center w-[284px] h-[38px] pt-3'>
                <p className='m-0'>
                    <ul>
                        <li className='text-[16px] leading-4 text-[rgb(25,31,92)] font-semibold list-disc'>ඔබගේ පාඩමේ අදාල මුදල පහත දක්වා
                            <dd>ඇති ගිණුම් අංකයට බැර කරන්න.</dd>
                        </li>
                    </ul>
                </p>
            </div>
            
        </div>


        <div className='pt-6 '>

            <div className='bg-[#191F5C] w-[167px] h-[20px] m-auto  rounded-[60px] ' >
                <p className='text-white text-[16px] text-center mt-[-3px] absolute ml-4'> Step 02 - පියවර 02  </p>
            </div>

            <div  className='m-auto item-center w-[284px] h-[38px] pt-3'>
                <p  className='m-0'>
                    <ul>
                        <li className='text-[16px] leading-4 text-[rgb(25,31,92)] font-semibold list-disc'>
                            ඉන් පසු පහත දක්වා ඇත් WhatsApp අංකයට Slip එක සහ අදාල පාඩම සමඟ Message එකක් යොමු කරන්න.
                        </li>
                        <li className='text-[16px] leading-4 text-[rgb(25,31,92)] font-semibold list-disc mt-4'>
                            Account Holder’s Name : 
                            W.B.W.R.M.M.S.Aluwihare
                        </li>
                        <li className='text-[16px] leading-4 text-[rgb(25,31,92)] font-semibold mt-2'>
                            <dd>Account No : 90887846 </dd>
                            <dd>Bank : BOC Bank </dd>
                            <dd> Branch : Kurunegala Branch </dd>
                        </li>

                        <li className='text-[16px] leading-4 text-[rgb(25,31,92)] font-semibold list-disc mt-4'>
                            Account Holder’s Name : 
                            W.B.W.R.M.M.S.Aluwihare
                        </li>
                        <li className='text-[16px] leading-4 text-[rgb(25,31,92)] font-semibold mt-2'>
                            <dd>Account No : 8013038690 </dd>
                            <dd>Bank : Commercial Bank </dd>
                            <dd> Branch : Kurunegala Branch </dd>
                        </li>
                        <li className='text-[16px] leading-4 text-[rgb(25,31,92)] font-semibold list-disc mt-4'>
                            WhatsApp Number :
                            <dd>074 030 76 71 </dd>
                        </li>

                    </ul>
                </p>
            </div>
        </div>


    </div>

    <div className='h-[200px] pt-4'>
            
            <div className='bg-[#191F5C] w-[167px] h-[20px] m-auto  rounded-[60px] '>
                <p className='text-white text-[16px] text-center mt-[-3px] absolute ml-4'> Step 03 - පියවර 03</p>
            </div>

            <div className='m-auto item-center w-[284px] h-[38px] pt-3'>
                <p className='m-0'>
                    <ul>
                        <li className='text-[16px] leading-4 text-[rgb(25,31,92)] font-semibold list-disc'>පැය 5ක් - 6ක් ඇතුලත අදාල පාඩම නැරඹීමට හැකි.
                          
                        </li>
                    </ul>
                </p>
            </div>
            
    </div>




    <div className='bottom-headder'>
        <Footer/>
    </div>

    </div>
  )
}

export default bankpayment