import React from 'react'
import { useState } from 'react';
import HeaderBar from '../admin-components/navigateBar/HeaderBar'
import TopicForm from '../admin-components/TopicForm'

function GradesDetails() {
  const [file, setFile] = useState()
  const [subTopic, setSubTopic] = useState();
  const [subTopicDescription, setSubTopicDescription] = useState();
  const [pricing, setPricing] = useState();
  const [TopicNumber, setTopicNumber] = useState();
  const [FullPrice, setFullPrice] = useState();
  

  const Feesstate = "Free";    
  return (
    <div>
      <HeaderBar/>
      <div className='text-center mt-7'>
        Grade 10/11 Details
      </div>
      
      <div>
        <div className='bg-[#191F5C] m-0  rounded-[15px] mb-5 w-[238px] h-[195px] items-center absolute'>
          <div className='mx-[3px]'> {file && <img src={file}  alt='selected' className='rounded-b-[24px] rounded-t-[13px] pt-[2px] h-[135px] w-[238px]'/>}
          </div>
              <div className='flex flex-nowrap '>
                <div className='bg-white rounded-[50px] w-[47px] h-[47px] mt-2 ml-2 pr-4'>
                  <p className='pt-[0px] pl-[10px] text-[24px] font-bold text-[#191F5C]'>{TopicNumber}</p>
                  <div className='text-[#191F5C] text-[11px] mt-[-10px] ml-[11px] font-semibold '>{pricing}</div>
                </div>
              
                <div className='flex-wrap items-start pt-[5px] pl-2 pr-2'>
                  <p className='text-white font-montserat text-[10px] font-semibold '>{subTopic}</p>
                  <p className='leading-3 font-montserat text-[10px] text-white font-normal pt-[1px]'>{subTopicDescription}</p>
                </div>
              </div>
        </div>
      </div>
      
      <div className='mb-4 w-[]'> 
        <div>
          <TopicForm 
            setFile={setFile} 
            setSubTopic={setSubTopic}
            setSubTopicDescription={setSubTopicDescription}
            setPricing={setPricing}
            setTopicNumber={setTopicNumber}
            setFullPrice={setFullPrice}
          />
        </div>
      </div>
     
    </div>
   
  )
}

export default GradesDetails;