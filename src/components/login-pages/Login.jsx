import React from "react";
import holi1 from "../../images/Holi 1.png";
import holi2 from "../../images/Holi 2.png";
import jenzeict from '../../images/genZictcalss_logo 1.png';
import loginlogo from '../../images/login.png';
import { IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
//import { Link } from 'react-router-dom';


import "../../css/style.scss";
function Login() {
  return (
    <div className="">
      
        <div className="w-full bg-[rgb(25,31,92)] h-[69px] flex flex-row">
          <div className="float-left basis-1/5">
            <img className="mt-4" src={holi1} alt="" />
          </div>

          <div className="basis-3/5">
            <p className="mt-[7.59px] text-center text-white text-[20px] font-bold font-montserat">
              CONTACT US
            </p>
            <p className="mt-[1px] text-center text-white text-[14px] font-light font-montserat">
              GET IN TOUCH EASILY
            </p>
          </div>

          <div className=" basis-1/5">
            <img className="float-right" src={holi2} alt="" />
          </div>
        </div>

        <form className="w-[210px] h-[295px] bg-[rgb(25,31,92)] mt-[39px] rounded-[28px] m-auto flex flex-col box-border">
                <div className="w-[192px] h-[44px] bg-white  m-2 rounded-[72px] flex flex-raw">
                    <div className="w-[93px] h-[38px] bg-[rgb(25,31,92)] rounded-[72px] m-[3px] basis-1/2 hover:cursor-pointer">
                      <p className="text-[14px] font-montserat mt-2 ml-5 font-black text-white">LOGIN</p>
                    </div>
                    <div className="w-[93px] h-[38px] basis-1/2 hover:cursor-pointer">
                      <p className="text-[rgb(25,31,92)] text-[14px] font-montserat mt-[11px] ml-2 font-black">RGISTER</p>
                    </div>
                </div>

                <div className="w-[173px] h-[31px] flex flex-row ml-[18.5px] mt-2">
                  <div className="w-[36px] h-[31px] float-left bg-white rounded-s-[5px]">
                      <div className="mt-1 ml-[6px]"><IoMdMail size={24}  color="darkblue"/></div>    
                  </div>
                  <div className="w-[133px] h-[31px] ml-1 ">
                      <input type="email" name="email" placeholder="Enter Your Email " className="w-[133px] h-[31px] rounded-e-[5px] font-montserat text-[10px] font-bold"></input>
                  </div>
                </div>

                <div className="w-[173px] h-[31px] flex flex-row ml-[18.5px] mt-2">
                  <div className="w-[36px] h-[31px] float-left bg-white rounded-s-[5px]">
                      <div className="mt-1 ml-[6px]"><RiLockPasswordFill size={24}  color="darkblue" /></div>    
                  </div>
                  <div className="w-[133px] h-[31px] ml-1 ">
                      <input type="password" name="password" placeholder="Enter password " className="w-[133px] h-[31px] rounded-e-[5px] font-montserat text-[10px] font-bold"></input>
                  </div>
                </div>

                <div className="w-[173px] ml-[18.5px]">
                  <input type="checkbox"  name="rememberPassword" value="" className="w-[7px] h-[7px]"/>
                  <label for="remember " className="font-montserat text-[8px] text-white ml-1">Remember Password </label>
                  <label for="" className="font-montserat text-[8px] text-white ml-[5px] ">Foget Password </label>
                </div>

                <div className="w-[186px] h-auto ml-[11px] mt-[26px]"><img src={jenzeict} alt=""/></div>
        </form>
        <div className="m-auto w-[102px] h-[36px]">
            <button type="submit" name="submit" className=" w-[102px] h-[36px] bg-[rgb(25,31,92)] mt-2 rounded-full flex ">
                <img src={loginlogo} alt="" className="w-8 h-8 mt-[2px] ml-[3px]"/>
                <p className="text-white font-montserat text-[15px] font-bold mt-2 ml-1">LOGIN</p>
            </button>
        </div>
        
            
        
    

        

    </div>
  );
}

export default Login;
