import React from 'react';
import Footer from './Footer';
import '../../css/contact.css';
//react icons
import { AiFillYoutube } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdAddCall } from "react-icons/md";

export default function Contact() {
  return (
    <div className="wrapper">
      <div className='main'>
        <p className='bg-amber-600'>contact us</p>
        <div className='contact-no'>
          <div className='contact-no-icon'>
            <MdAddCall size={30}/>
          </div>
          <div className='contact-no-text'>
            <span>071 23 45 678</span>
          </div>
        </div>

        <div className='icon-contact'>
          <div className="all-icon">
            <div className='youtube'>
              <AiFillYoutube size={30}  className='icon-tag'/>
            </div>
            <p className='icon-name'>Youtube</p>
          </div>
          <div className="all-icon">
            <div className='facebook'>
              <CgFacebook size={30}  className='icon-tag'/>
            </div>
            <p className='icon-name'>Facebook</p>
          </div>
          <div className="all-icon">
            <div className='whatsapp'>
              <IoLogoWhatsapp size={30}  className='icon-tag'/>
            </div>
            <p className='icon-name'>WhatsApp</p>
          </div>
    </div>
        </div>
        <div className='bottom-headder'><Footer/></div>
    </div>
  )
}
