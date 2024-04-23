import React from 'react';
import Footer from './Footer';
//react icons
import { RiAccountCircleLine } from "react-icons/ri";

export default function Account() {

  const userName ="Ishara Wanninayaka";
  const contactNo ="071 53 89 697" ;
  const email ="isharawanninayaka@gmail.com";


  return (
      <div className="wrapper">
        <div className='account-main'>
          <div>
            <p className='acount-text'>your Account</p>
          </div>

          <div className='account-icon'>
            <RiAccountCircleLine size={150} color='rgb(25,31,92)'/>
          </div>

          <div className='account-details'>
            <div className='text-acc-details'><p className="name">Name</p><span className="name">{userName}</span></div>
            <div className='text-acc-details'><p className="phone">Phone</p><span className="phone">{contactNo}</span></div>
            <div className='text-acc-details'><p className="email">Email</p><span className="email">{email}</span></div>
          </div>
          <div className='bottom-headder'><Footer/></div>
        </div>
      </div>
  )
}
