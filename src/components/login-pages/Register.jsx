import React, { useState } from "react";
import holi1 from "../../images/Holi 1.png";
import holi2 from "../../images/Holi 2.png";
import jenzeict2 from '../../images/genZictclass LOGO.png';
import loginlogo from '../../images/login.png';
import memberHoli from '../../images/Member_Holi 1.png';
import memberHoli2 from '../../images/Member Holi 2 1.png';
import { IoMdMail } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { FaMobile } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import Validation from "../Scripts/registervalidation";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
//import { Link } from 'react-router-dom';

import "../../css/style.scss";

function Register() {
  const [values,setvalues] = useState({
    name:"",
    phone:"",
    email:"",
    password:""
  });
  const [error,seterror] = useState({});
  const navigate = useNavigate();
  const [loading,setloading] = useState(false);

  const controllSubmit=(e)=>{
    e.preventDefault();
    seterror(Validation(values));

    if(error.name === "" && error.email === "" && error.password ==="" && error.phone === "" ){
      setloading(true);
      axios.post('http://localhost:5000/user/',values)
      .then(res=>{
        navigate("/login");
      })
      .catch(err=>{
        if(err.response){
          if(err.response.data.message === "User already exists"){
              alert("User already exists");
          }
        }
        console.log(err);
      })
      .finally(()=>{setloading(false)});
    }
  }
   
  


  return (
    <div className="h-auto">
      
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

        <form action="" onSubmit={controllSubmit}>
            <div className="w-[210px] h-[295px] bg-[rgb(25,31,92)] mt-[39px] rounded-[28px] m-auto flex flex-col">
                <div className="w-[192px] h-[44px] bg-white  m-2 rounded-[72px] flex flex-raw">
                        <Link to='/login'>
                            <div className="w-[93px] h-[38px]   m-[3px] basis-1/2 hover:cursor-pointer">
                              <p className="text-[14px] font-montserat mt-[11px] ml-5 font-black text-[rgb(25,31,92)] cursor-pointer">LOGIN</p>
                            </div>
                        </Link>
                            <div className="bg-[rgb(25,31,92)] rounded-[72px] w-[93px] h-[38px] basis-1/2 hover:cursor-pointer m-[3px]">
                              <p className=" text-[14px] font-montserat mt-2 ml-[11px] font-black text-white cursor-pointer">RGISTER</p>
                            </div>
                </div>

                <div className="w-[173px] h-[31px] flex flex-row ml-[18.5px] mt-2">
                  <div className="w-[36px] h-[31px] float-left bg-white rounded-s-[5px]">
                      <div className="mt-1 ml-[6px]"><FaCircleUser  size={24}  color="darkblue"/></div>    
                  </div>
                  <div className="w-[133px] h-[31px] ml-1 ">
                      <input onChange={e => setvalues({...values,name:e.target.value})} type="name" name="name" placeholder="Full Name " className="w-[133px] h-[31px] rounded-e-[5px] font-montserat text-[10px] font-bold"></input>
                      <span className=" text-[8px] absolute pb-[20px] ml-[-132px] mt-5 text-red-500">{error.name}</span>
                  </div>
                </div>

                <div className="w-[173px] h-[31px] flex flex-row ml-[18.5px] mt-2">
                  <div className="w-[36px] h-[31px] float-left bg-white rounded-s-[5px]">
                      <div className="mt-1 ml-[6px]"><FaMobile  size={24}  color="darkblue" /></div>    
                  </div>
                  <div className="w-[133px] h-[31px] ml-1 ">
                      <input onChange={e => setvalues({...values,phone:e.target.value})} type="text" name="phone" placeholder="Phone Number " className="w-[133px] h-[31px] rounded-e-[5px] font-montserat text-[10px] font-bold"></input>
                      <span className=" text-[8px] absolute pb-[20px] ml-[-132px] mt-5 text-red-500">{error.phone}</span>
                  </div>
                </div>

                <div className="w-[173px] h-[31px] flex flex-row ml-[18.5px] mt-2">
                  <div className="w-[36px] h-[31px] float-left bg-white rounded-s-[5px]">
                      <div className="mt-1 ml-[6px]"><IoMdMail size={24}  color="darkblue" /></div>    
                  </div>
                  <div className="w-[133px] h-[31px] ml-1 ">
                      <input onChange={e => setvalues({...values,email:e.target.value})} type="email" name="email" placeholder="Enter email " className="w-[133px] h-[31px] rounded-e-[5px] font-montserat text-[10px] font-bold"></input>
                      <span className=" text-[8px] absolute pb-[20px] ml-[-132px] mt-5 text-red-500">{error.email}</span>
                  </div>
                </div>

                <div className="w-[173px] h-[31px] flex flex-row ml-[18.5px] mt-2">
                  <div className="w-[36px] h-[31px] float-left bg-white rounded-s-[5px]">
                      <div className="mt-1 ml-[6px]"><RiLockPasswordFill size={24}  color="darkblue" /></div>    
                  </div>
                  <div className="w-[133px] h-[31px] ml-1 ">
                      <input onChange={e => setvalues({...values,password:e.target.value})} type="password" name="password" placeholder="Enter password " className="w-[133px] h-[31px] rounded-e-[5px] font-montserat text-[10px] font-bold"></input>
                      <span className=" text-[8px] absolute pb-[20px] ml-[-132px] mt-5 text-red-500">{error.password}</span>
                  </div>
                </div>

                <button>
                    <div className=" w-[152px] h-[22px] bg-[rgb(246,190,29)] mt-4 m-auto rounded-full">
                            <p className="text-white font-montserat text-[10px] font-bold text-center pt-[3px] cursor-pointer">Verify My Email Address</p>
                    </div>
                </button>
            </div>  

            <div className="m-auto w-[102px] h-[36px] ">
            <button  type="submit" name="submit" className=" w-[124px] h-[36px] bg-[rgb(25,31,92)] mt-2 rounded-full flex ">
              {loading ? <span className=''><div class="w-6 h-6 border-2 border-dashed rounded-full animate-spin border-white ml-[7px] mt-[6px]"></div><p  className='ml-[40px] mt-[-24px] float-right text-white'>loading...</p></span> :
              <div className="flex"><img src={loginlogo} alt="" className="w-8 h-8 mt-[3px] ml-[3px]"/><p className="text-white font-montserat text-[15px] font-bold mt-2 ml-1 cursor-pointer">REGISTER</p></div> 
              }
            </button>
            </div>
        </form>

        
        
        <div className="w-full h-[110px] bg-[rgb(25,31,92)] m-auto mt-[39px]">
          <p className="font-bold text-white text-[14px] pt-2 text-center font-montserat">Meet Our Web Development Team</p>
          <p className=" text-white text-[14px] text-center pt-1 font-light font-montserat">Our team consist of passionate individual dedicated to creating exeptional web experiences.</p>
        </div>
        
        <div className="w-[320px] m-auto mt-5">
          <div className="w-[320px] h-[128px]">
            <div className="relative">
              <div className="w-[118px] h-[118px] rounded-full bg-[rgb(25,31,92)] absolute top-[47px] left-[157px]"></div>
              <img className="ml-20 absoloute" src={memberHoli} alt="" />
            </div>
          </div>
          <div className="w-[320px] m-auto  ">
            <ul>
              <li className="text-[rgb(25,31,92)] font-bold text-[14px] ml-1 list-disc">Name:</li>
                  <dd className=" text-[rgb(25,31,92)] font-light text-[14px] ml-1">W.B.W.M.R.M.C Aluwihare</dd>
              <li className=" text-[rgb(25,31,92)] font-bold text-[14px] ml-1 list-disc">Role :</li>
                  <dd className="text-[rgb(25,31,92)] font-light text-[14px] ml-1">Backend Developper</dd>
              <li className="text-[rgb(25,31,92)] font-bold text-[14px] ml-1 list-disc">Expertise :</li>
                  <dd className="text-[rgb(25,31,92)] font-light text-[14px] ml-1 list-disc">JavaScript,Css,Nodejs,React</dd>
              <li className="text-[rgb(25,31,92)] font-bold text-[14px] ml-1 list-disc">Bio :</li>
                  <dd className="text-[rgb(25,31,92)] font-light text-[14px] text-justify ml-1">
                    Sample Name is a seasoned developer
                    with a passion for crafting beautiful 
                    and functional user interfaces.
                  </dd>
            </ul>
          </div>
        </div>

        <div className="w-[320px] m-auto mt-5">
          <div className="w-[320px] h-[164spx]">
            <div className="relative">
              <div className="w-[118px] h-[118px] rounded-full bg-[rgb(25,31,92)] absolute top-[47px] left-[65px]"></div>
              <img className="absoloute" src={memberHoli2} alt="" />
            </div>
          </div>
          <div className="w-[320px] m-auto  ">
            <ul>
              <li className="text-[rgb(25,31,92)] font-bold text-[14px] ml-1 list-disc">Name:</li>
                  <dd className=" text-[rgb(25,31,92)] font-light text-[14px] ml-1">W.B.W.M.R.M.C Aluwihare</dd>
              <li className=" text-[rgb(25,31,92)] font-bold text-[14px] ml-1 list-disc">Role :</li>
                  <dd className="text-[rgb(25,31,92)] font-light text-[14px] ml-1">Backend Developper</dd>
              <li className="text-[rgb(25,31,92)] font-bold text-[14px] ml-1 list-disc">Expertise :</li>
                  <dd className="text-[rgb(25,31,92)] font-light text-[14px] ml-1">JavaScript,Css,Nodejs,React</dd>
              <li className="text-[rgb(25,31,92)] font-bold text-[14px] ml-1 list-disc">Bio :</li>
                  <dd className="text-[rgb(25,31,92)] font-light text-[14px] text-justify ml-1">
                    Sample Name is a seasoned developer
                    with a passion for crafting beautiful 
                    and functional user interfaces.
                  </dd>
          </ul>
          </div>
        </div>

        <div className="w-[320px] m-auto mt-5">
          <div className="w-[320px] h-[128px]">
            <div className="relative">
              <div className="w-[118px] h-[118px] rounded-full bg-[rgb(25,31,92)] absolute top-[47px] left-[157px]"></div>
              <img className="ml-20 absoloute" src={memberHoli} alt="" />
            </div>
          </div>
          <div className="w-[320px] m-auto  ">
            <ul>
              <li className="text-[rgb(25,31,92)] font-bold text-[14px] ml-1 list-disc">Name:</li>
                  <dd className=" text-[rgb(25,31,92)] font-light text-[14px] ml-1">W.B.W.M.R.M.C Aluwihare</dd>
              <li className=" text-[rgb(25,31,92)] font-bold text-[14px] ml-1 list-disc">Role :</li>
                  <dd className="text-[rgb(25,31,92)] font-light text-[14px] ml-1">Backend Developper</dd>
              <li className="text-[rgb(25,31,92)] font-bold text-[14px] ml-1 list-disc">Expertise :</li>
                  <dd className="text-[rgb(25,31,92)] font-light text-[14px] ml-1 list-disc">JavaScript,Css,Nodejs,React</dd>
              <li className="text-[rgb(25,31,92)] font-bold text-[14px] ml-1 list-disc">Bio :</li>
                  <dd className="text-[rgb(25,31,92)] font-light text-[14px] text-justify ml-1">
                    Sample Name is a seasoned developer
                    with a passion for crafting beautiful 
                    and functional user interfaces.
                  </dd>
            </ul>
          </div>
        </div>

        <div className="w-[320px] m-auto mt-5">
          <div className="w-[320px] h-[164spx]">
            <div className="relative">
              <div className="w-[118px] h-[118px] rounded-full bg-[rgb(25,31,92)] absolute top-[47px] left-[65px]"></div>
              <img className="absoloute" src={memberHoli2} alt="" />
            </div>
          </div>
          <div className="w-[320px] m-auto  ">
            <ul>
              <li className="text-[rgb(25,31,92)] font-bold text-[14px] ml-1 list-disc">Name:</li>
                  <dd className=" text-[rgb(25,31,92)] font-light text-[14px] ml-1">W.B.W.M.R.M.C Aluwihare</dd>
              <li className=" text-[rgb(25,31,92)] font-bold text-[14px] ml-1 list-disc">Role :</li>
                  <dd className="text-[rgb(25,31,92)] font-light text-[14px] ml-1">Backend Developper</dd>
              <li className="text-[rgb(25,31,92)] font-bold text-[14px] ml-1 list-disc">Expertise :</li>
                  <dd className="text-[rgb(25,31,92)] font-light text-[14px] ml-1">JavaScript,Css,Nodejs,React</dd>
              <li className="text-[rgb(25,31,92)] font-bold text-[14px] ml-1 list-disc">Bio :</li>
                  <dd className="text-[rgb(25,31,92)] font-light text-[14px] text-justify ml-1">
                    Sample Name is a seasoned developer
                    with a passion for crafting beautiful 
                    and functional user interfaces.
                  </dd>
          </ul>
          </div>
        </div>

        <div className="m-auto w-[320px]">
          <img src={jenzeict2} alt=""className="m-auto"/>
        </div>
        
      
    </div>
  );
}

export default Register;
