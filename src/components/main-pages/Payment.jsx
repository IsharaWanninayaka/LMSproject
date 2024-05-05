import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../main-pages/Footer';
import holi1 from '../../images/Holi 1.png';
import holi2 from '../../images/Holi 2.png';
import genzeictlogo1 from '../../images/genZictclass LOGO.png';
import payicon from '../../images/payicon.png';


function Payment() {
  return (

    <div className="wrapper">

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


      <div className='h-[60px] '>
      < Link to=''>
          <div className='bg-[#191F5C] w-[225px] h-[42px] m-auto  rounded-[60px] mt-12 '>
            
            <div className='items-center m-auto text-white w-[170px] h-[]20px '>
              <p className='pt-[0px] text-center pl-3 text-[16px] font-semibold'>ONLINE PAYMENT</p>
            </div>
            <div className='w-[215px] h-[10px] items-center '>
              <p className='m-auto text-white text-[8px] pl-11 mt-[-2px] leading-[10px]'>Online payment is the electronic transfer of funds via the internet</p>
            </div>
            <div className=''>
              <img className='flex items-start mt-[-28px] pl-2 ml-[-4px] w-[42px] h-[35px]' src={payicon} alt=''/>
            </div>

          </div>
        </Link>
      </div>


      <div className='h-[200px] '>
      < Link to='/payment/bankpayment'>
          <div className='bg-[#191F5C] w-[225px] h-[42px] m-auto  rounded-[60px]  '>
            
            <div className='items-center m-auto text-white w-[170px] h-[]20px '>
              <p className='pt-[0px] text-center ml-[-5px] text-[16px] font-semibold'>BANK PAYMENT</p>
            </div>
            <div className='w-[215px] h-[10px] items-center '>
              <p className='m-auto text-white text-[8px] pl-11 mt-[-2px] leading-[10px]'>Bank payments are payments made from one bank account directly to another</p>
            </div>
            <div className=''>
              <img className='flex items-start mt-[-28px] pl-2 ml-[-4px] w-[42px] h-[35px]' src={payicon} alt=''/>
            </div>

          </div>
        </Link>
      </div>

      
    <div className='m-auto w-[216px] h-[216px] mt-[-40px]'>
      <img src={genzeictlogo1} alt='genzeictlogo' />
    </div>

    <div className='bottom-headder'>
        <Footer/>
    </div>

    </div>
  )
}

export default Payment